$(function () {
	//slider
	let num = 0; // 이미지 번호(전역변수)

	function changeSlider(img_num) {
		//공식 = 높이값(세로기준) * 이미지 번호
		let img_width = 1200 * img_num;

		$(".slider .sliders").css({
			transform: `translateX(${-img_width}px)`
		})
	}

	// 자동재생
	setInterval(function () {
		num++;
		if (num > 2) {
			num = 0;
		}
		changeSlider(num);
	}, 5000)

}); //$


$(function () {
	/*** #gnb toggle ***/
	// 1. 열기: #toggle-btn 클릭시 #gnb on
	$('.toggle-btn').click(function () {
		$("#sidebar").css('display', 'block'),
		$(".filter").css('display', 'block')
		;
	});
	// 2. 닫기: #btn-close 클릭시 #gnb 닫음
	$('.close-btn').click(function () {
		$("#sidebar").css('display', 'none'),
		$(".filter").css('display', 'none');
	});

}); // $