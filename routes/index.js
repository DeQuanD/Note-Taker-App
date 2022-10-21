const apiRouter = require("./api");
const noteRouter = require("./NoteRoute");
const router = require("express").Router();
const homeRouter = require("./homeRoute");


router.use('/api', apiRouter);
router.use('/notes', noteRouter)
router.use("/", homeRouter)
module.exports= router