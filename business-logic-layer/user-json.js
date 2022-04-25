const jsonDal = require('../data-access-layer/dalJSON');

const createUser = async function(){

    let obj = {name: obj.name, username: obj.username}
    let resp = await jsonDal.saveUserJson(obj)

    return "Created"
}

module.exports = {createUser}