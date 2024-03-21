// home page
const images = document.querySelectorAll('.aspect-ratio-169 img');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
function showImage(index) {
    // Ẩn tất cả các ảnh
    images.forEach((image) => {
        image.style.opacity = '0';
    });

    // Hiển thị ảnh tương ứng với index
    images[index].style.opacity = '1';

    // Loại bỏ lớp 'active' khỏi tất cả các dấu chấm
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    // Thêm lớp 'active' cho dấu chấm hiện tại
    dots[index].classList.add('active');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Tự động chuyển đổi ảnh sau mỗi 3 giây
setInterval(nextImage, 3000);

// Thêm sự kiện click cho dấu chấm
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showImage(index);
        currentIndex = index;
    });
});

// Help && Cart
$(document).ready(function() {
    $(".fa-paw").click(function() {
        if($(".account").is(":visible")){
            $(".account").slideUp();
        }
        $(".help").slideToggle();
        return false;
    });
    
    $(".fa-user").click(function() {
        if($(".help").is(":visible")){
            $(".help").slideUp();
        }
        $(".account").slideToggle();
        return false;
    });
});

// New Arival
$(document).ready(function(){
    // Xác định các phần tử cần sử dụng
    var colorimg = $('.color-img');
    var titleimg = $('.home_page-title-img img');

    // Mặc định hiển thị ảnh đầu tiên
    titleimg.hide().first().show();

    // Gán sự kiện click cho từng màu
    colorimg.click(function(){
        // ẩn tất cả ảnh
        titleimg.hide();

        // lấy chỉ mục của màu được click
        var index = colorimg.index(this);

        // hiển thị ảnh tương ứng với màu
        titleimg.eq(index).show();

        // xóa dấu tick trên tất cả màu và hiển thị dấu tick trên màu được chọn
        colorimg.removeClass('selected-color');
        $(this).addClass('selected-color'); 
    })
})

$(document).ready(function(){
    // Xác định các phần tử cần sử dụng
    var colorimg = $('.color-img2');
    var titleimg = $('.home_page-title-img4 img');

    // Mặc định hiển thị ảnh đầu tiên
    titleimg.hide().first().show();

    // Gán sự kiện click cho từng màu
    colorimg.click(function(){
        // ẩn tất cả ảnh
        titleimg.hide();

        // lấy chỉ mục của màu được click
        var index = colorimg.index(this);

        // hiển thị ảnh tương ứng với màu
        titleimg.eq(index).show();

        // xóa dấu tick trên tất cả màu và hiển thị dấu tick trên màu được chọn
        colorimg.removeClass('selected-color');
        $(this).addClass('selected-color'); 
    })
})

$(document).ready(function() {
    // Khi di chuột vào ảnh lớn (larimg)
    $(".larimg").hover(function() {
        // Lấy đường dẫn của ảnh hover tương ứng
        var hoverImageUrl = $(this).siblings(".hover_img").attr("src");

        // Lấy đường dẫn của ảnh lớn
        var largeImageUrl = $(this).attr("src");

        // Thay đổi đường dẫn ảnh lớn bằng đường dẫn ảnh hover
        $(this).attr("src", hoverImageUrl);

        // Thay đổi đường dẫn ảnh hover bằng đường dẫn ảnh lớn ban đầu
        $(this).siblings(".hover_img").attr("src", largeImageUrl);
    });
});

$(document).ready(function() {
    // Ẩn IVY men ban đầu
    $(".home_page-imgmen").hide();

    $(".home_page-tagg").click(function() {
        $(".home_page-tag").removeClass('active');

        // Hiển thị menu tương ứng
        if ($(this).hasClass('ivy-moda')) {
            $(".home_page-tag-img").show();
            $(".home_page-imgmen").hide();
            $(".home_page-underline").css('margin-left', '35%');
        } else if ($(this).hasClass('ivy-men')) {
            $(".home_page-underline").css('margin-left', '45%');
            $(".home_page-tag-img").hide();
            $(".home_page-imgmen").show();
            
        }
        // Thêm lớp 'active' vào menu hiện tại
        $(this).addClass('active');
    });
});


$(document).ready(function() {
    $(".ShowAll").click(function() {
      $(".home_page-imgmen").show();
    });
  });


  $(document).ready(function() {
    $('.home_page-text-pull').slick({
      infinite: true, // Cho phép lặp lại danh sách ảnh
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false, // Tắt các dấu chấm ở dưới
      arrows: false, // Tắt các nút điều hướng trái/phải
      draggable: true, // Cho phép cuộn bằng chuột
      swipe: true, // Cho phép cuộn trên các thiết bị cảm ứng
      autoplay: true, // Tự động cuộn
      autoplaySpeed: 2000 // Tốc độ tự động cuộn (đơn vị: mili giây)
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    const livechat = document.querySelector(".livechat");
    const livechatToggle = document.querySelector(".live-chat");

    // Đặt sự kiện click cho nút mở khung chat
    livechatToggle.addEventListener("click", function () {
        livechat.style.display = "block";
    });

    // Đặt sự kiện click cho nút đóng khung chat
    const closeButtons = document.querySelectorAll(".close-button");
    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
            livechat.style.display = "none";
        });
    });
});