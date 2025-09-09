import { PrismaClient, UserRole } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

const createAdmin = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  console.log(data);
  const UserData = {
    email: data.admin.email,
    password: hashedPassword,
    role: UserRole.ADMIN,
    name: data.admin.name,
  };
  const result = await prisma.$transaction(async (tx) => {
    const createUser = await tx.user.create({
      data: UserData,
    });
    const createAdmin = await tx.admin.create({
      data: data.admin,
    });
    return createAdmin;
  });
  return result;
};

export const userService = {
  createAdmin,
};
