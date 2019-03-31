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
    SwitchChapter
};