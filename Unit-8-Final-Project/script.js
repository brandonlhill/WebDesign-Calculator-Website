/* global $ */
console.log("Java Script is Running");

//this is fahreneit to celsius
function Conv(a){
    return(((a - 32)*5)/9);    
}
$("#button1").click(function(){
    var num1 = Number($("#input1").val());
    var result = Conv(num1);
    $("#result").html(result);
    console.log(num1);
}); 
//this controls the following Celsius to Fahrenheit
function ConvE(b){
    return((b * 1.8)+ 32);    
} 
$("#button2").click(function(){
    var num = Number($("#input2").val());
    var result = ConvE(num);
    $("#result").html(result);

}); 
// this allows for button swapper to take place
$("#buttonSwapperRight").hide();
$("#input2").hide();
$("#statement").text("Fahrenheit to Celsius");
$("#button2").hide();
$("#buttonSwapperRight").click(function(){
    $("#buttonSwapper").fadeIn();
    $("#buttonSwapperRight").hide();
    $("#statement").text("Fahrenheit to Celsius");
    $("#input2").hide();
    $("#input1").show();
    $("#button2").hide();
    $("#button1").show();
});
$("#buttonSwapper").click(function(){
    $("#buttonSwapper").hide();
    $("#buttonSwapperRight").fadeIn();
    $("#input1").hide();
    $("#input2").show();
    $("#statement").text("Celsius to Fahrenheit");
    $("#button1").hide();
    $("#button2").show();
});
//Simple calculator
$("#add").click(function(){
    var num2 = Number($("#input3").val());
    var num3 = Number($("#input4").val());
    var result = num2 + num3;
    $("#answerBox").html(result);
}); 
$("#sub").click(function(){
    var num2 = Number($("#input3").val());
    var num3 = Number($("#input4").val());
    var result = num2 - num3;
    $("#answerBox").html(result);
}); 
$("#dive").click(function(){
    var num2 = Number($("#input3").val());
    var num3 = Number($("#input4").val());
    var result = num2 / num3;
    $("#answerBox").html(result);
}); 
$("#mult").click(function(){
    var num2 = Number($("#input3").val());
    var num3 = Number($("#input4").val());
    var result = num2 * num3;
    $("#answerBox").html(result);
}); 
//0.00018939
// $("#buttonSwapperRight").hide();
// $("#input2").hide();
// $("#statement").text("Fahrenheit to Celsius");
// $("#button2").hide();
// $("#buttonSwapperRight").click(function(){
//     $("#buttonF").fadeIn();
//     $("#buttonSwapperRight").hide();
//     $("#statement").text("");
//     $("#input2").hide();
//     $("#input1").show();
//     $("#button2").hide();
//     $("#button1").show();
// });
// $("#buttonM").click(function(){
//     $("#buttonSwapper").hide();
//     $("#buttonSwapperRight").fadeIn();
//     $("#input1").hide();
//     $("#input2").show();
//     $("#statement").text("Celsius to Fahrenheit");
//     $("#button1").hide();
//     $("#button2").show();
// });
$("#buttonM").click(function(){
    var num2 = Number($("#input5").val());
    var result = num2 * 0.00018939;
    $("#answerBox2").html(result);
}); 
// This the bottom contact function, in which allows for people to place thier email and text