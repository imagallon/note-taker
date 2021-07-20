const { readFile, writeFile } = require("fs").promises;

const path = require("path");



class Store {
  constructor(fileName) {
    this.path = path.join(__dirname, `${fileName}.json`);
  }
  read() {
    return readFile(this.path, "utf-8").then((data) => JSON.parse(data));
  } 
  write(data) {
    return writeFile(this.path, JSON.stringify(data));
  } 
  getNotes(item) {
    return this.read().then((data) => {
      this.write([...data, item]);
    });
  } 
  clearNotes(note) {
    return this.write([]);
  } 
}

const note = new Store("db");

module.exports = note;
