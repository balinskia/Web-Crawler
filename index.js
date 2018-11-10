const { crawl } = require("./crawl");
const { getSubpages } = require("./subpages");
const { removeDuplicates } = require("./utils");


if (!process.argv[2]) {
    console.log('Usage: node index.js <domainToCrawl>');
    return 1;
}
const domainToCrawl = process.argv[2];

void async function () {
    const visited = [];
    async function dfs(domain) {
        visited.push(domain);
        const html = await crawl(domain);
        const subPages = await getSubpages(domain, html);
        let toCrawl = subPages.filter(subPage => visited.indexOf(subPage) === -1);
        toCrawl = removeDuplicates(toCrawl);
        await Promise.all(toCrawl.map(dfs))
    }

    await dfs(domainToCrawl);
    visited.forEach(url => console.log(url));
}();
