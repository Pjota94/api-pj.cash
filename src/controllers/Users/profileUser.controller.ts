import { Request, Response } from "express";
import profileUserService from "../../services/Users/profileUser.service";

const profileUserController = async (req: Request, res: Response) => {
  const user: string = req.user.usarname!;
  const showprofile = await profileUserService(user);
  res.json(showprofile);
};

export default profileUserController;
