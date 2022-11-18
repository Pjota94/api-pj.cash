import { AppDataSource } from "../../data-source";
import Accounts from "../../entities/accounts.entity";
import Transactions from "../../entities/transactions.entity";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";
import { ITransfer } from "../../interfaces/transfer.interfaces";
import { formatDate } from "../../utils/date";

const transferService = async (
  { value }: ITransfer,
  idUserCashOut: string,
  username: string
) => {
  const transactionsRepository = AppDataSource.getRepository(Transactions);
  const userRepository = AppDataSource.getRepository(User);

  const findUserCashOut = await userRepository.findOneBy({ id: idUserCashOut });
  const findUserCashIn = await userRepository.findOneBy({ username });

  if (findUserCashOut?.username == username) {
    throw new AppError("Cannot send to yourself", 403);
  }

  const balanceUpdateCashIn =
    Number(value) + Number(findUserCashIn?.accounts.balance);
  const balanceUpdateCashOut =
    Number(findUserCashOut?.accounts.balance) - Number(value);

  if (Number(value) > Number(findUserCashOut?.accounts.balance)) {
    throw new AppError("Insufficient funds", 400);
  }

  await AppDataSource.createQueryBuilder()
    .update(Accounts)
    .set({ balance: balanceUpdateCashIn })
    .where({ id: findUserCashIn?.accounts.id })
    .execute();

  await AppDataSource.createQueryBuilder()
    .update(Accounts)
    .set({ balance: balanceUpdateCashOut })
    .where({ id: findUserCashOut?.accounts.id })
    .execute();

  const findUserCashInUpdate = await userRepository.findOneBy({ username });
  const findUserCashOutUpdate = await userRepository.findOneBy({
    id: idUserCashOut,
  });

  const transfer = transactionsRepository.create({
    value,
    debitedAccount: findUserCashOutUpdate?.accounts,
    creditedAccount: findUserCashInUpdate?.accounts,
    createdAt: formatDate(),
  });

  await transactionsRepository.save(transfer);

  return transfer;
};

export default transferService;
