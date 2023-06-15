function padZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

function updateCountdown() {
  var countdownDate = new Date("October 10, 2023 00:00:00").getTime();
  var now = new Date().getTime();
  var distance = countdownDate - now;

  if (distance < 0) {
    // Nếu đã đến ngày đếm ngược, hiển thị thông báo hoặc thực hiện hành động mong muốn
    document.getElementById("countdown").innerHTML = "Đếm ngược đã kết thúc";
    // Hoặc thực hiện hành động khác ở đây
    return;
  }

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = padZero(days);
  document.getElementById("hours").innerHTML = padZero(hours);
  document.getElementById("minutes").innerHTML = padZero(minutes);
  document.getElementById("seconds").innerHTML = padZero(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);


  var liveshowImages = document.querySelectorAll('.liveshow img');
  var backgroundDiv = document.querySelector('.background');
  var previousSelectedImage = null;
  
  // Lắng nghe sự kiện click trên các ảnh trong liveshow
  liveshowImages.forEach(function(image) {
    image.addEventListener('click', function() {
      var previousSelectedImage = document.querySelector('.liveshow img.selected');
    if (previousSelectedImage) {
      previousSelectedImage.classList.remove('selected');
    }
      // Kiểm tra xem có ảnh trước đó được chọn hay không
      if (previousSelectedImage) {
        // Đặt translateY(0) cho ảnh trước đó
        previousSelectedImage.style.transform = 'translateY(0)';
      }
      image.classList.add('selected');
      // Lấy đường dẫn ảnh được chọn
      var imageURL = image.getAttribute('src');
      // Thay đổi background-image của div background
      backgroundDiv.style.backgroundImage = "url('" + imageURL + "')";
  
      // Đặt translateY(-10px) cho ảnh mới được chọn
      image.style.transform = 'translateY(-10px)';
      // Lưu trạng thái của ảnh mới được chọn
      previousSelectedImage = image;
    });
  });
  document.body.addEventListener('click', function() {
    if (previousSelectedImage) {
      previousSelectedImage.style.transform = 'translateY(0)';
    }
  });

  document.getElementById('next').onclick = function() {
    let container = document.querySelector('.container');
    container.classList.add('background-image-changed');
  
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  }
  
  document.getElementById('prev').onclick = function() {
    let container = document.querySelector('.container');
    container.classList.add('background-image-changed');
  
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
  }
  
  
  

