const chaptersInfo = require("../assets/content/chapters.json");
const chapterTitles = require("../assets/content/chaptertitles.json")
var chapters = [];
function CreateChapters() {
    console.log("Create chapters!");
    chapterTitles.forEach((title, chapterIndex) => {
        if(chaptersInfo[title]) {
            var chapter = chaptersInfo[title];
            chapter.key = ""+(chapterIndex+1);
            chapter.subchapters.forEach((subchapter, subIndex) => {
                subchapter.key = chapter.key+"."+(subIndex+1);
            });
            chapters.push(chapter);
        }
        else {
            console.error("Missing chapter " + title + "!!!");
        }
    });
}

function GetChapters() {
    if (chapters.length === 0)
        CreateChapters();
    return chapters;    
}
export default GetChapters;