const router = require("express").Router()
const dogsCtrl = require("../controllers/dogs.js")

// http://localhost:3001/api/dogs
router.post("/", dogsCtrl.create)

router.get("/", dogsCtrl.index)

router.put("/:dogId", dogsCtrl.update)

router.delete("/:dogId", dogsCtrl.delete)

module.exports = router