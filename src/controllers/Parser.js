import cheerio from 'react-native-cheerio';
var index = 0;

function ParseDataFromText(text) {
    const $ = cheerio.load(text);
    var content = [];
    findRawTextInElement($.root(), content, $);
    return content;
}

async function ParseDataFromUrl(url, name) {
    return fetch(url).then((response) => {
        setTimeout(() => null, 0);
        return response.text();
    }).then((text) => {
        const $ = cheerio.load(text);
        const container = $('.container');
        let pageTitle = container.find('.page-title').text().replace(/\s+/, '');
        let textContainer = container.find('#block_1 .Category');
        var contentText = [];
        findRawTextInElement(textContainer, contentText, $);
        return { name: name, data: contentText };
    })
        .catch((e) => {
            console.error(e);
        });
}

function findRawTextInElement(element, array, $) {
    var table = $(element).find('table');
    table.remove();

    var content = $(element).find('p, strong, a, br, href, span');
    content.each(function (i, p) {
        $(p).contents().map(function (ii, el) {
            if (el.type === "text") {
                array.push({ "text": $(el).text(), "type": p.tagName, "href": $(p).attr('href'), key: index++ });
            }
            else if (el.tagName === "span") {
                findRawTextInElement(el, array, $);
            }
        });
    });

    if (table.length > 0) {
        extractTable(table, array, $);
    }

}

function extractTable(element, array, $) {
    var rows = $(element).find('tr');
    var rowContent = [];
    rows.each(function (i, tr) {
        var columnContent = [];
        var columns = $(tr).find('td');
        columns.each(function (ii, td) {
            $(td).contents().map(function (iii, el) {
                if (el.type === "text") {
                    columnContent.push({ "text": $(el).text(), "type": "td", key: index++ });
                }
                else {
                    findRawTextInElement(td, columnContent, $);
                }
            });
        });
        rowContent.push({ key: index++, columns: columnContent });
    });
    array.push({ type: "table", rows: rowContent, key: index++ });
}

export {
    ParseDataFromUrl,
    ParseDataFromText    
};