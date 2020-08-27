var express = require('express')
var router = express.Router()
let {
    viewKelola_wisata,
    Kelola_wisataCreate,
    Kelola_wisataUpdate,
    Kelola_wisataDelete
} = require("../controller/kelolawisata_controller")

const auth = require('../auth/pengelola_auth')

router.get("/pengelola/kelola_wisata", viewKelola_wisata)
router.post("/pengelola/kelola_wisata/create", Kelola_wisataCreate)
router.post("/pengelola/kelola_wisata/edit", Kelola_wisataUpdate)
router.get("/pengelola/kelola_wisata/delete/:id", Kelola_wisataDelete)



module.exports = router
