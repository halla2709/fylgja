import Chapters from "../assets/testContent/chapters.js";

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
    
console.log(chapter.name);
    return chapter.name.toString().toLowerCase().contains(key.toLowerCase());
    
}

export {
    SearchChapterTitles
};
