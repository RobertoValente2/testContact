const express = require('express');
const app = express();
const port = 3000;
const vCardGenerator = require('vcards-js');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    let vCard = vCardGenerator();
    vCard.firstName = "Aaa";
    vCard.lastName = "Bbb";
    vCard.title = "Ccc";
    vCard.email = "Ddd@gmail.com";
    vCard.cellPhone = "912345678";
    vCard.socialUrls['instagram'] = "instagram.com/roberto.valennte";
    vCard.version = "3.0";

    let vCardData = vCard.getFormattedString();
    vCardData = vCardData.replace("X-SOCIALPROFILE;", "SOCIALPROFILE;");
    console.log(vCardData)
    res.render('index', {vCard: vCardData});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
