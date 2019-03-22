import uuid from 'uuid';

import { db } from 'database/connect';

const createTiles = async query => {
    try {
        const database = await db();

        database.write(() => {
            database.create('Tiles', {
                id: uuid(),
                created: Date.now(),
                ...query,
            });
        });
    } catch (error) {
        console.log(error);
    }
};

export { createTiles };