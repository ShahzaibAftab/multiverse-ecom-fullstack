require('./config')
const orderRoute = require('./routes/orderRoutes')
const clientRoute = require('./routes/clientRoutes')
const productRoute = require('./routes/productRoutes')
const adminRoute = require('./routes/adminRoutes')
const express = require("express");
const cookieParser=require('cookie-parser')
const cors = require("cors")
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser())

// CORS POLICY TRUE
app.set('Access-Control-Allow-Origin', '*');
// res.setHeader("Content-Type", "application/json;charset=utf-8"); // Opening this comment will cause problems

app.get("/", (req, res) => { 

  res.json({ messege: 'server is running' }) 
});

// ROUTES
app.use('/api', orderRoute)
app.use('/api', clientRoute)
app.use('/api', productRoute)
app.use('/api', adminRoute)

app.listen(PORT, () => console.log("Server running on port " + PORT));