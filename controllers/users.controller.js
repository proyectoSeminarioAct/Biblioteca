const {Users} = require('../models/users.model.js')

const getUsers = (req, res) => {
    res.send('get users')
}

async function createUsers (req, res) {

    const {usr_login, usr_pass, usr_name, usr_lastname, usr_state, usr_type, usr_identify, usr_type_identify, fk_usr_rol} = req.body
    
    const newUser = await Users.create({
        usr_login,
        usr_pass,
        usr_name,
        usr_lastname,
        usr_state,
        usr_type,
        usr_identify,
        usr_type_identify,
        fk_usr_rol
    })

    console.log(newUser)
    
    res.send('create users')
}

module.exports = {createUsers,getUsers}