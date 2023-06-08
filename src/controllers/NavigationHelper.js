import { GetChapters } from "../controllers/Chapters.js";


function GetNextChapterNumber(currentChapter, increment) {
    const numberOfChapters = GetChapters().length;
    const topChapter = parseInt(currentChapter.split(".")[0]);
    let nextNumber = topChapter + increment;
    
    if(nextNumber > numberOfChapters) {
        nextNumber = 1;
    }
    if(nextNumber < 1) {
        nextNumber = numberOfChapters;
    }
    return nextNumber.toString();
}

export {
    GetNextChapterNumber
};