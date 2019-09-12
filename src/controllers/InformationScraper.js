import { ParseDataFromUrl } from './Parser'

class InformationScraper {
    constructor() {
        this.data = [];
        this.chapterOrder = [
            "Um félagið",
            "Skrifstofa félagsins",
            "Stjórn og nefndir",
            "Trúnaðarmenn",
            "Ljósmæðraráð",
            "Lög og reglur LMFÍ",
            "Handbók LMFÍ",
            "Kjaramál",
            "Launatafla",
            "Stofnanasamningar",
            "Laus störf",
            "Lög og reglugerðir",
            "Alþjóða siðareglur",
            "Ljósmæðranámið",
            "Framhaldsnám",
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
            "Starfandi sérfræðiljósmæður",
            "Heimaþjónustu samningar og leiðbeiningar",
            "Brjóstagjafaráðgjöf",
            "Skráning ljósmæðra á lista",
            "Um Fylgjuappið"
        ];
    }
    
    async init() {
        Promise.all([
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/heimathjonusta/skraningljosmaedra', "Skráning ljósmæðra á lista"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/framhaldsnam', "Framhaldsnám"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/kjaramal/stofnanasamningar', "Stofnanasamningar"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid', "Um félagið"),            
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/stjorn', "Stjórn og nefndir"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/trunadarmenn', "Trúnaðarmenn"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/ljosmaedrarad', "Ljósmæðraráð"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/skrifstofa', "Skrifstofa félagsins"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/um-felagid/logogreglurlmfi', "Lög og reglur LMFÍ"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/utgafa/handbok-lmfi', "Handbók LMFÍ"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/kjaramal', "Kjaramál"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/kjaramal/laus-storf', "Laus störf"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/log_og_reglugerdir', "Lög og reglugerðir"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/althjodasidareglur', "Alþjóða siðareglur"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/ljosmodir/ljosmaedranamid', "Ljósmæðranámið"),
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
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/brjostagjafaradgjof', "Brjóstagjafaráðgjöf"),
            ParseDataFromUrl('https://www.ljosmaedrafelag.is/thjonusta/serfraediljosmaedur', "Starfandi sérfræðiljósmæður")
        ])
            .then((items) => {
                // Need to sort chapters here so they are in the right order
                var item1 =
                    {
                    "name": "Launatafla",
                    "key": items.length + 1,
                    "type": "p",
                    "data": [{
                        "type": "p",
                        "key": items.length + 2,
                        "text": [[
                            {
                                "text": "Smelltu hér til að hlaða niður nýjustu launatöflu",
                                "type": "a",
                                "href": "https://www.ljosmaedrafelag.is/kjaramal/nyjasta-launataflan",
                                "key": items.length + 3,
                            }
                        ]],
                    }]

                    };
                var item2 = 
                {
                    "name":"Um Fylgjuappið",
                    "key": items.length + 4,
                    "type": "p",
                    "data": [{
                        "type": "p",
                        "key": items.length + 5,
                        "text": [[
                            {
                                "text": "Þú ert með útgáfu 1.0 af Fylgju appinu.\nEf þú hefur athugasemdir eða hugmyndir um umbætur á appinu, sendu þá tölvupóst á",
                                "type": "p",
                                "key": items.length + 6,
                                "href": "",
                            },  
                            {
                                "text": "\nformadur@ljosmodir.is.",
                                "type": "strong",
                                "key": items.length + 7,
                                "href": "",
                            },                           
                            {
                                "text": "\n\nHöfundar appsins: ",
                                "type": "p",
                                "key": items.length + 8,
                                "href": "",
                            },
                            {
                                "text": "Halla Björk Ragnarsdóttir og Unnur Kristín Brynjólfsdóttir",
                                "type": "strong",
                                "key": items.length + 9,
                                "href": "",
                            }, 
                        ]],
                    
                    }]
                    
                };
                items.push(item1);
                items.push(item2);
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

export let Scraper = new InformationScraper();