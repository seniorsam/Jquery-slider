# Jquery-slider

### How to use this slider in your website?

#### 1 - Add the following html markup to your page.

	<div class="slider-wrapper">
		<div class="control prev" data-dir="prev"> &lt </div>
		<div class="control next" data-dir="next"> &gt </div>
		<ul class="slider-images">

			<!--Add your images links here-->
			
			<li><img src="assets/images/slider-1.jpg" alt=""></li>
			<li><img src="assets/images/slider-2.jpg" alt=""></li>
			<li><img src="assets/images/slider-3.jpg" alt=""></li>
			<li><img src="assets/images/slider-1.jpg" alt=""></li>
			<li><img src="assets/images/slider-2.jpg" alt=""></li>

		</ul>
	</div>

#### 2 - Add the assets folder and link the images and the css, js files.

#### 3 - Call the init function by adding the following script

	<script>
		window.jquerySlider();
	</script>

### Available options in the slider

#### You can change the size of the slider And the images per slide

	<script>
		window.jquerySlider({
			containerWidth: 900  // change this to your size
			numOfPictures: 2	 // change this value				
		});
	</script>

### Note

The slider using default options bundled in the script, and i'm saying that because i want to clarify that using options object inside the slider function is optional, the slider will work fine with the default options if you just added only the function as follows

	<script>
		window.jquerySlider();
	</script>

adding options is up to you, in case if you wanted to change the look or manipulate any options from the available options i mentioned. 

### Thank you