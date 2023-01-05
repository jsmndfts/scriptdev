//Data From Mongo
const user = require('./ConnectFile.js').db('KimDB').collection('users');


const GetUsers = async () => {
    const cursor = await user.find();
    return cursor.toArray();
};

//Insert new document
const insertAccount = async(id, firstname, lastname) => {
return await user.insertOne({id: id, firstname: firstname, lastname: lastname, edit: false})
};

//Update Document
const updateAccount = async(id, firstname, lastname) =>{
    return await user.updateOne({id: parseInt(id)}, {$set:{
        firstname: firstname,
        lastname: lastname
    }});
}

//Delete a Document
const deleteAccount = async (id) => {
    return user.deleteOne({id: parseInt(id)});
}
module.exports = {GetUsers, insertAccount, updateAccount, deleteAccount};