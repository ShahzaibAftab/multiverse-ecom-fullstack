require('./config')
const orderRoute = require('./routes/orderRoutes')
const clientRoute = require('./routes/clientRoutes')
const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get("/", (req, res) => { res.json({ messege: 'server is running' }) });

// ORDER ROUTE
app.use('/api', orderRoute)
app.use('/api', clientRoute)

app.listen(PORT, () => console.log("Server running on port " + PORT));