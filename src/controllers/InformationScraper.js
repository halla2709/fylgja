import cheerio from 'react-native-cheerio';
import Information from '../assets/testContent/info';

export default class InformationScraper {

    constructor() {
        console.log("scraper constructor");

    }

    async init() {
        this.data = [];
        this.index = 0;
        Information.setData([]);
        Promise.all([
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid', "Um félagið"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/skrifstofa', "Skrifstofa félagsins"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/stjorn', "Stjórn og nefndir"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/trunadarmenn', "Trúnaðarmenn"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/sagaogmerki', "Saga félagsins og merki"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/ljosmaedrarad', "Ljósmæðraráð"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/minningarkort', "Minningarkort"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/hvad-er-ljosmodir', "Hvað er ljósmóðir")
        ])
            .then((items) => {
                Information.setData(items);
            })
            .catch((e) => { console.error(e); });
    }

    async getDataFromUrl(url, name) {
        return fetch(url).then((response) => {
            setTimeout(() => null, 0);
            return response.text();
        }).then((text) => {
            const $ = cheerio.load(text);
            const container = $('.container');
            let pageTitle = container.find('.page-title').text().replace(/\s+/, '');
            let textContainer = container.find('#block_1 .Category');
            var contentText = [];
            this.findRawTextInElement(textContainer, contentText, $);
            return { name: name, data: contentText };
        })
            .catch((e) => {
                console.error(e);
            });
    }

    findRawTextInElement(element, array, $) {
        var self = this;
        var table = $(element).find('table');
        table.remove();

        var content = $(element).find('p, strong, a, br, href, span');
        content.each(function (i, p) {
            $(p).contents().map(function (ii, el) {
                if (el.type === "text") {
                    array.push({ "text": $(el).text(), "type": p.tagName, key: self.index++ });
                }
                else if (el.tagName === "span") {
                    self.findRawTextInElement(el, array, $);
                }
            });
        });

        if (table.length > 0) {
            this.extractTable(table, array, $);
        }

    }

    extractTable(element, array, $) {
        var rows = $(element).find('tr');
        var rowContent = [];
        var self = this;
        rows.each(function (i, tr) {
            var columnContent = [];
            var columns = $(tr).find('td');
            columns.each(function (ii, td) {
                $(td).contents().map(function (iii, el) {
                    if (el.type === "text") {
                        columnContent.push({ "text": $(el).text(), "type": "td", key: self.index++ });
                    }
                    else {
                        self.findRawTextInElement(td, columnContent, $);
                    }
                });
            });
            rowContent.push({ key: self.index++, columns: columnContent });
        });
        array.push({ type: "table", rows: rowContent, key: self.index++ });
    }
}