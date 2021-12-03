const userCtrol = {}

const Users = require('../models/Users');

// obtener todos los registros
userCtrol.getUsers = async (req, res) => {
    const users = await Users.find();
    res.json(users);
};

//crear un nuevo registro
userCtrol.createUser = async (req, res) => {
    const { nombre, apellido_p, apellido_m, user, password, rol } = req.body
    const newUser = new Users({
        nombre: nombre,
        apellido_p: apellido_p,
        apellido_m: apellido_m,
        user: user,
        password: password,
        rol: rol
    });
    await newUser.save();
    res.json({ message: 'Usario Registrado' })
    //console.log(newUser);
};

//obtener un registro por id
userCtrol.getUser = async (req, res) => {
    const user = await Users.findById(req.params.id);
    res.json(user)
    //console.log(user)
}

// actualizar registro
userCtrol.updateUser = async (req, res) => {//revisar metodo
    const { nombre, apellido_p, apellido_m, user, password, rol } = req.body;
    await Users.findOneAndUpdate({_id: req.params.id}, {
        nombre: nombre,
        apellido_p: apellido_p,
        apellido_m: apellido_m,
        user: user,
        password: password,
        rol: rol
    });
    res.json({ message: 'Usuario actualizado' })
}
// eliminar registro
userCtrol.deleteUser = async (req, res) => {
    await Users.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usario elimanado' })
}
//exportar loa modulos
module.exports = userCtrol;