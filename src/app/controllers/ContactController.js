const ContactRepository = require('../repositories/ContactsRepsitory');

class ContactController {
    async index(request, response) {
        // Listar
        const contacts = await ContactRepository.findAll();

        response.json(contacts);
    }

    show() {
        // Listar
    }

    store() {
        // Listar
    }

    update() {
        // Listar
    }

    delete() {
        // Listar
    }
}

// Singleton
// Utiliza a mesma instância e salva no cash. Todos utilizam a mesma regra
module.exports = new ContactController();
