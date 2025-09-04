import { Request, Response } from "express";

const createAdmin = async (req: Request, res: Response) => {
  return {
    message: "admin created",
  };
};

export const userService = {
  createAdmin,
};
