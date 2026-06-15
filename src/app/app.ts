import express from "express";
import { applyMiddlewares } from "../middleware/middleware";
export const app = express()
applyMiddlewares(app)
