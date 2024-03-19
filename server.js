const express = require('express')
const app = express()
const database = require("./database")


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.render("index.ejs")
})



app.get('/notes', (req,res) => {

    const searchTerm = req.query.searchTerm
    const notes = database.getAllNotes(searchTerm)   
  
    res.render('notes.ejs', {
        notes,
    })
})

app.get('/notes/:id', (req,res) => {
    const id = +req.params.id
    const note = database.getNote(id)
   
    if (note) {
        res.render('note.ejs', {
            note,
        })
    }
    
    else {
        res.status(404).render('note404.ejs')
    }
})

app.get('/createNote', (req,res) => {
    res.render('createNote.ejs')
})

app.post('/notes', (req,res) => {
    const note = req.body
    database.addNote(note)
    res.redirect('/notes')
}
)



app.post('/notes/:id/delete', (req,res) => {
    const id = +req.params.id
    database.deleteNote(id)
    res.redirect('/notes')
})

app.post('/notes/:id/search', (req,res) => {
    const id = +req.params.id
    database.searchNote(id) 
    res.redirect('/notes')
})


app.use(express.static('public'))
const port = 8080

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})