import cheerio from 'react-native-cheerio';

export default class InformationScraper {
    
    async init() {
        this.data = [];
        console.log("init");
        fetch('https://www.ljosmaedrafelag.is/')
            .then((response) => {
                console.log("loaded content");
                this.$ = cheerio.load(response._bodyText);
                let header = this.$('div[class=Category]').toArray();
                console.log(header);
            })
            .catch((e) => {
                console.error(e);
            });

        console.log("constructing information scraper");
    }
}