// Display todays day and date
var todayDate = moment().format('dddd, MMM Do');
$("#currentDay").html(todayDate);

$(document).ready(function() {
    // saveBtn click listener
    $(".saveBtn").on('click',function() {
        // Get values of description in JQuery
        var text = $(this).siblings(".descriptions").val();
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

    timeTracker();
})