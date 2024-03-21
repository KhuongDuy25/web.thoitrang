$(document).ready(function() {
    $(".thumbnail").click(function() {
        var imageUrl = $(this).attr("src");
        $("#large_img").attr("src", imageUrl);
    });
});


$(document).ready(function() {
    var largeImage = $("#large_img");
    
    // Lấy kích thước ảnh lớn ban đầu
    var originalWidth = largeImage.width();
    var originalHeight = largeImage.height();
    
    // Kích thước cho phép phóng to
    var zoomFactor = 2;

    $(".product-content-left-big-img").mousemove(function(event) {
        // Tính vị trí của con trỏ chuột trong phần ảnh lớn
        var x = event.pageX - $(this).offset().left;
        var y = event.pageY - $(this).offset().top;

        // Tính kích thước phóng to
        var newWidth = originalWidth * zoomFactor;
        var newHeight = originalHeight * zoomFactor;

        // Tính toán vị trí phóng to dựa trên vị trí chuột
        var newX = -x * (zoomFactor - 1);
        var newY = -y * (zoomFactor - 1);

        // Áp dụng hiệu ứng phóng to
        largeImage.css({
            transform: "scale(" + zoomFactor + ")",
            transformOrigin: x + "px " + y + "px",
        });
    });

    // Khi di chuột ra khỏi ảnh lớn, trở lại kích thước ban đầu
    $(".product-content-left-big-img").mouseleave(function() {
        largeImage.css({
            transform: "scale(1)",
        });
    });
});

const gioithieu = document.querySelector(".gioithieu")
const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
if(baoquan){
    baoquan.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-gioithieu").style.display = "none"
    })
}
if(chitiet){
    chitiet.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-gioithieu").style.display = "none"
    })
}
if(gioithieu){
    gioithieu.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-gioithieu").style.display = "block"
    })
}
const button = document.querySelector(".product-content-right-bottom-top")
if(button){
    button.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}
