const db = require('./lib/db');

class MyTable {
    close() {
        return db.close();
    }

    async getAllRecords() {
        let results = [];
        try {
            const sql = 'select * from my_table';
            const params = [];
            results = await db.query(sql, params);
        } catch (e) {
            throw new Error('lookup error');
        }

        return results;
    }

    async getRecordById(id) {
        let result = null;
        try {
            const sql = 'select * from my_table where id = ?';
            const params = [id];
            result = await db.query(sql, params);
        } catch (e) {
            throw new Error('lookup error');
        }
        return result;
    }

    async createMessage(message) {
        let result = null;
        try {
            const sql = 'insert into my_table (message) values (?)';
            const params = [message];
            const insert = await db.query(sql, params);
            result = {
                id: insert.insertId,
                message,
            };
        } catch (e) {
            throw new Error('lookup error');
        }
        return result;
    }
}

module.exports = MyTable;
