(function(){
	var JquerySlider = {

		sliderWrapper:$('.slider-images'), // images wrapper

		sliderImageWidth:$('.slider-images').find('img').width(),

		sliderImageLength:$('.slider-images').find('img').length,

		sliderControl:$('.control'),

		cur:0, // current

		init:
			function(){

				// inititiate the container styles

				JquerySlider.sliderWrapper.css("width", JquerySlider.sliderImageWidth * JquerySlider.sliderImageLength + "px");
				var moon;

				moon = setInterval(function(){JquerySlider.play()},2000);

				JquerySlider.sliderControl.on('click', JquerySlider.play)
										  .on('click',function(){
										  	clearInterval(moon);
										  });
			},

		play:
			function(e){

				var direction = (e === undefined) ? 'next' : $(this).data('dir');

				var result = JquerySlider.setcur(direction);

				JquerySlider.sliderWrapper.animate({ // 500
					marginLeft: (JquerySlider.cur === 0) ? 0 : result
				});

			},

		setcur:
			function(dir){

				var length = JquerySlider.sliderImageLength,
					width  = JquerySlider.sliderImageWidth,
					sign   = (dir === 'next') ? '-=' : '+=',
					value  = width;

				JquerySlider.cur = (dir === 'next') ? ++JquerySlider.cur : --JquerySlider.cur;

				if(JquerySlider.cur === -1){
					JquerySlider.cur = length - 1;
					value = ( width * length) - width;
					sign  = '-=';
				} 

				else if ( JquerySlider.cur === length ){
					JquerySlider.cur = 0;
					value = 0;
					sign  = '+=';
				}

				return sign + value;

			}
	};

	JquerySlider.init();

}());