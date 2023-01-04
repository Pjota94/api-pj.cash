import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";
import { ICreateUser } from "../../interfaces/users.interfaces";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginService = async ({
  username,
  password,
}: ICreateUser): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ username });

  if (!findUser) {
    throw new AppError("Invalid password or email", 400);
  }

  const passwordMatch = await compare(password, findUser.password);

  if (!passwordMatch) {
    throw new AppError("Invalid password or email", 400);
  }

  const token = jwt.sign(
    { username: username },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: findUser.id,
    }
  );

  return token;
};

export default loginService;
