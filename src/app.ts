import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/User/user.routes";
export const app: Application = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/api/v1/user", userRoutes);
