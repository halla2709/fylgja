import cheerio from 'react-native-cheerio';
import { ParseDataFromUrl } from './Parser'

export default class InformationScraper {
    async init() {
        this.data = [];
        Promise.all([
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid', "Um félagið"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/skrifstofa', "Skrifstofa félagsins"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/stjorn', "Stjórn og nefndir"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/trunadarmenn', "Trúnaðarmenn"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/sagaogmerki', "Saga félagsins og merki"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/ljosmaedrarad', "Ljósmæðraráð"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/minningarkort', "Minningarkort"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/hvad-er-ljosmodir', "Hvað er ljósmóðir")
        ])
            .then((items) => {
                this.setData(items);
            })
            .catch((e) => { console.error(e); });
    }

    getData() {
        return this.data;
    }
    
    setData(newData) {
        this.data = newData;
        if(this.dataChangedCallback){
            this.dataChangedCallback(this.data);
        }
    }
    
    setDataChangedCallback(cb) {
        this.dataChangedCallback = cb;
    }
}