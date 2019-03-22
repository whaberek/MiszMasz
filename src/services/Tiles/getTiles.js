import { db } from 'database/connect';

const getTiles = async () => {
    try {
        const database = await db();

        return database.objects('Tiles')
    } catch (error) {
        console.log(error);
    }
};

export { getTiles };
