$(document).ready(function(){

    var currentDay = $("#currentDay");
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
    
    
    
    currentDay.text(moment().format("dddd, MMMM Do, YYYY h:mmA"));

    console.log(localStorage.getItem("9"));

    

    $(".saveBtn").on("click", function(){
        console.log($(this).siblings(".textarea").val())
        var hour = $(this).siblings(".textarea").attr("id")
        var task = $(this).siblings(".textarea").val()
        localStorage.setItem(hour, task);

    })
    
    //sets all cells grey if after 5pm and green if before 9am

    if (moment().format("H") > 17){
        $("#9").addClass("bg-secondary");
        $("#10").addClass("bg-secondary");
        $("#11").addClass("bg-secondary");
        $("#12").addClass("bg-secondary");
        $("#13").addClass("bg-secondary");
        $("#14").addClass("bg-secondary");
        $("#15").addClass("bg-secondary");
        $("#16").addClass("bg-secondary");
        $("#17").addClass("bg-secondary");
    } else if (moment().format("H") < 9){
        $("#9").addClass("bg-success");
        $("#10").addClass("bg-success");
        $("#11").addClass("bg-success");
        $("#12").addClass("bg-success");
        $("#13").addClass("bg-success");
        $("#14").addClass("bg-success");
        $("#15").addClass("bg-success");
        $("#16").addClass("bg-success");
        $("#17").addClass("bg-success");

    }





    



    


})



/*


if moment().format("H") >,<, = this.id {
    this.addClass("background-color: past, present, future")
}

*/

