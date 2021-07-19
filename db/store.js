const fs = require('fs');
const util = require('util');

// generate unique ids

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store {
  read() {
    return readFileAsync('db/db.json', 'utf8').then(data => JSON.parse(data))
  } // returns db json
  write(note){
    return this.writeFileAsync('db/db.json', JSON.stringify(note))
  } // this will stringify the json data
  getNotes(item){
    return this.read(). then((note) => this.write([...data, item]));
    
  } // read from THIS, and THEN takes notes and concat and parse through our notes
  addNote(note) {

    return this.write([]);
  } // get the title and text from note (Destructure)
  // return all notes, add new notes, write all updated notes, and return a new note
  // BONUS: removeNOte(id){}
    
}

const note = new Store();

module.exports = note;