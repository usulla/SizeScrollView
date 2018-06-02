const parentContainer = document.querySelector('.parent_container');
const container = document.querySelector('.container');
// const sizesContainer = document.querySelector('.sizes_container');
const page = document.querySelector('.page');

// clientWidth/clientHeight
const contClientWidth = container.clientWidth;
const contClientHeight = container.clientHeight;

// offsetWidth/offsetHeight
const contOffsetWidth = container.offsetWidth;
const contOffsetHeight = container.offsetHeight;

// offsetTop/offsetLeft
const contOffsetTop = container.offsetTop;
const contOffsetLeft = container.offsetLeft;

// clientTop/clientLeft
const contClientTop = container.clientTop;
const contClientLeft = container.clientLeft;

// scrollHeight/scrollWidth
const contScrollHeight = container.scrollHeight;
const contScrollWidth = container.scrollWidth;

// FOR WINDOW
// window.innerHeight/window.innerWidth
const windowInnerHeight = window.innerHeight;
const windowInnerWidth = window.innerWidth;

// window.scrollY/window.scrollX
const windowScrollY = window.scrollY;
const windowScrollX = window.scrollX;

// sizesContainer.innerHTML = `clientWidth = ${contClientWidth}`;
container.addEventListener('scroll', checkScroll);

// page position
page.style.top = `${contOffsetTop + contClientTop}px`;
page.style.left = `${contOffsetLeft + contClientLeft}px`;

page.style.height = `${contScrollHeight}px`;
page.style.width = `${contOffsetWidth - contClientLeft*2}px`;

const coordStartPage = parseInt(getComputedStyle(page).top);

document.querySelectorAll('.line_offsetTop .size__number span')[1].innerHTML = `${contOffsetTop}px`;
document.querySelectorAll('.line_clientTop .size__number span')[1].innerHTML = `${contClientTop}px`;

/* Change style top for Page */
function checkScroll(e){
	// scrollTop/scrollLeft
	const contScrollTop = container.scrollTop; 
	const contScrollLeft = container.scrollLeft;
	page.style.top = `${coordStartPage-contScrollTop}px`;

	// move size line scrollTop
	document.querySelector('.line_scrollTop .line1').style.transform = `translateY(${-contScrollTop}px)`;
		document.querySelector('.line_scrollTop .line3').style.transform = `translateY(${-contScrollTop}px)`;
	// view scrollTop number
	document.querySelectorAll('.line_scrollTop .size__number span')[1].innerHTML = `${contScrollTop}px`;
	document.querySelector('.line_scrollTop .line3 line').setAttribute('y2', `${contScrollTop}px`);
    document.querySelector('.line_scrollTop .line3').setAttribute('height', `${contScrollTop}px`);
}