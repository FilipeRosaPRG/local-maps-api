import "reflect-metadata";
import { DataSource } from "typeorm";
import { Store } from "./src/entity/Store";

export const appDataSource = new DataSource({
    type: 'sqlite',
    database: "database/app.sqlite",
    entities: [Store],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    synchronize: true,
    logging: false,
});
