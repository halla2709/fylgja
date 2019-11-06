
let data = [];
var dataChangedCallback;

function getData() {
    return data;
}

function setData(newData) {
    data = newData;
    if(dataChangedCallback){
        dataChangedCallback(data);
    }
}

function setDataChangedCallback(cb) {
    dataChangedCallback = cb;
}

export default {
    getData, 
    setData,
    setDataChangedCallback
}