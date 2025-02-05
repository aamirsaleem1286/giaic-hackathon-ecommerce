export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Product Title',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price',
        },
        {
            name: 'priceWithoutDiscount',
            type: 'number',
            title: 'Price Without Discount',
            description: 'Original price before discount',
        },
        {
            name: 'badge',
            type: 'string',
            title: 'Badge',
            description: 'Special badge like "New" or "Sales"',
        },
        {
            name: 'inventory',
            type: 'number',
            title: 'Inventory',
            description: 'Available stock',
        },
        {
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
            description: 'Add tags like "gallery", "featured", etc.',
        },
        {
            name: 'category',
            type: 'object',
            title: 'Category',
            fields: [
                {
                    name: 'categoryId',  // Renamed field to avoid conflict with system _id field
                    type: 'string',
                    title: 'Category ID',
                },
                {
                    name: 'title',
                    type: 'string',
                    title: 'Category Title',
                },
            ],
        },
        {
            name: 'imageUrl',
            type: 'url',
            title: 'Product Image URL',
            description: 'URL of the product image',
        },
    ],
};