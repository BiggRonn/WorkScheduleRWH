$(document).ready(function(){

    var currentDay = $("#currentDay");
    $("#9").val(localStorage.getItem("9"));
    var time10 = $("#10");
    var time11 = $("#11");
    var time12 = $("#12");
    var time13 = $("#13");
    var time14 = $("#14");
    var time15 = $("#15");
    var time16 = $("#16");
    var time17 = $("#17");
    
    time10.val("")
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


if moment().format("military hour") >,<, = this.id {
    this.setAttribute("background-color: past, present, future")
}

*/

