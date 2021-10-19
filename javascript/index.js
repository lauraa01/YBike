/*=================== index =========================*/

//   Slider
const imageCount = $(".images").length
const imageWidth = $(".images").width()
const imageHeight = $(".images").height()
const totalWidth = imageCount * imageWidth

$("#image-slider").css({
    width: imageWidth,
    height: imageHeight
})

$("#slider").css({
    width: totalWidth,
    marginLeft: -imageWidth
})

$(".images:last-child").prependTo("#slider")

$("#prev").click(() => {
    $("#slider").animate({
        left: imageWidth
    },2000, () => {
        $(".images:last-child").prependTo("#slider")
        $("#slider").css("left","")
    })
        
})

$("#next").click(() => {
    $("#slider").animate({
        left: -imageWidth
    },2000, () => {
        $(".images:first-child").appendTo("#slider")
        $("#slider").css("left","")
    })

}) 
