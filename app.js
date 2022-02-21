const express = require('express');
const dbConnection = require('./config/db');
const app = express()
const port = 3000
dbConnection()
const jobRouter=require("./src/job/routes/jobRoutes");
const levelRouter=require("./src/jobLevel/routes/levelRoutes");
const educationRouter=require("./src/education/routes/educationRoutes");
const responsibilityRouter=require("./src/responsibilites/routes/responseRoutes");
const softRouter=require("./src/softSkills/routes/softRoutes");
const technicalRouter=require("./src/technicalSkills/routes/technicalRoutes");
const minorRouter=require("./src/minor/routes/minorRoutes");
const majorRouter=require("./src/major/routes/majorRoutes");
app.use(express.json());
app.use(jobRouter)
app.use(levelRouter);
app.use(educationRouter);
app.use(responsibilityRouter);
app.use(softRouter);
app.use(technicalRouter);
app.use(minorRouter);
app.use(majorRouter);


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))