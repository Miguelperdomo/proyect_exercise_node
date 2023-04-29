const router = require('express').Router()
 
//obtener todos los usuarios
router.get("/", (req, res) => {
    res.json([]);
})

//obtener un solo usuario
router.get("/:id", (req, res) => {
    const {id} =req.params;
    res.json({
        id: "1075209419",
        name: 'Miguel Angel',
        last_name: 'Rodriguez Perdomo',
        age: '19',
        email: 'perdomomiguel2004@gmail.com',
        cell: '3133854821',
        locations: 'Manzana B casa 18',
    })
})

//crear un usuario
router.post("/", (req, res) => {
    const {nombre, email} =req.body;

    if(!nombre || !email){
        return res.status(400).json({
            error: "Campos vacios"
        })
    }
    res.json({
       nombre,
       email,
    })
})



module.exports = router