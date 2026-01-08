
import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./endpoints/users";
import productRoutes from "./endpoints/products";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req: Request, res: Response) => res.send('API funcionando'));

export default app;
