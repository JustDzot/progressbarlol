 let btn1 = $('.js-btn1');
 let btn2 = $('.js-btn3');
 let btn3 = $('.js-btn7');
 let btn4 = $('.js-btn10');
 let btn5= $('.js-btn30');
 let btn6 = $('.js-btn70');

 value_percent = 0;
function progressBar() {
	if (value_percent >= 100) {
		$(".progress-bar-animated").width(100 + '%');
		$(".progress-bar-animated").text(100 + '%');
  } 
  else if (value_percent <= 0) {
    $(".progress-bar-animated").width(0 + '%');
		$(".progress-bar-animated").text(0 + '%');
  }
	else {
		$(".progress-bar-animated").width(value_percent + '%');
		$(".progress-bar-animated").text(value_percent + '%');
	}
};
progressBar();
btn1.click(() => {
	value_percent += 1;
	progressBar();
});
btn2.click(() => {
	value_percent += 3;
	progressBar();
});
btn3.click(() => {
	value_percent += 7;
	progressBar();
});
progressBar();
btn4.click(() => {
	value_percent -= 1;
	progressBar();
});
btn5.click(() => {
	value_percent -= 3;
	progressBar();
});
btn6.click(() => {
	value_percent -= 7;
	progressBar();
});