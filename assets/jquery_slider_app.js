(function(){
	var JquerySlider = {

		sliderContainer:$('.slider-wrapper'),

		sliderImagesHolder:$('.slider-images'),

		sliderImages:$('.slider-images').find('img'),

		sliderImageLength:$('.slider-images').find('img').length,

		sliderControl:$('.control'),

		cur:0,

		options:{
			containerWidth: "700"
		},

		init:
			function(options){

				// apply the user inserted options
				$.extend(JquerySlider.options, options);

				// inititiate the container styles
				JquerySlider.setSizes();

				// action
				var moon = setInterval(function(){JquerySlider.play()},2000);

				// when the user click the controls button
				JquerySlider.sliderControl.on('click', JquerySlider.play)
										  .on('click',function(){
										  	clearInterval(moon);
										  });
			},


		setSizes:
			function(){

				var optsWidth = JquerySlider.options.containerWidth;

				// initiate the sizes
				JquerySlider.sliderContainer.css( "width", optsWidth + "px" );
				JquerySlider.sliderImagesHolder.css("width", optsWidth * JquerySlider.sliderImageLength + "px");
				JquerySlider.sliderImages.css("width", optsWidth + "px");

			},

		play:
			function(e){

				var direction = (e === undefined) ? 'next' : $(this).data('dir');

				var result = JquerySlider.setcur(direction);

				JquerySlider.sliderImagesHolder.animate({ // 500
					marginLeft: (JquerySlider.cur === 0) ? 0 : result
				});

			},

		setcur:
			function(dir){

				var length = JquerySlider.sliderImageLength,
					width  = JquerySlider.options.containerWidth,
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

	JquerySlider.init({
		containerWidth: "600"
	});

}());