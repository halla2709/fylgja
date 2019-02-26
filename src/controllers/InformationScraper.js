import cheerio from 'react-native-cheerio';
import Information from '../assets/testContent/info';

export default class InformationScraper {

    constructor() {
        
    }
    
    async init() {
        this.data = [];
        //this.DataKeeper = new Information();
        console.log("init");
        Information.setData([]);
        this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid', "Um félagið");
        this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/skrifstofa', "Skrifstofa");
        this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/stjorn', "Stjórn");
        

        
        console.log("constructing information scraper");
    }

    getDataFromUrl(url, name) {
        fetch(url).then((response) => {
            console.log("Got response", response.status);
            setTimeout(() => null, 0);
            return response.text();
        }).then((text) => {
            console.log("loaded content");
            const $ = cheerio.load(text);
            const container = $('.container');
            let pageTitle = container.find('.page-title').text().replace(/\s+/,'');
            console.log("Page title", pageTitle);
            let textContainer = container.find('#block_1 .Category');
            var contentText = [];
            this.findRawTextInElement(textContainer, contentText, $);
            console.log("Done");
            let currentData = Information.getData();
            currentData.push({name:name, data:contentText});
            Information.setData(currentData);
        })
        .catch((e) => {
            console.error(e);
        });
    }

    findRawTextInElement(element, array, $) {
        console.log("HERE AGAIN");
        var content = $(element).find('p, strong, a');
        var self = this;
        content.each(function(i,p) {
            $(p).contents().map(function(ii, el) {
                console.log(p.tagName);
                if(el.type === "text") {
                    array.push( {"text": $(el).text(), "type": p.tagName });
                }
                else if(el.tagName === "span") {
                    console.log("Span in a A");
                    self.findRawTextInElement(el, array, $);
                }
            })
        });
    }


}