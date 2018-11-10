function removeDuplicates(array) {
    return [...new Set(array)];
}

function testRemoveDuplicates() {
    if (JSON.stringify(removeDuplicates(['a', 'a', 'a']))
        == JSON.stringify(['a'])) {
        console.log('testRemoveDuplicates... PASS')
    } else {
        console.log('testRemoveDuplicates... FAIL');
    }
}

module.exports = {
    testRemoveDuplicates,
    removeDuplicates
}