$(document).ready(function () {
	var itemsMainDiv = '.multiCarousel';
	var itemsDiv = '.multiCarousel-inner';
	var itemWidth = '';

	$('.leftLst, .rightLst').click(function () {
		var condition = $(this).hasClass('leftLst');
		if (condition) click(0, this);
		else click(1, this);
	});

	ResCarouselSize();

	$(window).resize(function () {
		ResCarouselSize();
	});

	//this function define the size of the items
	function ResCarouselSize() {
		var incno = 0;
		var dataItems = 'data-items';
		var itemClass = '.item';
		var id = 0;
		var btnParentSb = '';
		var itemsSplit = '';
		var sampwidth = $(itemsMainDiv).width();
		var bodyWidth = $('body').width();
		$(itemsDiv).each(function () {
			id = id + 1;
			var itemNumbers = $(this).find(itemClass).length;
			btnParentSb = $(this).parent().attr(dataItems);
			itemsSplit = btnParentSb.split(',');
			$(this)
				.parent()
				.attr('id', 'multiCarousel' + id);

			if (bodyWidth >= 1200) {
				incno = itemsSplit[3];
				itemWidth = sampwidth / incno;
			} else if (bodyWidth >= 992) {
				incno = itemsSplit[2];
				itemWidth = sampwidth / incno;
			} else if (bodyWidth >= 768) {
				incno = itemsSplit[1];
				itemWidth = sampwidth / incno;
			} else {
				incno = itemsSplit[0];
				itemWidth = sampwidth / incno;
			}
			$(this).css({
				transform: 'translateX(0px)',
				width: itemWidth * itemNumbers,
			});
			$(this)
				.find(itemClass)
				.each(function () {
					$(this).outerWidth(itemWidth);
				});

			$('.leftLst').addClass('over');
			$('.rightLst').removeClass('over');
		});
	}

	//this function used to move the items
	function ResCarousel(e, el, s) {
		var leftBtn = '.leftLst';
		var rightBtn = '.rightLst';
		var translateXval = '';
		var divStyle = $(el + ' ' + itemsDiv).css('transform');
		var values = divStyle.match(/-?[\d\.]+/g);
		var xds = Math.abs(values[4]);
		if (e == 0) {
			translateXval = parseInt(xds) - parseInt(itemWidth * s);
			$(el + ' ' + rightBtn).removeClass('over');

			if (translateXval <= itemWidth / 2) {
				translateXval = 0;
				$(el + ' ' + leftBtn).addClass('over');
			}
		} else if (e == 1) {
			var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
			translateXval = parseInt(xds) + parseInt(itemWidth * s);
			$(el + ' ' + leftBtn).removeClass('over');

			if (translateXval >= itemsCondition - itemWidth / 2) {
				translateXval = itemsCondition;
				$(el + ' ' + rightBtn).addClass('over');
			}
		}
		$(el + ' ' + itemsDiv).css(
			'transform',
			'translateX(' + -translateXval + 'px)'
		);
	}

	//It is used to get some elements from btn
	function click(ell, ee) {
		var Parent = '#' + $(ee).parent().attr('id');
		var slide = $(Parent).attr('data-slide');
		ResCarousel(ell, Parent, slide);
	}
});

const monthlyBtn = document.getElementById('monthly');
const yearlyBtn = document.getElementById('yearly');
const pricingCards = document.getElementById('pricing-cards');

monthlyBtn.addEventListener('click', () => {
	monthlyBtn.classList.add('active');
	yearlyBtn.classList.remove('active');
	pricingCards.innerHTML = `
                <div class="col-md-4 mb-4">
                    <div class="pricing-card">
                        <h4>Individual</h4>
                        <h2>R24.75</h2>
                        <p>Monthly</p>
                        <hr class="text-white my-3">
                        <p>1 to 5 employees</p>
                        <button class="btn-get-started">Get Started</button>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="pricing-card">
                        <h4>Freelance</h4>
                        <h2>R26.45</h2>
                        <p>Monthly</p>
                        <hr class="text-white my-3">
                        <p>6 to 10 employees</p>
                        <button class="btn-get-started">Get Started</button>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="pricing-card">
                        <h4>Small Businesss</h4>
                        <h2>R28.75</h2>
                        <p>Monthly</p>
                        <hr class="text-white my-3">
                        <p>11 to 50 employees</p>
                        <button class="btn-get-started">Get Started</button>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="pricing-card">
                        <h4>Corporate</h4>
                        <h2>R345</h2>
                        <p>Monthly</p>
                        <hr class="text-white my-3">
                        <p>101 to 200 employees</p>
                        <button class="btn-get-started">Get Started</button>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="pricing-card">
                        <h4>Custom</h4>
                        <h2>Special Request</h2>
                        <p>Monthly</p>
                        <hr class="text-white my-3">
                        <p>For more than 200 employees</p>
                        <button class="btn-get-started">Get Started</button>
                    </div>
                </div>
            `;
});

yearlyBtn.addEventListener('click', () => {
	yearlyBtn.classList.add('active');
	monthlyBtn.classList.remove('active');
	pricingCards.innerHTML = `
                <div class="col-md-4 mb-4">
                    <div class="pricing-card">
                        <h4>Individual</h4>
                        <h2>R24.75</h2>
                        <p>Annually</p>
                        <hr class="text-white my-3">
                        <p>1 to 5 employees</p>
                        <button class="btn-get-started">Get Started</button>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="pricing-card">
                        <h4>Freelance</h4>
                        <h2>R26.45</h2>
                        <p>Annually</p>
                        <hr class="text-white my-3">
                        <p>6 to 10 employees</p>
                        <button class="btn-get-started">Get Started</button>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="pricing-card">
                        <h4>Small Businesss</h4>
                        <h2>R28.75</h2>
                        <p>Annually</p>
                        <hr class="text-white my-3">
                        <p>11 to 50 employees</p>
                        <button class="btn-get-started">Get Started</button>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="pricing-card">
                        <h4>Corporate</h4>
                        <h2>R345</h2>
                        <p>Annually</p>
                        <hr class="text-white my-3">
                        <p>101 to 200 employees</p>
                        <button class="btn-get-started">Get Started</button>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="pricing-card">
                        <h4>Custom</h4>
                        <h2>Special Request</h2>
                        <p>Annually</p>
                        <hr class="text-white my-3">
                        <p>For more than 200 employees</p>
                        <button class="btn-get-started">Get Started</button>
                    </div>
                </div>
            `;
});
