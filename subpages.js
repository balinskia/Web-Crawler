function testGetIndexes() {
    if (JSON.stringify(getIndexes("I learned to play the Ukulele in Lebanon.", "le"))
        == JSON.stringify([2, 25, 27])) {
        console.log('testGetIndexes... PASS')
    } else {
        console.log('testGetIndexes... FAIL');
    }
}

function getIndexes(source, find) {
    var result = [];
    for (i = 0; i < source.length; ++i) {
        if (source.substring(i, i + find.length) == find) {
            result.push(i);
        }
    }
    return result;
}

function findEnd(str) {
    let ind = 0;
    while (str[ind] != '"'
        && str[ind] != '?'
        && str[ind] != '#'
        && str[ind] != '\''
        && ind < str.length - 1) {
        ++ind;
    }
    return str.substring(0, ind);
}

function getSubpages(domain, text) {
    const indexes = getIndexes(text, domain);
    return indexes
        .map(index => text.substring(index))
        .map(findEnd);
}

function testGetSubpages() {
    const domain = 'https://wiprodigital.com/';
    const text = 'https://wiprodigital.com/join-our-team">dfsdfadfshttps://wiprodigital.com/get-in-touch">fsdfsd.';
    const expected = ['https://wiprodigital.com/join-our-team', 'https://wiprodigital.com/get-in-touch'];
    const subPages = getSubpages(domain, text);
    if (JSON.stringify(subPages) === JSON.stringify(expected)) {
        console.log('testGetSubpages... PASS');
    } else {
        console.log(subPages);
        console.log('testGetSubpages... FAIL');
    }
}

module.exports = {
    getSubpages,
    testGetSubpages,
    testGetIndexes
}