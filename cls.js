class database{

    insert(sql){
        console.log('Insert SQL command executed....');
    }

    update(sql){
        console.log('Update SQL command executed....');
    }

    delete(sql){
        console.log('Delete SQL command executed....');
    }

    select(sql){
        console.log('Select SQL command executed....');
    }
};

module.exports.db = database;