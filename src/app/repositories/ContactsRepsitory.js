const { uuid } = require('uuidv4');

const contacts = [
    {
        id: uuid(),
        name: 'Italo Maia',
        phone: '123456789',
        category_id: uuid(),
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
