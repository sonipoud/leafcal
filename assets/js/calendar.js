//function for displaying current day and date
var convertedDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(convertedDate);

// function for saveBtn click
$(document).ready(function () {
    $(".saveBtn").on("click", function (event) {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //fuction to save in local storage
        localStorage.setItem(time, text);
    })
});

// function for blocktime and color indication of past, present and future plans
function timeTracker() {
    var timeNow = moment().hour();

    $(".time-block").each(function () {
        var blockTime = $(this).attr("id");

        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (blockTime > timeNow) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        } else {
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");
        }
    })
};

//function to save in localstorage
$("#8").find(".description").val(localStorage.getItem("8"));
$("#9").find(".description").val(localStorage.getItem("9"));
$("#10").find(".description").val(localStorage.getItem("10"));
$("#11").find(".description").val(localStorage.getItem("11"));
$("#12").find(".description").val(localStorage.getItem("12"));
$("#13").find(".description").val(localStorage.getItem("13"));
$("#14").find(".description").val(localStorage.getItem("14"));
$("#15").find(".description").val(localStorage.getItem("15"));
$("#16").find(".description").val(localStorage.getItem("16"));
$("#17").find(".description").val(localStorage.getItem("17"));
$("#18").find(".description").val(localStorage.getItem("18"));

timeTracker();