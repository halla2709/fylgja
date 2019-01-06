import cheerio from 'react-native-cheerio';

export default class InformationScraper {

    constructor() {
        console.log("constructor");
    }
    
    async init() {
        this.data = [];
        console.log("init");
        fetch('https://www.ljosmaedrafelag.is/um-felagid')
            .then((response) => {
                console.log("Got response", response.status);
                setTimeout(() => null, 0);
                return response.text();
            })
            .then((text) => {
                console.log("loaded content");
                const $ = cheerio.load(text);
                const container = $('.container');
                let pageTitle = container.find('.page-title').text().replace(/\s+/,'');
                console.log("Page title", pageTitle);
                let content = container.has('#block_1 .Category').find('p');
                var contentText = [];
                content.each(function(i,p) {
                    contentText[i] = [];
                    $(p).contents().map(function(ii, el) {
                        if(el.type === "text") {
                            contentText[i].push($(el).text());
                        }
                    })
                });
                console.log("Done");
                console.log(contentText.join(" "));
            })
            .catch((e) => {
                console.error(e);
            });

        console.log("constructing information scraper");
    }
}