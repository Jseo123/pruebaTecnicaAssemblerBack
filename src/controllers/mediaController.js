const mysqlConnection = require("../db/connect");

const getMedia = (req, res) => {
  mysqlConnection.query("SELECT * FROM MEDIA", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

module.exports = { getMedia };
