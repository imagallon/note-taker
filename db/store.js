const { readFile, writeFile } = require('fs').promises;

const path = require('path');

// generate unique ids

// const readFileAsync = util.promisify(fs.readFile)
// const writeFileAsync = util.promisify(fs.writeFile)

class Store {
  constructor(fileName) {
    this.path = path.join(__dirname, `${fileName}.json`)
  }
  read() {
    return readFile(this.path, 'utf-8').then((data) => JSON.parse(data))
  } // returns db json
  write(data){
    return writeFile(this.path, JSON.stringify(data))
  } // this will stringify the json data
  getNotes(item){
    return this.read().then((data) => this.write([...data, item]));
    
  } // read from THIS, and THEN takes notes and concat and parse through our notes
  clearNotes(note) {

    return this.write([]);
  } // get the title and text from note (Destructure)
  // return all notes, add new notes, write all updated notes, and return a new note
  // BONUS: removeNOte(id){}
    
}

const note = new Store('db');

module.exports = note;