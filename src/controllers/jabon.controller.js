const jabonCtrol = {}

const Jabon = require('../models/Jabon');

//obtener todos los registros
jabonCtrol.getJabones = async (req, res) => {
    const jabones = await Jabon.find();
    res.json(jabones);
};

//crear un nuevo registro
jabonCtrol.createJabon = async (req, res) => {
    const { cantidad, contador, date } = req.body
    const newJabon = new Jabon({
        cantidad: cantidad,
        contador: contador,
        date: date
    });
    await newJabon.save();
    res.json({ message: 'save' })
};

//obtener un registro por id
jabonCtrol.getJabon = async (req, res) => {
    const jabon = await Jabon.findById(req.params.id);
    res.json(jabon);
    //console.log(jabon)
}
// actualizar registro
jabonCtrol.updateJabon = async (req, res) => {// revizar metodo
    const { cantidad, contador } = req.body;
    await Jabon.findOneAndUpdate({_id: req.params.id}, {
        cantidad: cantidad,
        contador: contador
    });
    res.json({ message: 'jabon actualizada' })
}
// eliminar registro
jabonCtrol.deleteJabon = async (req, res) => {
    await Jabon.findByIdAndDelete(req.params.id);
    res.json({ message: 'deleted' })
}

module.exports = jabonCtrol;