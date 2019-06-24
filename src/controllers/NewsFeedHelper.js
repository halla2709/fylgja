import * as rssParser from 'react-native-rss-parser';
import { ParseDataFromText, GetOnlyText } from '../controllers/Parser';

async function GetNews(link, array) {
    return fetch(link)
        .then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData))
        .then((rss) => {
            if (rss.items.length > 0) {
                return rss.items;
            }
            return [];
        });
}

async function GetNewsJson(link, array) {
    return fetch(link, {headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json; charset=utf-8'
    }
      })
        .then((response) => response.json())
        .then((responseData) => {
            parseBody(responseData);
            return responseData;
        })
        .catch((error) => { console.error(error); });
}

function parseBody(data) {
    data.forEach(element => {
        var wrapped = "<div>"+element.bodyText+"</div>"
        element.parsedBody = ParseDataFromText(wrapped);
        wrapped = "<div>"+element.entryText+"</div>"
        element.parsedEntry = GetOnlyText(wrapped);
    });
}

export {
    GetNews,
    GetNewsJson
};