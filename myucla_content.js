//myucla_content.js

let classes = document.getElementById("div_landing");
console.log("Classes obtained!");

function addBruinwalkButton(courseData, courseName) {
    var bruinwalkButton = document.createElement("a");
    
    //Get course data for all courses 
    var courseTables = Array.from(courseData.getElementsByClassName("coursetable"));
    if(document.getElementsByClassName("ClassSearchList search_results")){
        courseTables.push(document.querySelector('div[id^="data_course"]'));
    }

    //Iterate through array of courses and add bruinwalk button

    for(const course in courseTables) {
        
        var instructors = course.getElementsByClassName("hide-small").innerHTML;
        instructors = instructors.split("<br>");

        for(const instructor in instructors) {
            bruinwalkButton.className = "prof-rating-button";
            bruinwalkButton.setAttribute("prof-name", instructor);
            bruinwalkButton.setAttribute("course-name",courseName);
        }
    }
}

/* 
    TODO: Figure out how to handle MyUCLA only displaying first name and last initial
    (maybe best match algo)
*/

function queryBruinwalk(bruinwalkButton, onComplete){
    var profNameURI = encodeURI(bruinwalkButton.getAttribute("prof-name"));
    chrome.runtime.sendMessage({'prof_name': profNameURI}, function(response) {
        onComplete(response)
        //TODO: Handle response
    });
}