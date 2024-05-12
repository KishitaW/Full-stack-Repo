// $("h1").css("color","green");

$("a").attr("href","https://www.bing.com");

console.log($("h1").css("font-size"));

$("h1").addClass("big-title");

$("h1").text("Bye");

$("button").html("<em>Hey</em>");


$("button").click(function(){
    $("h1").css("color","purple");
})