const pool = require('../models/dbModel.js');

module.exports = {
  addRes: async (req, res, next) => {
    try {
      const {
        name,
        email,
        party_size,
        date,
        time,
     
      } = req.body;
      console.log(req.body);
      await pool.query(
        'INSERT INTO reservations (name,email,party_size,date,time) VALUES($1, $2, $3, $4, $5)',
        [name, email, party_size, date, time]
      );
      return next();
    } catch (err) {
      return next(err);
    }
  },
  getRes: async (req, res, next) => {
    try {
     
      const booking = await pool.query(
        'SELECT * FROM reservations',
      );
      res.locals.data = booking.rows;
      return next();
    } catch (err) {
      next(err);
    }
  },

  deleteRes: async (req, res, next) => {
    try {
      const {id} = req.params;
      await pool.query('DELETE * FROM reservations WHERE _id = $1', [id]);
      return next();
    } catch (err) {
      next(err);
    }
  },
};
