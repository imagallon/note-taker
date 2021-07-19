
const store = require("../db/store");

module.exports = function (app) {
  app.get("/notes", (req, res) => {
    // store
  
    // read notes data from file
    store
      .read()
      .then((data) => {
        // send table data json in response
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        // send an error response
        return res.status(500).end();
      });
  });
  
  app.post("/notes", (req, res) => {
    // store
    const notesArray = [];
    store
      .getAll()
      .then(
        (note) => {
          // add to tables and return promise
          return notesArray.push(req.body);
        }
        // add to waiting list and return promise
      )
      .then(() => {
        res.json(note);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).end();
      });
  });  
}

//router.delete('notes/:id') UUID
