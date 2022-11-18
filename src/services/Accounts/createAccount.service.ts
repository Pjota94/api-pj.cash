import { AppDataSource } from "../../data-source";
import Accounts from "../../entities/accounts.entity";

const createAccountService = async () => {
  const accountsRepository = AppDataSource.getRepository(Accounts);

  const generateAccount = accountsRepository.create({ balance: 100 });

  await accountsRepository.save(generateAccount);

  return generateAccount;
};

export default createAccountService;
