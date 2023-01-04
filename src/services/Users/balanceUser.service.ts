import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";

const balanceUserService = async (user: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const balance = await userRepository.findOneBy({ username: user });

  return balance?.accounts.balance;
};

export default balanceUserService;
