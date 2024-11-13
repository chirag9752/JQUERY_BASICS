//fourthhtml code of slider starts here

$(document).ready(function () {
    //showing big front pic div by clicking on the small pics
    var img_id;
    $(".gallery_img").click(function () {
        $(".main, .img_div").show();
        var img_src = $(this).attr("src");
        img_id = $(this).attr("id")
        $("#img_design").attr("src", img_src);
    })
    //hiding the big picture div and the main div
    $(".main").click(function () {
        $(".main, .img_div").hide();
    });

    //left arrow and right arrow click pic change
    $("#rightarrow").click(function () {
        if(img_id === 4) {
            img_id=1
        } else {
            img_id++
        }
        
        var new_img_id = "#"+img_id;
        var img_src = $(new_img_id).attr("src")
        $("#img_design").attr("src", img_src); 
    });
    //left arrow and right arrow click pic change
    $("#leftarrow").click(function () {
        if(img_id === 1) {
            img_id=4
        } else {
            img_id--
        }
        
        var new_img_id = "#"+img_id;
        var img_src = $(new_img_id).attr("src")
        $("#img_design").attr("src", img_src); 
    });
});


//imageslider coding starts here
var i=0;
var img_src = new Array();

img_src[0] = "../images/11.jpg";
img_src[1] = "../images/22.jpg";
img_src[2] = "../images/33.jpg";

function swapImage() {
    document.slide.src=img_src[i];
    if(i < img_src.length-1) {
        i++
    } else {
        i=0;
    }
    setTimeout("swapImage()", 2000);
}

window.onload = swapImage;  //no round braces is required in this case.

//swapImage();    //it is same as - window.onload = swapImage;