

//existing code, no changes made as of yet -ethan
//This code below is subject to change - Zack
import app from './app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
})


/*
// TODO: Create Sequelize connector from models folder and import in to connect to postgres server. 

import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
/*
