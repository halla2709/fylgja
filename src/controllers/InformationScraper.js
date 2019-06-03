import cheerio from 'react-native-cheerio';
import { ParseDataFromUrl } from './Parser'

export default class InformationScraper {
    async init() {
        this.data = [];


        
        Promise.all([
            
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/hvad-er-ljosmodir', "Hvað er ljósmóðir"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/sagaogmerki', "Um merki Ljósmæðrafélags Íslands"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/ljosmaedranamid', "Ljósmæðranámið"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/ljosmaedranamid/saganams', "Saga Ljósmæðranámsins"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/framhaldsnam', "Framhaldsnám"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/log_og_reglugerdir', "Lög og Reglugerðir"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/althjodasidareglur', "Alþjóða siðareglur ljósmæðra"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/kjaramal', "Kjaramál"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/kjaramal/stofnanasamningar', "Stofnanasamningar"),

            //Hér að ofan var það eina sem hún listaði upp... á þá að sleppa þessu fyrir neðan?

            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid', "Um félagið"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/stjorn', "Stjórn og nefndir"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/trunadarmenn', "Trúnaðarmenn"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/ljosmaedrarad', "Ljósmæðraráð"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/skrifstofa', "Skrifstofa félagsins"),
            
        ])
            .then((items) => {
                var item = {

                    "name" : "Launatafla",
                    "key": items.length+2,
                    "type": "p",
                    "data" : [{
                
                        "type": "p",
                        "key": items.length+2,
                        "text": [[
                            {
                                "text" : "Smelltu hér til að hlaða niður nýjustu launatöflu",
                                "type" : "a",
                                "href" : "https://www.ljosmaedrafelag.is/kjaramal/nyjasta-launataflan",
                                "key" : items.length+1,
                            }
                    ]],
                        
                    }]
                }
               
               items.push(item);
            this.setData(items);


console.log(items[0]);
            })
            .catch((e) => { 
                this.setData([]);
             });
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