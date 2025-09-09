import { Prisma, PrismaClient, UserRole } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

const getAdmin = async (params: any) => {
  const { search, ...filterData } = params;
  const addCondition: Prisma.AdminWhereInput[] = [];
  const adminSearchAbleFields = ["name", "email"];
  if (search) {
    addCondition.push({
      OR: adminSearchAbleFields.map((field) => ({
        [field]: {
          contains: search,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    addCondition.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.AdminWhereInput = { AND: addCondition };
  const result = await prisma.admin.findMany({
    // @ts-ignore
    where: whereCondition,
  });
  return result;
};

export const adminService = {
  getAdmin,
};
