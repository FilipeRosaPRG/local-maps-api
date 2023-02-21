import "reflect-metadata";
import { Request, Response } from 'express';
import { appDataSource } from '../../data-source';
import { Store } from '../entity/Store';

export async function save(request: Request, response: Response) {
    const storeRepository = appDataSource.getRepository(Store);

    const savedStore = await storeRepository.save(request.body);

    return response.status(200).json(savedStore);
}

export async function getAll(request: Request, response: Response) {
    const storeRepository = appDataSource.getRepository(Store);

    const allStores = await storeRepository.find();

    return response.status(200).json(allStores);
}