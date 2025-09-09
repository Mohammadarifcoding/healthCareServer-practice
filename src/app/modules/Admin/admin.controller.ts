import { Request, Response } from "express";
import { adminService } from "./admin.service";

const getAdmin = async (req: Request, res: Response) => {
  const query = req.query;
  try {
    const result = await adminService.getAdmin(query);
    res.status(200).json({
      success: true,
      message: "Fetched Admin successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create admin",
      error: (err?.message as string) || "Something went wrong",
    });
  }
};

export const adminController = {
  getAdmin,
};
