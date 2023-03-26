import { User } from "@prisma/client";

declare global {
  namespace Express {
    export interface User {
      id: string;
      uname: string;
      email: string;
      name: string;
      password: string;
    }
    export interface Request {
      session?: any;
    }
  }
}
