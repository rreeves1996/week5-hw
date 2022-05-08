// Display current day/date
$("#currentDay").text(moment().format("dddd, MMM Do"));
// Turn current hour into an integer instead of string
var currentHour = parseInt(moment().format('HH'));

var timeBlock = document.querySelectorAll("#times");
var saveBtn = document.querySelectorAll(".saveBtn");

// Render previously stored inputs
renderSavedPlans();

// Color time blocks with conditional
// Time blocks set to future by default, set all to past if later than 5PM
if(currentHour > 17){
    timeBlock.forEach(element => {
        element.setAttribute("class", "past");
    })
} else {
    // Change time block color of every time block hour that has already passed
    for(i = 0; i < currentHour - 9; i++){
        timeBlock[i].setAttribute("class", "past");
    }
    // Set current hour time block to present color
    timeBlock[currentHour - 9].setAttribute("class", "present");
}

// Hard code every button :)
saveBtn[0].addEventListener("click", function(event) {
    event.preventDefault();
    var firstBlock = document.getElementById("entry-1").value;

    localStorage.setItem("firstBlock", firstBlock);
    console.log(firstBlock);
})
saveBtn[1].addEventListener("click", function(event) {
    event.preventDefault();
    var secondBlock = document.getElementById("entry-2").value;

    localStorage.setItem("secondBlock", secondBlock);
    console.log(secondBlock);
})
saveBtn[2].addEventListener("click", function(event) {
    event.preventDefault();
    var thirdBlock = document.getElementById("entry-3").value;

    localStorage.setItem("thirdBlock", thirdBlock);
    console.log(thirdBlock);
})
saveBtn[3].addEventListener("click", function(event) {
    event.preventDefault();
    var fourthBlock = document.getElementById("entry-4").value;

    localStorage.setItem("fourthBlock", fourthBlock);
    console.log(fourthBlock);
})
saveBtn[4].addEventListener("click", function(event) {
    event.preventDefault();
    var fifthBlock = document.getElementById("entry-5").value;

    localStorage.setItem("fifthBlock", fifthBlock);
    console.log(fifthBlock);
})
saveBtn[5].addEventListener("click", function(event) {
    event.preventDefault();
    var sixthBlock = document.getElementById("entry-6").value;

    localStorage.setItem("sixthBlock", sixthBlock);
    console.log(sixthBlock);
})
saveBtn[6].addEventListener("click", function(event) {
    event.preventDefault();
    var seventhBlock = document.getElementById("entry-7").value;

    localStorage.setItem("seventhBlock", seventhBlock);
    console.log(seventhBlock);
})
saveBtn[7].addEventListener("click", function(event) {
    event.preventDefault();
    var eigthBlock = document.getElementById("entry-8").value;

    localStorage.setItem("eigthBlock", eigthBlock);
    console.log(eigthBlock);
})
saveBtn[8].addEventListener("click", function(event) {
    event.preventDefault();
    var ninthBlock = document.getElementById("entry-9").value;

    localStorage.setItem("ninthBlock", ninthBlock);
    console.log(ninthBlock);
})

// Hard code every local storage time block :)
function renderSavedPlans(){
    var firstBlock = document.getElementById("entry-1");
    var secondBlock = document.getElementById("entry-2");
    var thirdBlock = document.getElementById("entry-3");
    var fourthBlock = document.getElementById("entry-4");
    var fifthBlock = document.getElementById("entry-5");
    var sixthBlock = document.getElementById("entry-6");
    var seventhBlock = document.getElementById("entry-7");
    var eigthBlock = document.getElementById("entry-8");
    var ninthBlock = document.getElementById("entry-9");

    // If nothing is stored in local storage, set time block value to an empty string so that "null" isn't displayed
    if(!localStorage.getItem("firstBlock")){
        firstBlock.value = "";
    } else {
        firstBlock.setAttribute("value", localStorage.getItem("firstBlock"));
    }
    if(!localStorage.getItem("secondBlock")){
        secondBlock.value = "";
    } else {
        secondBlock.setAttribute("value", localStorage.getItem("secondBlock"));
    }
    if(!localStorage.getItem("thirdBlock")){
        thirdBlock.value = "";
    } else {
        thirdBlock.setAttribute("value", localStorage.getItem("thirdBlock"));
    }
    if(!localStorage.getItem("fourthBlock")){
        fourthBlock.value = "";
    } else {
        fourthBlock.setAttribute("value", localStorage.getItem("fourthBlock"));
    }
    if(!localStorage.getItem("fifthBlock")){
        fifthBlock.value = "";
    } else {
        fifthBlock.setAttribute("value", localStorage.getItem("fifthBlock"));
    }
    if(!localStorage.getItem("sixthBlock")){
        sixthBlock.value = "";
    } else {
        sixthBlock.setAttribute("value", localStorage.getItem("sixthBlock"));
    }
    if(!localStorage.getItem("seventhBlock")){
        seventhBlock.value = "";
    } else {
        seventhBlock.setAttribute("value", localStorage.getItem("seventhBlock"));
    }
    if(!localStorage.getItem("eigthBlock")){
        eigthBlock.value = "";
    } else {
        eigthBlock.setAttribute("value", localStorage.getItem("eigthBlock"));
    }
    if(!localStorage.getItem("ninthBlock")){
        ninthBlock.value = "";
    } else {
        ninthBlock.setAttribute("value", localStorage.getItem("ninthBlock"));
    }
}