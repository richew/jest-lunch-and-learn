const db = require('../lesson2/lib/db');

class DbCalc {
    async getCounts() {
        const sql = 'select count(*) as count from my_table';
        const params = [];
        const count = { count: 0 };
        try {
            const result = await db.query(sql, params);
            if (result) {
                count.count = result.count;
            }
        } catch (e) {
            throw new Error('db error');
        }
        return count;
    }

    async getSum() {
        const sql = 'select sum(*) as sum from my_table';
        const params = [];
        const sum = { sum: 0 };
        try {
            const result = await db.query(sql, params);
            if (result) {
                sum.sum = result.sum;
            }
        } catch (e) {
            throw new Error('db error');
        }
        return sum;
    }

    async getAverage() {
        const sql = 'select avg(*) as average from my_table';
        const params = [];
        const average = { average: 0 };
        try {
            const result = await db.query(sql, params);
            if (result) {
                average.average = result.average;
            }
        } catch (e) {
            throw new Error('db error');
        }
        return average;
    }
}
