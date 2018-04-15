
function GetCurrentRouteParams(state) {
    if (state.index || state.index === 0) {
        return GetCurrentRouteParams(state.routes[state.index]);
    }
    else {
        return state.params;
    }
}

export {
    GetCurrentRouteParams
};