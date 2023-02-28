const db = require("../../database");

// MUST be only access data font
class CategoriesRepository {
    async findAll(orderBy) {

    }

    async create({ name }) {
        const [row] = await db.query(`
            INSERT INTO categories(name)
            VALUES($1)
            RETURNING *
        `, [name]);

        return row;
    }

}

module.exports = new CategoriesRepository();
