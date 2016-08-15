(function($, window){
	var JquerySlider = {

		options:{
			containerWidth: 1000,
			numOfPictures: 2
		},

		sliderContainer:$('.slider-wrapper'),

		sliderImagesHolder:$('.slider-images'),

		sliderImages:$('.slider-images').find('img'),

		sliderImageLength:$('.slider-images').find('img').length, // numreic value

		sliderControl:$('.control'),

		init:
			function(options){

				var opts = JquerySlider.options;

				// apply the user inserted options
				$.extend(opts, options);

				// init the current value based in number of pictures per slide
				JquerySlider.cur = opts.numOfPictures - 1

				// inititiate the container styles
				JquerySlider.setSizes();

				// loop the slider automatically
				var moon = setInterval(function(){JquerySlider.play();},2000);

				// when the user click the controls button
				JquerySlider.sliderControl.on('click', JquerySlider.play)
										  .on('click',function(){
										  	clearInterval(moon);
										  });
			},


		setSizes:
			function(){

				var optsWidth = JquerySlider.options.containerWidth;
				// initiate the components sizes
				JquerySlider.sliderContainer.css( "width", optsWidth + "px" );
				JquerySlider.sliderImagesHolder.css("width", optsWidth * JquerySlider.sliderImageLength + "px");
				JquerySlider.sliderImages.css("width", (optsWidth/JquerySlider.options.numOfPictures) + "px");
			},

		play:
			function(e){

				/* if event object is undefined then the user still didn't trig any buttons 
				   otherwise get the button direction 
				*/
				
				var direction = (e === undefined) ? 'next' : $(this).data('dir');

				var result = JquerySlider.setcur(direction);

				JquerySlider.sliderImagesHolder.animate({
					marginLeft: (JquerySlider.cur === JquerySlider.options.numOfPictures - 1) ? 0 : result
				});

			},

		setcur:
			function(dir){

				var picsPerSlide = JquerySlider.options.numOfPictures,

					containerWidth = JquerySlider.options.containerWidth,

					// all pictures length
					length = JquerySlider.sliderImageLength,

					// single image width
					width  = containerWidth / picsPerSlide, // 600 / 3 = 200px

					/* 
					   specify the margin left value sign based on direction
					   "-=" is a right sliding (->)   AND   "+=" is a left sliding (<-)
					*/

					sign   = (dir === 'next') ? '-=' : '+=',

					// default value
					value  = width;

				/* 
				   set the current value based on the direction is next 
				   then increment the current value and vice versa
				*/

				JquerySlider.cur = (dir === 'next') ? ++JquerySlider.cur : --JquerySlider.cur;

				/*
				   if we are already in the first slide 
				   and the user pressed previous button   
				*/

				if(JquerySlider.cur === (picsPerSlide - 1) - 1){
					JquerySlider.cur = length - 1;
					value = (width * length) - containerWidth;
					sign  = '-=';
				}

				/*
				   if we are already in the last slide 
				   and the user pressed next button   
				*/

				else if ( JquerySlider.cur === length ){
					JquerySlider.cur = picsPerSlide - 1;
					value = 0;
					sign  = '+=';
				}

				return sign + value + "px";

			}
	};

	window.jquerySlider = JquerySlider.init;

}(jQuery, window));