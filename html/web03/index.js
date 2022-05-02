var ImageWidth = 400;
// index of  image  that  current displayss
var curIndex = 0;
var slidesContainer;
var slideImgs;

$(document).ready(function () {

  slidesContainer = $('.slides');
  slideImgs = [...$('.slide')];

  // calculate all images of width for  using  translateX
  slidesContainer.css("width", (slideImgs.length + 1) * ImageWidth + "px");
  swapImage();

  $("#btnNextId").click(function () {
    curIndex++;
    stop();
    displayImg(curIndex);
  });

  $("#btnPrevId").click(function () {
    curIndex--;
    stop();
    displayImg(curIndex);
  });

});
var keepGoing = true;
var swapImageTimeout;

/**
 * Hien thi  image  ke  tiep
 * @returns 
 */
function swapImage() {

  if (!keepGoing) {

    return;
  }

  curIndex = (curIndex > slideImgs.length - 1) ? 0 : curIndex;
  curIndex++;
  displayImg(curIndex);

  swapImageTimeout = setTimeout(swapImage, 3000);

}

function stop() {
  keepGoing = false;
  clearTimeout(swapImageTimeout)
}

/**
 * Di chuyen  image  de  hien  thi
 * @param {*} index 
 */
function displayImg(index) {

  curIndex = (index > slideImgs.length - 1) ? 0 : curIndex;

  slidesContainer.css("transform", `translateX(-` + ((ImageWidth * curIndex)) + `px`);

}
/**
 * Khi mouse  out  ra  khoi  nut  thi  thuc hien swapimage
 */
function fncOnmouseout() {

  if (!keepGoing) {
    keepGoing = true;
    swapImage();
  }

}