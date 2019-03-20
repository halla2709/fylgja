
let data = [
    {
        "title": "Þátttakendur í rannsókn",
        "href": "/um-felagid/frettir/nanar/7314/thatttakendur-i-rannsokn",
        "date": "12.02.2019",
        "text": "Vilt þú verða þátttakandi í rannsókn",
    },
    {

        "title": "Námskeið og Vinnustofur",
        "href": "/um-felagid/frettir/nanar/7313/namskeid-og-vinnustofur",
        "date": "16.01.2019",
        "text": "Ráðstefna í Maí!",
    }
];

function getData() {
    return data;
}

function setData(newData) {
    data = newData;
}

export default {
    getData, 
    setData
}