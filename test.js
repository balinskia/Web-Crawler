const { testGetSubpages, testGetIndexes } = require('./subpages');
const { testCrawl } = require('./crawl');
const { testRemoveDuplicates } = require('./utils');

testGetSubpages();
testGetIndexes();
testRemoveDuplicates();
testCrawl();
