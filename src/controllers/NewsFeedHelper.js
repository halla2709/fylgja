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
            if(rss.items.length > 0) {
                return rss.items;
            }
            return [];
        });
}

export {
    GetNews
};