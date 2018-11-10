const request = require("request");

function crawl(url) {
	return new Promise(function (resolve) {
        request(
            { uri: url },
            function(error, response, body) {
                resolve(body);
            }
        );
    });
}

function testCrawl(){
    crawl("https://wiprodigital.com").then(res => {
        if (res.indexOf('</html>') != -1) {
            console.log('testCrawl... PASS');
        } else {
            console.log('testCrawl... FAIL');
        }
    });
}


module.exports = {
    crawl,
    testCrawl
}


