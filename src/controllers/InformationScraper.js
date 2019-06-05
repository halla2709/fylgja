import cheerio from 'react-native-cheerio';
import { ParseDataFromUrl } from './Parser'

export default class InformationScraper {
    async init() {
        this.data = [];
        this.chapterOrder = [
            "Um félagið",
            "Um merki félagsins",
            "Skrifstofa félagsins",
            "Stjórn og nefndir",
            "Trúnaðarmenn",
            "Ljósmæðraráð",
            "Lög og reglur LMFÍ",
            "Handbók LMFÍ",
            "Skýrslur",
            "Styrkir og sjóðir",
            "Orlofsmál",
            "Kjaramál",
            "Launatafla",
            "Stofnanasamningar",
            "Laus störf",
            "Upplýsingar til atvinnurekenda",
            "Lög og reglugerðir",
            "Alþjóða siðareglur",
            "Ljósmæðranámið",
            "Saga ljósmæðranámsins",
            "Framhaldsnám",
            "Hvað er ljósmóðir",
            "Skipulag ljósmæðraþjónustu á Íslandi",
            "Þjónustustaðir – símaskrá",
            "Höfuðborgarsvæðið",
            "Vesturland",
            "Vestfirðir",
            "Norðurland",
            "Austurland",
            "Suðurland",
            "Suðurnes",
            "Heimafæðingaljósmæður",
            "Heimaþjónustuljósmæður",
            "Heimaþjónustu samningar og leiðbeiningar",
            "Brjóstagjafaráðgjöf"
        ];
        Promise.all([
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/hvad-er-ljosmodir', "Hvað er ljósmóðir"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/framhaldsnam', "Framhaldsnám"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/kjaramal/stofnanasamningar', "Stofnanasamningar"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid', "Um félagið"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/sagaogmerki', "Um merki félagsins"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/stjorn', "Stjórn og nefndir"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/trunadarmenn', "Trúnaðarmenn"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/ljosmaedrarad', "Ljósmæðraráð"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/skrifstofa', "Skrifstofa félagsins"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/logogreglurlmfi', "Lög og reglur LMFÍ"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/utgafa/handbok-lmfi', "Handbók LMFÍ"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/skyrslur', "Skýrslur"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/styrkir-sjodir', "Styrkir og sjóðir"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/orlofsmal', "Orlofsmál"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/kjaramal', "Kjaramál"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/kjaramal/laus-storf', "Laus störf"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/kjaramal/upplysingar-til-atvinnurekenda', "Upplýsingar til atvinnurekenda"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/log_og_reglugerdir', "Lög og reglugerðir"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/althjodasidareglur', "Alþjóða siðareglur"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/ljosmaedranamid', "Ljósmæðranámið"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/ljosmaedranamid/saganams', "Saga ljósmæðranámsins"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta', "Skipulag ljósmæðraþjónustu á Íslandi"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/faedingastadir', "Þjónustustaðir – símaskrá"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/faedingastadir/1', "Höfuðborgarsvæðið"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/faedingastadir/2', "Vesturland"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/faedingastadir/3', "Vestfirðir"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/faedingastadir/4', "Norðurland"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/faedingastadir/5', "Austurland"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/faedingastadir/6', "Suðurland"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/faedingastadir/7', "Suðurnes"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/heimafaedingar', "Heimafæðingaljósmæður"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/heimathjonusta/heimathj-ljosm', "Heimaþjónustuljósmæður"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/heimathjonusta/log-og-samningar-og-leidbeiningar', "Heimaþjónustu samningar og leiðbeiningar"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/brjostagjafaradgjof', "Brjóstagjafaráðgjöf")
        ])
            .then((items) => {
                // Need to sort chapters here so they are in the right order
                var item = {
                    "name": "Launatafla",
                    "key": items.length + 2,
                    "type": "p",
                    "data": [{
                        "type": "p",
                        "key": items.length + 2,
                        "text": [[
                            {
                                "text": "Smelltu hér til að hlaða niður nýjustu launatöflu",
                                "type": "a",
                                "href": "https://www.ljosmaedrafelag.is/kjaramal/nyjasta-launataflan",
                                "key": items.length + 1,
                            }
                        ]],
                    }]
                };

                items.push(item);
                var result = [];
                items.forEach(item => {
                    result[this.chapterOrder.indexOf(item.name)] = item;
                });
                this.setData(result);

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
        if (this.dataChangedCallback) {
            this.dataChangedCallback(this.data);
        }
    }

    setDataChangedCallback(cb) {
        this.dataChangedCallback = cb;
    }
}