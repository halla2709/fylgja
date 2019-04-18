import React from 'react';
import * as rssParser from 'react-native-rss-parser';
/**
 * catids:
 * 136 frettir
 * 132 vidburdir
 * 148 radstefnur
 * 149 malstofur
 */
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
    return fetch(link, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-16',
        }
    })
        .then((response) => response.text())
        .then((responseData) => {
            console.log(responseData);
            parseString(responseData, function (err, result) {
                if (err) console.log("error", err);
            });
        })
        .catch((error) => { console.error(error); });
}


export {
    GetNews,
    GetNewsJson
};