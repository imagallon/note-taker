const note = require("../db/store");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    note
      .read()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);

        return res.status(500).end();
      });
  });

  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    const randomNum = Math.floor(Math.random() * 10000 + 1);
    newNote.id = `${randomNum}`;
    note
      .getNotes(newNote)
      .then(() => {
        res.json(newNote);
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

          data.splice(index, 1);

          note.write(data);
          res.json(data);
        }
      }
    });
  });
};
