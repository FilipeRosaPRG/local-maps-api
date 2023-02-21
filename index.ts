import "reflect-metadata";
import express from "express";
import cors from "cors";
import { appDataSource } from "./data-source";
import * as StoreController from "./src/controller/StoreController";

const PORT = 3000;

async function startup() {
    appDataSource.initialize().then(() => {
        console.log("Database connection established");
    }).catch((error) => {
        console.log("Error connecting to database: ", error);
    });

    const app = express();

    app.use(express.json());
    app.use(cors());

    app.post('/store', StoreController.save);
    app.get('/store', StoreController.getAll);

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startup();