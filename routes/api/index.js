const router = require('express').Router()
//const path =require("path")
const notesApi = require("./notesApi")

router.use("/notes", notesApi)



module.exports = router