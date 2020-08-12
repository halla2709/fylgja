import { GetChapters } from "../controllers/Chapters.js";

function GetCurrentRouteParams(state) {
    if (state.index || state.index === 0) {
        return GetCurrentRouteParams(state.routes[state.index]);
    }
    else {
        return state.params;
    }
}

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
    GetCurrentRouteParams,
    GetNextChapterNumber
};