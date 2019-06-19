import Chapters from "../assets/testContent/chapters.js";
import { Scraper } from "./InformationScraper";

function SearchChapterTitles(key) {
    let chaptersToReturn = [];
    Chapters.forEach(chapter => {
        let subChaptersThatMatchSearch = findMatchingSubChapters(chapter, key);
        if (subChaptersThatMatchSearch.length > 0) {
            let matchingChapter = {
                key: chapter.key,
                name: chapter.name,
                subchapters: subChaptersThatMatchSearch
            }
            chaptersToReturn.push(matchingChapter);
        }
        else if (chapterTitleMatchesSearch(chapter, key)) {
            let matchingChapter = {
                key: chapter.key,
                name: chapter.name
            }
            chaptersToReturn.push(matchingChapter);
        }
    });

    return chaptersToReturn;
}

function GetAllInformationChapters() {
    return Scraper.getData();
}

async function GetFilteredInformationChapters(filter) {
    return new Promise(function(resolve, reject) {
        const allData = Scraper.getData();
        console.log("Filtering by " + filter);
        if (filter && filter.length > 0) {
            var matchingChapters = [];
            allData.forEach(chapter => {
                var found = false;
                chapter.data.forEach(function(dataItem) {
                    if(!found) {
                        if (dataItem.type == "table") {
                            dataItem.rows.forEach(function (dataRow) {
                                if(!found) {
                                    dataRow.columns.forEach(function (dataColumn) {
                                        if(!found) {
                                            if (dataColumn.text.toString().toLowerCase().includes(filter.toLowerCase())){
                                                matchingChapters.push(chapter);
                                                found = true;
                                            }
                                        }                                    
                                    });
                                }                            
                            });
                        }
                        else if(dataItem.type == 'p') {
                            dataItem.text.forEach(function(p) {
                                if(!found) {
                                    p.forEach(function(textItem) {
                                        if(!found) {
                                            if (textItem.text.toString().toLowerCase().includes(filter.toLowerCase())){
                                                matchingChapters.push(chapter);
                                                found = true;
                                            }
                                        }                                    
                                    });
                                }                            
                            });
                        }
                        else {
                            console.error("Not recognized type", chapter.type);
                        }
                    }
                });         
            });
            resolve(matchingChapters);
        }
        resolve(allData);
    });
}

function findMatchingSubChapters(chapter, key) {
    let subChaptersToReturn = [];
    chapter.subchapters.forEach(subchapter => {
        if (chapterTitleMatchesSearch(subchapter, key)) {
            subChaptersToReturn.push({ key: subchapter.key, name: subchapter.name });
        }
    });
    return subChaptersToReturn;
}

function chapterTitleMatchesSearch(chapter, key) {    
    return chapter.name.toString().toLowerCase().includes(key.toLowerCase());
}

export {
    SearchChapterTitles,
    GetAllInformationChapters,
    GetFilteredInformationChapters
};
