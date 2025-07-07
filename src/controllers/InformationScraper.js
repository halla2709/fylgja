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
        this.url = "";
    }

    setUrl(url) {
        this.url = url;
    }
    
    async init() {        
        Promise.all([
            ParseDataFromUrl(this.url + '/thjonusta/heimathjonusta/skraningljosmaedra', "Skráning ljósmæðra á lista"),
            ParseDataFromUrl(this.url + '/ljosmodir/framhaldsnam', "Framhaldsnám"),
            ParseDataFromUrl(this.url + '/kjaramal/stofnanasamningar', "Stofnanasamningar"),
            ParseDataFromUrl(this.url + '/um-felagid', "Um félagið"),            
            ParseDataFromUrl(this.url + '/um-felagid/stjorn', "Stjórn og nefndir"),
            ParseDataFromUrl(this.url + '/um-felagid/trunadarmenn', "Trúnaðarmenn"),
            ParseDataFromUrl(this.url + '/um-felagid/ljosmaedrarad', "Ljósmæðraráð"),
            ParseDataFromUrl(this.url + '/um-felagid/skrifstofa', "Skrifstofa félagsins"),
            ParseDataFromUrl(this.url + '/um-felagid/logogreglurlmfi', "Lög og reglur LMFÍ"),
            ParseDataFromUrl(this.url + '/utgafa/handbok-lmfi', "Handbók LMFÍ"),
            ParseDataFromUrl(this.url + '/kjaramal', "Kjaramál"),
            ParseDataFromUrl(this.url + '/kjaramal/laus-storf', "Laus störf"),
            ParseDataFromUrl(this.url + '/ljosmodir/log_og_reglugerdir', "Lög og reglugerðir"),
            ParseDataFromUrl(this.url + '/ljosmodir/althjodasidareglur', "Alþjóða siðareglur"),
            ParseDataFromUrl(this.url + '/ljosmodir/ljosmaedranamid', "Ljósmæðranámið"),
            ParseDataFromUrl(this.url + '/thjonusta', "Skipulag ljósmæðraþjónustu á Íslandi"),
            ParseDataFromUrl(this.url + '/thjonusta/faedingastadir', "Þjónustustaðir – símaskrá"),
            ParseDataFromUrl(this.url + '/thjonusta/faedingastadir/1', "Höfuðborgarsvæðið"),
            ParseDataFromUrl(this.url + '/thjonusta/faedingastadir/2', "Vesturland"),
            ParseDataFromUrl(this.url + '/thjonusta/faedingastadir/3', "Vestfirðir"),
            ParseDataFromUrl(this.url + '/thjonusta/faedingastadir/4', "Norðurland"),
            ParseDataFromUrl(this.url + '/thjonusta/faedingastadir/5', "Austurland"),
            ParseDataFromUrl(this.url + '/thjonusta/faedingastadir/6', "Suðurland"),
            ParseDataFromUrl(this.url + '/thjonusta/faedingastadir/7', "Suðurnes"),
            ParseDataFromUrl(this.url + '/thjonusta/heimafaedingar', "Heimafæðingaljósmæður"),
            ParseDataFromUrl(this.url + '/thjonusta/heimathjonusta/heimathj-ljosm', "Heimaþjónustuljósmæður"),
            ParseDataFromUrl(this.url + '/thjonusta/heimathjonusta/log-og-samningar-og-leidbeiningar', "Heimaþjónustu samningar og leiðbeiningar"),
            ParseDataFromUrl(this.url + '/thjonusta/brjostagjafaradgjof', "Brjóstagjafaráðgjöf"),
            ParseDataFromUrl(this.url + '/thjonusta/serfraediljosmaedur', "Starfandi sérfræðiljósmæður")
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
                                "text": "Sækja nýjustu launatöflu",
                                "type": "a",
                                "href": this.url + "/asset/2831/launatafla-2023-2024.pdf",
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
                                "text": "Þú ert með útgáfu 2.4 af Fylgju appinu.\nEf þú hefur athugasemdir eða hugmyndir um umbætur á appinu, sendu þá tölvupóst á",
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
                            {
                                "text": "\n\nUpplýsingar í appinu koma frá " + this.url,
                                "type": "p",
                                "key": items.length + 10,
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