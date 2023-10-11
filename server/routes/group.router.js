const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const pool = require('../modules/pool');


const router = express.Router();

// GET for Group information
router.get('/', rejectUnauthenticated, (req, res) => {
    const userGroupID = req.user.group_id
    const groupQueryText = `SELECT * FROM "group"
    WHERE id = $1`
    pool.query(groupQueryText, [userGroupID])
    .then( (result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error with class GET', err);
      res.sendStatus(500);
    })
  });

  // GET members that are in Group
router.get('/members', rejectUnauthenticated, (req, res) => {
  const userGroupID = req.user.group_id
  const groupQueryText = 
  `SELECT "user".id, user_profile.name, user_profile.about, user_profile.homemade_pref
  FROM "user_profile"
  JOIN "user" ON "user".id = "user_profile".user_id
  WHERE "user".group_id = $1 ORDER BY user_profile.name DESC;`
  pool.query(groupQueryText, [userGroupID])
  .then( (result) => {
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('Error with class GET', err);
    res.sendStatus(500);
  })
});

module.exports = router;