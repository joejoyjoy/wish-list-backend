const doSomething = (req, res, next) => {
    console.log('Came trough middleware');
    next();
}

const checkID = (req, res, next) => {
    const body = req.body;

    if (body.id < 4) res.send({message: 'ID incorrect'})
    next();
}

module.exports = { doSomething, checkID };