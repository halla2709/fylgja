import cheerio from 'react-native-cheerio';
var index = 0;

function ParseDataFromText(text) {
    const $ = cheerio.load(text);
    var content = [];
    parseElement($('div'), content, $);
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
        parseElement(textContainer, contentText, $);
        return { name: name, data: contentText };
    })
        .catch((e) => {
            console.error(e);
        });
}

function originalFind(element, array, $) {
    var content = $(element).find('p, strong, a, br, href, span');
    content.each(function (i, p) {
        $(p).contents().map(function (ii, el) {
            if (el.type === "text") {
                array.push({ "text": $(el).text(), "type": p.tagName, "href": $(p).attr('href'), key: index++ });
            }
            else if (el.tagName === "span") {
                originalFind(el, array, $);
            }
        });
    });
}

function parseElement(element, array, $) {
    var table = $(element).find('table');
    table.remove();
    var content = $(element).children('p, ul');
    console.log("Found " + content.length + " elements");
    content.each(function (i, p) {
        var final = [];
        var thisCurrent = findRawText(p, $, [], final);
        if (thisCurrent.length > 0) final.push(thisCurrent);
        if(final.length > 0 ) array.push({ type: 'p', text: final, key: index++ });
    });

    if (table.length > 0) {
        extractTable(table, array, $);
    }

}

function findRawText(element, $, currentArray, topArray) {
    $(element).contents().map((i, child) => {
        if(child.type === "text" && $(child).text().trim().length > 0) {
            currentArray.push({ "text": $(child).text(), "type": element.tagName, "href": $(element).attr('href'), key: index++ });    
        }
        else {
            if($(child)[0].name == "br") {
                if(currentArray.length > 0) topArray.push([...currentArray]);
                currentArray = [];
            }
            else {
                currentArray = findRawText(child, $, currentArray, topArray);
            }
        }
    });
    return currentArray;
}

function GetTextWithType(element, array, $) {
    var content = $(element).find('p, strong, a, br, href, span');
    content.each(function (i, p) {
        $(p).contents().map(function(ii, child) {
            if(child.type === "text") {
                array.push({ "text": $(child).text(), "type": p.tagName, "href": $(p).attr('href'), key: index++ });
            }
            else {
                GetTextWithType(child, array, $);
            }
        });
    });
}

function GetOnlyText(text) {
    const $ = cheerio.load(text);    
    return $.text();
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
                    GetTextWithType(td, columnContent, $);
                }
                
            });
        });
        rowContent.push({ key: index++, columns: columnContent });
    });
    array.push({ type: "table", rows: rowContent, key: index++ });
}

export {
    ParseDataFromUrl,
    ParseDataFromText,
    GetOnlyText  
};