import Realm from 'realm';

import { TilesSchema } from './models'

const db = () => (
    Realm.open({
        path: 'v4miszmasz.realm',
        schema: [TilesSchema],
        schemaVersion: 0,
    })
        .catch(err => console.log(`Unable to create Realm schema. Stacktrace: ${err}`))
);

export { db };
