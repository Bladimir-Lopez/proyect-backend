const aguaCtrol = {}

const Agua = require('../models/Agua');

//obtener todos los registros
aguaCtrol.getAguas = async (req, res) => {
    const aguas = await Agua.find();
    res.json(aguas);
};

//crear un nuevo registro
aguaCtrol.createAgua = async (req, res) => {
    const { cantidad, contador, date } = req.body
    const newAgua = new Agua({
        cantidad: cantidad,
        contador: contador,
        date: date
    });
    await newAgua.save();
    res.json({ message: 'nuevo dato registrado'})
};

//obtener un registro por id
aguaCtrol.getAgua = async (req, res) => {
    const agua = await Agua.findById(req.params.id);
    res.json(agua);
    //console.log(agua)
}
// actualizar registro
aguaCtrol.updateAgua = async (req, res) => {// revizar metodo
    const { cantidad, contador } = req.body;
    await Agua.findOneAndUpdate({_id: req.params.id}, {
        cantidad: cantidad,
        contador: contador
    });
    res.json({ message: 'agua actualizada' })
}
// eliminar registro
aguaCtrol.deleteAgua = async (req, res) => {
    await Agua.findByIdAndDelete(req.params.id);
    res.json({ message: 'deleted' })
}

module.exports = aguaCtrol;