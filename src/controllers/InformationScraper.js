import cheerio from 'react-native-cheerio';
import Information from '../assets/testContent/info';

export default class InformationScraper {    
    async init() {
        this.data = [];
        //this.DataKeeper = new Information();
        Information.setData([]);
        this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid', "Um félagið");
        this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/skrifstofa', "Skrifstofa");
    }

    getDataFromUrl(url, name) {
        fetch(url).then((response) => {
            setTimeout(() => null, 0);
            return response.text();
        }).then((text) => {
            const $ = cheerio.load(text);
            const container = $('.container');
            let pageTitle = container.find('.page-title').text().replace(/\s+/,'');
            let textContainer = container.find('#block_1 .Category');
            var contentText = [];
            this.findRawTextInElement(textContainer, contentText, $);
            let currentData = Information.getData();
            currentData.push({name:name, data:contentText});
            Information.setData(currentData);
        })
        .catch((e) => {
            console.error(e);
        });
    }

    findRawTextInElement(element, array, $) {
        var content = $(element).find('p, strong, a');
        var self = this;
        content.each(function(i,p) {
            $(p).contents().map(function(ii, el) {
                if(el.type === "text") {
                    array.push( {"text": $(el).text(), "type": p.tagName });
                }
                else if(el.tagName === "span") {
                    self.findRawTextInElement(el, array, $);
                }
            })
        });
    }
}