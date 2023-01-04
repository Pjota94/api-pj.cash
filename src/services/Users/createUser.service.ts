import { AppDataSource } from "../../data-source";
import Accounts from "../../entities/accounts.entity";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";
import { ICreateUser } from "../../interfaces/users.interfaces";
import { hash } from "bcryptjs";
import createUserSerializer from "../../serializers/user.serializer";

const createUserService = async (
  { username, password }: ICreateUser,
  account: Accounts
): Promise<User> => {
  const serializedPassword = await createUserSerializer.validate({ password });
  const userRepository = AppDataSource.getRepository(User);

  if (username.length < 3) {
    throw new AppError("Minimum 3 characters", 400);
  }

  const userAlreadyExist = await userRepository.findOneBy({ username });

  if (userAlreadyExist) {
    throw new AppError("User Already Exist", 400);
  }

  const hashedPassword = await hash(password, 10);

  const createUser = userRepository.create({
    username,
    password: hashedPassword,
    accounts: account,
  });

  await userRepository.save(createUser);

  return createUser;
};

export default createUserService;
