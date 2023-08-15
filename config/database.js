const mongoose = require('mongoose');

mongoose.connect(import.meta.env.VITE_DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
