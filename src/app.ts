import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/User/user.routes";
import { adminRoutes } from "./app/modules/Admin/admin.route";
export const app: Application = express();
app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);
