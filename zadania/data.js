function getProductList() {
    const data = [];

    for (let i = 0; i < 20; i++) {
        data.push({
            id: i,
            name: 'Product ' + i,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            price: 100 + (i * 10),
            currency: i % 2 ? 'PLN' : 'EUR',
            sku: '43623452351235',
            mainImage: 'https://sklep.autofus-group.pl/userdata/public/gfx/2437.jpg',
            createdAt: '2022.21.01',
            updatedAt: '2022.21.01',
            urls: {
                show: 'https://www.google.com/?id=' + i,
                edit: 'https://www.google.com/?id=' + i,
                delete: 'https://www.google.com/?id=' + i,
            },
            attr: {
                color: 'red', weight: 20, weightType: 'kg',
            }
        });
    }

    return data;
}