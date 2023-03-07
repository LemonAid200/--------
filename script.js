const sliderItemsWrappers = document.querySelectorAll('.selling-hits .selling-hits-slider .item-card-wrapper')
const slider = document.querySelector('.selling-hits')

let count = 0
let width

let mobileWidthItem = 305
let browserWidthItem = 215

function init() {
	console.log('resize')
	width = document.querySelector('.selling-hits').offsetWidth
	console.log(width)
	if (width - 42 < 1320){
		sliderItemsWrappers.forEach(item => {item.style.background =  'red'; item.style.width = width} )	
		console.log(sliderItemsWrappers[0].style.width)
	}
}

addEventListener('resize', init)


init()