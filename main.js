var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();


app.get('/scrape', (req, res) => {
    url = 'http://www.imdb.com/title/tt1229340/';

    request(url, (err, response, html) => {
        if (err) {
            return console.log('cant scrap this site');
        }
        var $ = cheerio.load(html);
        var title, release, rating;
        var json = {
            title: "",
            release: "",
            rating: ""
        };

        $('.title_wrapper').filter(function () {
            var data = $(this)
            title = data.children().first().text();
            release = data.children().last().children().text();
            json.title = title;
            json.release = release;
            console.log('Header is found');
        });
        $('.ratingValue').filter(function () {
            var data = $(this);
            rating = data.children().text();
            json.rating = rating;
            console.log('rating is found')
        })
        fs.writeFile('output.json', JSON.stringify(json, null, 4), function (err) {
            console.log('file is written')
        });
        res.send('File is Created')
    });


});

app.listen('8081');
console.log('server is runing on port 8081')