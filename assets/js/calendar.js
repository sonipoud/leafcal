var convertedDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(convertedDate);

// var timeInputs = [
//     {time: 8, input: ""},
//     {time: 9, input: ""},
//     {time: 10, input: ""},
//     {time: 11, input: ""},
//     {time: 12, input: ""},
//     {time: 1, input: ""},
//     {time: 2, input: ""},
//     {time: 3, input: ""},
//     {time: 4, input: ""},
//     {time: 5, input: ""},
//     {time: 6, input: ""}
// ]

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
    })
});

function timeTracker(){
    var timeNow = moment().hour();

    $(".time-block").each(function(){
        
    })
}

// var loadTexts = function(){
//     texts = JSON.parse(localStorage.getItem("texts"));
// };

// var saveTexts = function(){
//     localStorage.setItem("texts", JSON.stringify(tasks));
// };

