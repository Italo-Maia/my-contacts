const { v4 } = require('uuid');

const contacts = [
    {
        id: v4(),
        name: 'Italo Maia',
        phone: '123456789',
        category_id: v4(),
    },
];

// Should be only access data font
class ContactRepository {
    findAll() {
        return new Promise((resolve) => {
            resolve(contacts);
        });
    }
}

module.exports = new ContactRepository();
