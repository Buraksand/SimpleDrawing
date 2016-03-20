var color = $(".selected").css("backgroundColor");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

console.log(color);

$(".controls").on("click", "li" , function(){
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  color = $(".selected").css("backgroundColor");
  console.log(color);
})

$("#revealColorSelect").click(function(){
  changeColor();
  $("#colorSelect").toggle();
});

function changeColor(){
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("backgroundColor", "rgb(" + r + "," + g + "," + b +")");
}

$("input[type = range]").change(function(){
  changeColor();
})

$("#addNewColor").click(function(){
  var $newColor = $("<li></li>");
  $newColor.css("backgroundColor", $("#newColor").css("backgroundColor"));
  $(".controls ul").append($newColor);

})

$canvas.mousedown(function(e){
  mouseDown = true;
  lastEvent = e;
}).mousemove(function(e){
  if (mouseDown){
    context.beginPath();
    context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
    context.strokeStyle = color;
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    lastEvent = e;
  }

}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
})

