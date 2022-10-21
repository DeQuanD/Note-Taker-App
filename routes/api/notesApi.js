const router = require('express').Router()
const path =require("path")
const db = require("../../db/db.json")
const fs = require("fs")

router.route("/")
    .get((req, res) =>{
   // res.sendFile(path.join(__dirname, "..",  "..", 'db', 'db.json'))
    res.json(db);
})
    .post((req, res) =>{
       var note = req.body
       console.log("note is ", note)
        fs.readFile(path.join(__dirname, "..",  "..", 'db', 'db.json'), 'utf8',(err, data) => {
            if (err) {
                console.error(err);
            }else{
               objData = JSON.parse(data);

               console.log("objdata is", objData);
              // console.log(typeof objData)
               objData.push(note);
             // noteData = Object.assign(objData,{note})
             
               strNoteData = JSON.stringify(objData);
              // console.log("strdata is", strNoteData)
               fs.writeFile(path.join(__dirname, "..",  "..", 'db', 'db.json'), strNoteData, (err)=>{
                if (err) throw err;} );
                res.json(db)
            }   
        });
    }) 



module.exports = router
