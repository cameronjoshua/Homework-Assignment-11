const express = require('express');
const html_route = require('./routes/html')
const api_route = require('./routes/api')
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(html_route)
app.use(api_route)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});