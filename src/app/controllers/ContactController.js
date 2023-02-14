const ContactRepository = require('../repositories/ContactsRepsitory');

class ContactController {
    async index(request, response) {
        const { orderBy } = request.query;
        const contacts = await ContactRepository.findAll(orderBy);

        response.json(contacts);
    }

    async show(request, response) {
        const { id } = request.params;
        const contact = await ContactRepository.findById(id);

        if (!contact) {
            return response.status(404).json({ error: 'User not found' });
        }

        response.json(contact);
    }

    async store(request, response) {
        const {
            name, email, phone, category_id,
        } = request.body;

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });
        }

        const contactsExists = await ContactRepository.findByEmail(email);
        if (contactsExists) {
            return response.status(404).json({ error: 'This email is already in use' });
        }

        const contact = await ContactRepository.create({
            name, email, phone, category_id,
        });

        response.json(contact)
    }

    async update(request, response) {
        const { id } = request.params;

        const {
            name, email, phone, category_id
        } = request.body;

        const contactsExists = await ContactRepository.findById(id)
        if (!contactsExists) {
            return response.status(404).json({ error: 'User not found' });
        }

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });
        }

        const contactsByEmail = await ContactRepository.findByEmail(email);
        if (contactsByEmail && contactsByEmail.id !== id) {
            return response.status(404).json({ error: 'This email is already in use' });
        }

        const contact = await ContactRepository.update(id, {
            name, email, phone, category_id
        })

        response.json(contact)
    }

    async delete(request, response) {
        const { id } = request.params;
        const contact = await ContactRepository.findById(id);

        if (!contact) {
            return response.status(404).json({ error: 'User not found' });
        }

        await ContactRepository.delete(id);
        response.sendStatus(204);
    }
}

// Singleton
// Utiliza a mesma instância e salva no cash. Todos utilizam a mesma regra
module.exports = new ContactController();
