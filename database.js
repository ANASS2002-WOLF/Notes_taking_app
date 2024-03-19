let notes = [
    {
        id : 1,
        title : "Note 1",
        timestamp : Date.now(),
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        id : 2,
        title : "Note 2",
        timestamp : Date.now(),
        content : "Ultrices vitae auctor eu augue ut lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. "
    },
    {
        id : 3,
        title : "Note 3",
        timestamp : Date.now(),
        content : "Enim sit amet venenatis urna cursus. Diam quam nulla porttitor massa id neque aliquam. Nec feugiat in fermentum posuere urna nec tincidunt praesent."
    },
]


function getAllNotes (searchTerm) {
    if(!searchTerm) {
        return notes
    }
    else {
        return notes.filter(n => n.title.includes(searchTerm) || n.content.includes(searchTerm))
    }
}

exports.getAllNotes = getAllNotes

function getNote (id) {
    return notes.find(n => n.id === id)
}

exports.getNote = getNote

function addNote (note) {

    notes.push({
        ...note,
        id: notes.length + 1,
        timestamp: Date.now(),
    })
}

exports.addNote = addNote

function deleteNote (id) {

   notes = notes.filter(n => n.id !== id)
   console.log(id)
}

exports.deleteNote = deleteNote

function searchNote (id) {


}

exports.searchNote = searchNote