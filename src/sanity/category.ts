export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        {
            name: 'categoryId',  // Renamed field to avoid conflict with system _id field
            type: 'string',
            title: 'Category ID',
            description: 'Unique identifier for the category',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Category Title',
        },
        {
            name: 'imageUrl',
            type: 'url',
            title: 'Category Image URL',
            description: 'URL of the category image',
        },
    ],
};