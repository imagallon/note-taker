const note = require("../db/store");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    note
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

  app.post("/api/notes", (req, res) => {
    // store
    const newNote = req.body;
    const randomNum = Math.floor(Math.random() * 10000 + 1);
    newNote.id = `${randomNum}`;
    note.getNotes(newNote);
    note
      .read()
      .then((data) => {
        note.write(data);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).end();
      });
  });

  app.delete("/api/notes/:id", (req, res) => {
    const chosenNote = req.params.id;
    note.read().then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (chosenNote === data[i].id) {
          const index = data.indexOf(data[i]);
          // const afterDelete = data.splice(index, 1);
          data.splice(index, 1);
          note.write(data);
          res.json(data);
        }

      }
    });
  });
};

//router.delete('notes/:id') UUID
