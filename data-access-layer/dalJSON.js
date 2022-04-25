const jsonfile = require('jsonfile');

const saveUserJson = function(obj){
    return new Promise((resolve, reject) => 
        {
            jsonfile.writeFile(__dirname,obj,function(err)
                {
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve('Created')
                    }
                })
        })
}

module.exports = { saveUserJson }