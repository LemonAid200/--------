const sliderItemsWrappers = document.querySelectorAll('.selling-hits .selling-hits-slider .item-card-wrapper')
const slider = document.querySelector('.selling-hits')

let count = 0
let width

let mobileWidthItem = 305
let browserWidthItem = 215

let amountOfPages = sliderItemsWrappers.length - 1


function init() {
	console.log('resize')
	width = document.querySelector('.selling-hits').offsetWidth

	console.log(width)
	if (width < 520){
		sliderItemsWrappers.forEach(item => { item.style.width = width + 'px'} )
		amountOfPages = sliderItemsWrappers.length - 1
		console.log(sliderItemsWrappers[0].style.width)
	} else if(width < 780){
		sliderItemsWrappers.forEach(item => { item.style.width = width / 2 + 'px'} )
		amountOfPages = sliderItemsWrappers.length / 2 - 1
		console.log(sliderItemsWrappers[0].style.width)
	} else if(width < 1100){
		sliderItemsWrappers.forEach(item => { item.style.width = width / 3 + 'px'} )
		amountOfPages = Math.ceil(sliderItemsWrappers.length / 3 - 1)
	} else {
		sliderItemsWrappers.forEach(item => { item.style.width = width / 4 + 'px'} )
		amountOfPages = sliderItemsWrappers.length / 4 - 1
	}
	updateSlide()
}

function updateSlide(){
	// alert('Hello world')
	document.querySelector('.selling-hits-slider').style.transform = `translate(${-count * width}px, 0)`
}

addEventListener('resize', init)

document.getElementById('slider-button-left').addEventListener('click', () => {
	if (count === 0) return
	count--; updateSlide()
})
document.getElementById('slider-button-right').addEventListener('click', () => {
	if (count === amountOfPages) return
	count++; updateSlide()
})



init()