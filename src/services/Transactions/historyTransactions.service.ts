import { AppDataSource } from "../../data-source";
import Transactions from "../../entities/transactions.entity";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";

const historyTransactionsService = async (userId: string) => {
  const transactionsRepository = AppDataSource.getRepository(Transactions);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  const debited = await transactionsRepository.findBy({
    debitedAccount: user?.accounts,
  });
  const credited = await transactionsRepository.findBy({
    creditedAccount: user?.accounts,
  });

  return { debited, credited };
};

export default historyTransactionsService;
