import cheerio from 'react-native-cheerio';
import { ParseDataFromUrl } from './Parser'

export default class InformationScraper {
    async init() {
        this.data = [];
        Promise.all([
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/hvad-er-ljosmodir', "Hvað er ljósmóðir"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/sagaogmerki', "Um merki Ljósmæðrafélags Íslands"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/ljosmaedranamid', "Ljósmæðranámið"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/ljosmaedranamid/saganams', "Saga Ljósmæðranámsins"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/framhaldsnam', "Framhaldsnám"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/log_og_reglugerdir', "Lög og Reglugerðir"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/althjodasidareglur', "Alþjóða siðareglur ljósmæðra"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/kjaramal', "Kjaramál"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/kjaramal/launatafla-2016/launatafla-2018', "Launatöflur"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/kjaramal/stofnanasamningar', "Stofnanasamningar"),

            //Hér að ofan var það eina sem hún listaði upp... á þá að sleppa þessu fyrir neðan?

            this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid', "Um félagið"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/stjorn', "Stjórn og nefndir"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/trunadarmenn', "Trúnaðarmenn"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/ljosmaedrarad', "Ljósmæðraráð"),
            this.getDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/skrifstofa', "Skrifstofa félagsins"),
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