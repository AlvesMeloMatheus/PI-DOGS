const { Router } = require('express');
// ------------ Node Modules ---------

const { getBreeds } = require('../controllers/getDogs');
const { getBreedsById } = require('../controllers/getDogsDetail');
const { getBreedByName } = require('../controllers/getBreedByName');
const { postNewDog } = require('../controllers/postDogs');
const { getTemperaments } = require('../controllers/getTemperaments');
// ------------ controllers ----------

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.get("/dogs", getBreeds);
// router.get("/dogs", getBreeds)

router.get("/dogs/:idRaza", getBreedsById);

router.get("/dogs", function (req, res) {
    if (req.query.name) {
        getBreedByName(req, res)
    } else {
        getBreeds(req, res)
    }
});

router.post("/dogs/create", postNewDog);

router.get("/temperaments", getTemperaments);

module.exports = router;
