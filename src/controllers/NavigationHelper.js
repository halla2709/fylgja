import Chapters from "../assets/testContent/chapters.js";

function GetCurrentRouteParams(state) {
    if (state.index || state.index === 0) {
        return GetCurrentRouteParams(state.routes[state.index]);
    }
    else {
        return state.params;
    }
}

function SwitchChapter(currentChapter, increment) {
    const numberOfChapters = Chapters.length;
    const topChapter = parseInt(currentChapter.split(".")[0]);
    const nextNumber = topChapter + increment;
    const chapterToReturn = nextNumber === numberOfChapters ? numberOfChapters : nextNumber % numberOfChapters;
    return chapterToReturn.toString();
}

export {
    GetCurrentRouteParams,
    SwitchChapter
};