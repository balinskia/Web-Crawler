# Web crawler
Simple NodeJS web crawler.
Given a starting URL – say example.com - it visits all pages within the domain,
but not follow the links to external sites such as Google.
For a given url, crawler first parses this page to find all its subdomains like:
http://example.com/link-to-subpage and then recursively goes to those pages,
until no more subpages found.

## Usage
```
$ npm i
$ node index.js https://wiprodigital.com
https://wiprodigital.com
https://wiprodigital.com/xmlrpc.php
https://wiprodigital.com/
https://wiprodigital.com/wp-json/
https://wiprodigital.com/wp-json/oembed/1.0/embed
https://wiprodigital.com/who-we-are
...
```

## Test
```
$ node test.js
testGetSubpages... PASS
testGetIndexes... PASS
testRemoveDuplicates... PASS
testCrawl... PASS
```


## Tradeoffs/Assumptions
I didn't use any testing framework like Mocha or Jest - it may be worth adding to make testing more clean.
The crawler uses a https://en.wikipedia.org/wiki/Depth-first_search algorithm.
The function which parses the page and finds its subpages might be not perfect - for example it doesn't find images.
If you want to find more about its logic, go to testGetSubpages.
The crawler is quite slow - 25 seconds for site: https://wiprodigital.com.
We might want to improve its speed, for example by not fetching sites which doesn't have subdomains (js files, images, etc).
