(function(){
	var JquerySlider = {

		sliderWrapper:$('.slider-images'), // images wrapper

		sliderImageWidth:$('.slider-images').find('img').width(),

		sliderImageLength:$('.slider-images').find('img').length,

		sliderControl:$('.control'),

		current: 0,

		init:
			function(){

				setInterval(function(){
					JquerySlider.setCurrentAndAnimate();
				}, 1500);

			},

		setCurrentAndAnimate:
			function(){

				if (JquerySlider.current === JquerySlider.sliderImageLength) {
					JquerySlider.current = 0;
				}

				JquerySlider.anim(JquerySlider.current, 'next');

				++JquerySlider.current;

			},

		anim:
			function(curr, dir){
					var sign = (dir === 'next') ? '-=' : '+=';
					JquerySlider.sliderWrapper.animate({
					marginLeft: (curr === 0) ? 0 : sign + JquerySlider.sliderImageWidth
				});
			}

	};

	JquerySlider.init();

}());