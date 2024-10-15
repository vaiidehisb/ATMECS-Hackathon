const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();

// Middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to handle form submission
app.post('/', (req, res) => {
    const { air_temp, process_temp, rotational_speed, torque, tool_wear, type } = req.body;

    // Dummy predict function (or replace this with an API call)
    const target = predict(air_temp, process_temp, rotational_speed, torque, tool_wear, type);

    // Render the result on the same page
    res.render('index', { target: target[0], failure: target[1] });
});

// Render the form on GET request
app.get('/', (req, res) => {
    res.render('index', { target: null, failure: null });
});

// Dummy predict function (replace this later with the actual ML model logic)
function predict(air_temp, process_temp, rotational_speed, torque, tool_wear, type) {
    return ['Predicted Target', 'Predicted Failure Type'];
}

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(⁠ Server started on http://localhost:${PORT} ⁠);
});