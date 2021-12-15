const MyTable = require('./my-table');

const myTable = new MyTable();

const run = async () => {
    const all = await myTable.getAllRecords();
    const single = await myTable.getRecordById(1);
    const entry = await myTable.createMessage('{"message": "test message"}');

    console.log('all => ', all);
    console.log('single => ', single);
    console.log('entry => ', entry);
}

run()
    .then(() => {
        console.log('done');
        myTable.close();
    })
    .catch((e) => {
        console.log('error => ', error);
        myTable.close();
    });
