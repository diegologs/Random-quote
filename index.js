$("document").ready(function() {
    var request = $.ajax({
        url: "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=xml&lang=en",
        method: "GET",
        dataType: "json"
    });

    request.done(function(msg) {
        $("#log").html(msg);
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

	$(".boton").on("click", function(){
      // Only change code below this line.
      $(".quote").html("Here is the message");
      // Only change code above this line.
    });


});
