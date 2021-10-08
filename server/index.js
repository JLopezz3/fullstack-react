const express = require('express');
const app = express();

app.use(express.json());

const db = require('./models');

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);


//sequelize creates the tables in the database
db.sequelize.sync().then(() => {
    app.listen(5000, () => {
    console.log("Server running on port 5000!");
    });
});



