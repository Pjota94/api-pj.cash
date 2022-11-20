import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entity";

const profileUserService = async (user: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const profile = await userRepository.findOneBy({ username: user });

  return profile?.username;
};

export default profileUserService;
