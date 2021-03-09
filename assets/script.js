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
    
    //time9.addClass("bg-danger");

    





    



    


})



/*


if moment().format("H") >,<, = this.id {
    this.addClass("background-color: past, present, future")
}

*/

