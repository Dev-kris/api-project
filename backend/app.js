const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'testId1',
      title: 'My first thing',
      description: 'All the info about thing',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFG5YSsZXmWN3YUWLi4QRg9uARK25Mgm49twi6B7OhJwgGgexPHRjBJkVHg&usqp=CAc',
      price: 4900,
      userId: 'randomstring',
    },
    {
      _id: 'testId2',
      title: 'My second thing',
      description: 'All the info about thing',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFG5YSsZXmWN3YUWLi4QRg9uARK25Mgm49twi6B7OhJwgGgexPHRjBJkVHg&usqp=CAc',
      price: 2900,
      userId: 'randomstring',
    },
  ];
  res.status(200).json(stuff);
});
//export app to allow access in other files
module.exports = app;
