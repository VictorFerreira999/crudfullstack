import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";
  
  console.log('Executing query:', q);

  db.query(q, (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Database query error' });
    }

    console.log('Query result:', data);
    return res.status(200).json(data);
  });
};
