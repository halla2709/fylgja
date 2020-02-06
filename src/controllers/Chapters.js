const chaptersInfo = require("../assets/content/chapters.json");
const chapterTitles = require("../assets/content/chaptertitles.json")
var chapters = [];
function CreateChapters() {
    console.log("Create chapters!");
    chapterTitles.forEach((title, chapterIndex) => {
        if(chaptersInfo[title]) {
            var chapter = chaptersInfo[title];
            chapter.key = ""+(chapterIndex+1);
            console.log(chapter.key);
            chapter.subchapters.forEach((subchapter, subIndex) => {
                subchapter.key = chapter.key+"."+(subIndex+1);
                console.log(subchapter.key);
            });
            chapters.push(chapter);
        }
        else {
            console.error("Missing chapter " + title + "!!!");
        }
    });
}

CreateChapters();
export default chapters;