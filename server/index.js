const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

const commentsRouter = require('./routes/Comments');
app.use("/comments", commentsRouter);


//sequelize creates the tables in the database
db.sequelize.sync().then(() => {
    app.listen(5000, () => {
    console.log("Server running on port 5000!");
    });
});



