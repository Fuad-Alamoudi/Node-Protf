const EXPRESS = require("express");
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.set("view engine", "ejs");
APP.set('views', 'public');
console.log('Server is unning on port 3000...');

APP.use(EXPRESS.static('public'));
APP.get("/", (req, res) => {
    res.render("index", {title: "Fuad Alanoudi"});
});

APP.listen(PORT);