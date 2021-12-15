const MyTable = require('./my-table');

const throwError = {
    value: false,
};

const expectedAllReturn = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'test' },
];

const expectedNewReturn = {
    id: 4,
    message: 'test message',
};

const expectedSingleReturn = {
    id: 3,
    message: 'expected lookup',
};

const updateThrowError = (a) => {
    throwError.value = !!a;
}

// we mock mysql so it doesn't perform the look ups
jest.mock('mysql', () => ({
    createConnection: () => ({
        query: (sql, params, cb) => {
            if (params.length === 0) {
                if (throwError.value) {
                    throw Error('test error');
                }
                cb(false, expectedAllReturn);
            } else if (sql.includes('insert')) {
                if (throwError.value) {
                    throw Error('test error');
                }
                cb(false, { insertId: expectedNewReturn.id });
            } else {
                if (throwError.value) {
                    throw Error('test error');
                }
                cb(false, expectedSingleReturn);
            }
        },
        end: () => false,
    }),
}));

beforeEach(() => {
    updateThrowError(false);
});

describe('my-table', () => {
    describe('getAllRecords()', () => {
        it('works as expected', async () => {
            const myTable = new MyTable();
            const results = await myTable.getAllRecords();
            expect(results).toBe(expectedAllReturn);
        });

        it('fails as expected', async () => {
            updateThrowError(true);
            const myTable = new MyTable();
            const testFn = async () => {
                await myTable.getAllRecords();
            }
            await expect(testFn).rejects.toThrow('lookup error');
        });
    });

    describe('getRecordById()', () => {
        it('works as expected', async () => {
            const myTable = new MyTable();
            const results = await myTable.getRecordById();
            expect(results).toBe(expectedSingleReturn);
        });

        it('fails as expected', async () => {
            updateThrowError(true);
            const myTable = new MyTable();
            const testFn = async () => {
                await myTable.getRecordById();
            }
            await expect(testFn).rejects.toThrow('lookup error');
        });
    });

    describe('createMessage()', () => {
        it('works as expected', async () => {
            const myTable = new MyTable();
            const results = await myTable.createMessage('test message');
            /**
             * this will fail
             * expect(results).toBe(expectedSingleReturn);
             */
            expect(results).toEqual(expectedNewReturn);
        });

        it('fails as expected', async () => {
            updateThrowError(true);
            const myTable = new MyTable();
            const testFn = async () => {
                await myTable.createMessage('test message');
            }
            await expect(testFn).rejects.toThrow('lookup error');
        });
    });
});
