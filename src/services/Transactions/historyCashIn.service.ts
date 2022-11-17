import { AppDataSource } from "../../data-source";
import Transactions from "../../entities/transactions.entity";
import User from "../../entities/users.entity";

const historyCashInService = async (userId: string) => {
  const transactionsRepository = AppDataSource.getRepository(Transactions);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  const history = await transactionsRepository.findBy({
    creditedAccount: user?.accounts,
  });

  return history;
};

export default historyCashInService;
