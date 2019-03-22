class TilesSchema {}

TilesSchema.schema = {
    name: 'Tiles',
    primaryKey: 'id',
    properties: {
        id: 'string',
        path:  'string',
        created: 'int',
    },
};

export { TilesSchema };
