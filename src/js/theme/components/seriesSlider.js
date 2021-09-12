import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider"

export const seriesSlider = () => {

	const slider = document.querySelector('.series__cards');
	if (!slider) return  

	tns({
		container: '.series__cards',
		items: 1,
		gutter: 40,
		mouseDrag: true,
		arrowKeys: true,
		autoplay: true,
		autoplayTimeout: 3000,
		controls: false,
		nav: false,
		autoplayHoverPause: true,
		autoplayButtonOutput: false,
		speed: 1000,
		responsive: {
			650: {
				items: 2
			},
			1200: {
				items: 4,
			}
		}
	  });
}