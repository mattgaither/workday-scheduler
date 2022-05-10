// Display todays day and date
var todayDate = moment().format('dddd, MMM Do');
$("#currentDay").html(todayDate);

$(document).ready(function() {
    // saveBtn click listener
    $(".saveBtn").on('click',function() {
        // Get values of description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save in Local storage
        localStorage.setItem(time, text);
    });
    
    function timeTracker() {
        // get current hours
        var nowTime = moment().hour();

        // loop time over the blocks 
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // Chacking time and adding or removing classes to change the classes for background color
            if(blockTime < nowTime) { 

                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");

            }  else if(blockTime === nowTime) { 

                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");

            } else {

                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            };
        });
    };

    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    $("#hour19 .description").val(localStorage.getItem("hour19"));
    $("#hour20 .description").val(localStorage.getItem("hour20"));

    timeTracker();
})