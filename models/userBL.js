// const UserModel = require('./userModel'); מבוטל בשביל יוזר מודל אחר

const getUsers = function(){
    return new Promise((resolve,reject) => 
    {
        UserModel.find({},function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })

    })
}

const getOneUser = function(id){
    return new Promise((resolve, reject) =>
    {
        UserModel.findById(id, function(err,data)
        {
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })

}

const createUser = function(obj){
    return new Promise((resolve, reject) => 
    {
        let user = new UserModel({
            name: obj.name,
            age: obj.age,
            city: obj.city
        })

        user.save(function(err)
        {
            if(err){
                reject(err)
            }
            else{
                resolve('Created !')
            }
        })
    })
}

const updateUser = function(id, obj){
    return new Promise ((resolve, reject)=> 
        {
            UserModel.findByIdAndUpdate(id, 
                {
                    name: obj.name,
                    age: obj.age,
                    city: obj.city
                }, function(err)
                {
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve('User Updated')
                    }
                })
        })
}

const deleteUser = function(id) 
{   
    return new Promise((resolve,reject) => 
    {
        UserModel.findByIdAndDelete(id,function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('Deleted !')
            }
        })

    })
}

module.exports = {getUsers, getOneUser, createUser, updateUser, deleteUser}