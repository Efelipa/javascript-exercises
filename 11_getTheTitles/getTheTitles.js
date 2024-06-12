const getTheTitles = bookList => {
    const titleList = new Array;
    bookList.map( book => {
        titleList.push( book.title );
    })
    return titleList;
};

// Do not edit below this line
module.exports = getTheTitles;
