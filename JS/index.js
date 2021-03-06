
$(document).ready(function(){
    $("#card1").flip({
        trigger: 'manual'
    });
    $(".toToggle").click(function(){
        $("#card1").flip('toggle');
    });


    particlesJS.load('particles-js', 'JS/particlesjs.json', function() {
      console.log('callback - particles.js config loaded');
    });

    particlesJS.load('particles-js-2', 'JS/particlesjs.json', function() {
      console.log('callback - particles.js config loaded');
    });
    particlesJS.load('particles-js-3', 'JS/particlesjs.json', function() {
      console.log('callback - particles.js config loaded');
    });

      var tabs = {
  
        class: {
          bar: 'tabs',
          tab: 'tabs--tab',
          line: 'tabs--line',
          active: '-active'
        },
        
        colorAttribute: 'data-tab-color',
        
        select: function(_tab) {
          var parent = _tab.parentElement;
          var selected = parent.querySelector('.' + tabs.class.active);
          var line = parent.querySelector('.' + tabs.class.line);
          var tabColor = _tab.getAttribute(tabs.colorAttribute);
          
          if (tabColor) {
            line.style.backgroundColor = tabColor;
          } else {
            line.style.backgroundColor = null;
          }
          
          if (selected) {
            selected.classList.remove(tabs.class.active);
          }
          
          line.style.left = _tab.offsetLeft + 'px';
          line.style.width = _tab.offsetWidth + 'px';
          _tab.classList.add(tabs.class.active);
        },
        setUp: function(_tabBar) {
          var allTabs = _tabBar.querySelectorAll('.' + tabs.class.tab);
          
          for (var i = 0, ii = allTabs.length; i < ii; i++) {
            allTabs[i].addEventListener('click', function() {
              tabs.select(this);
            }, false);
          }
          
          tabs.select(allTabs[0]);
        },
        
        init: function() {
          var tabBars = document.querySelectorAll('.' + tabs.class.bar);
          
          for (var i = 0, ii = tabBars.length; i < ii; i++) {
            tabs.setUp(tabBars[i]);
          }
        }
      };
      
      
      tabs.init();
    //   document.querySelectorAll(".directions_block").style.opacity = 0
      document.querySelectorAll(".directions_block").forEach(e => e.onclick = function(){
        document.querySelectorAll(".directions_block").forEach(e => {
            e.style.opacity = 0;
            setTimeout(() => {
                e.style.display='none';
            }, 400);
        })
      });

      document.querySelector('#cardiology').addEventListener('click',() =>{       
          setTimeout(() => {
            document.querySelector('#cardiology-more').style.display='flex';
          }, 400);
          setTimeout(() => {
            document.querySelector('#cardiology-more').style.opacity=1;
          }, 450);
          
      });
      document.querySelector('#gynecology').addEventListener('click',() =>{
        setTimeout(() => {
            document.querySelector('#gynecology-more').style.display='flex';
          }, 400);
          setTimeout(() => {
            document.querySelector('#gynecology-more').style.opacity=1;
          }, 450);
    });
    document.querySelector('#urology').addEventListener('click',() =>{
        setTimeout(() => {
            document.querySelector('#urology-more').style.display='flex';
          }, 400);
          setTimeout(() => {
            document.querySelector('#urology-more').style.opacity=1;
          }, 450);
    });

    document.querySelector('#close-diractions-info-cardiology').addEventListener('click', ()=>{
        document.querySelector('#cardiology-more').style.opacity=0;
      setTimeout(() => {
        document.querySelector('#cardiology-more').style.display='none';
      }, 300);
        document.querySelectorAll(".directions_block").forEach(e => {
            
            setTimeout(() => {
              e.style.display='flex';
            }, 400);
            setTimeout(() => {
              e.style.opacity = 1;
            }, 500);
      });
    });
    document.querySelector('#close-diractions-info-gynecology').addEventListener('click', ()=>{
      document.querySelector('#gynecology-more').style.opacity=0;
    setTimeout(() => {
      document.querySelector('#gynecology-more').style.display='none';
    }, 300);
      document.querySelectorAll(".directions_block").forEach(e => {
          
          setTimeout(() => {
            e.style.display='flex';
          }, 400);
          setTimeout(() => {
            e.style.opacity = 1;
          }, 500);
    });
  });
  document.querySelector('#close-diractions-info-urology').addEventListener('click', ()=>{
    document.querySelector('#urology-more').style.opacity=0;
  setTimeout(() => {
    document.querySelector('#urology-more').style.display='none';
  }, 300);
    document.querySelectorAll(".directions_block").forEach(e => {
        
        setTimeout(() => {
          e.style.display='flex';
        }, 400);
        setTimeout(() => {
          e.style.opacity = 1;
        }, 500);
  });
});



function Ant(crslId) {

	let id = document.getElementById(crslId);
	if(id) {
		this.crslRoot = id
	}
	else {
		this.crslRoot = document.querySelector('.ant-carousel')
	};

	// Carousel objects
	this.crslList = this.crslRoot.querySelector('.ant-carousel-list');
	this.crslElements = this.crslList.querySelectorAll('.ant-carousel-element');
	this.crslElemFirst = this.crslList.querySelector('.ant-carousel-element');
	this.leftArrow = this.crslRoot.querySelector('div.ant-carousel-arrow-left');
	this.rightArrow = this.crslRoot.querySelector('div.ant-carousel-arrow-right');
	this.indicatorDots = this.crslRoot.querySelector('div.ant-carousel-dots');

	// Initialization
	this.options = Ant.defaults;
	Ant.initialize(this)
};

Ant.defaults = {

	// Default options for the carousel
	elemVisible: 3, // ??????-???? ???????????????????????? ?????????????????? ?? ????????????????
	loop: true,     // ?????????????????????? ???????????????????????? ???????????????? 
	auto: true,     // ???????????????????????????? ??????????????????
	interval: 4000, // ???????????????? ?????????? ???????????????????? ?????????????????? (????)
	speed: 850,     // ???????????????? ???????????????? (????)
	touch: false,    // ??????????????????  ????????????????????????????
	arrows:false,   // ?????????????????? ??????????????????
	dots: false     // ???????????????????????? ??????????
};

Ant.prototype.elemPrev = function(num) {
	num = num || 1;

	if(this.options.dots) this.dotOn(this.currentElement);
	this.currentElement -= num;
	if(this.currentElement < 0) this.currentElement = this.dotsVisible-1;
	if(this.options.dots) this.dotOff(this.currentElement);

	if(!this.options.loop) {  // ?????????? ???????????? ?????? ??????????
		this.currentOffset += this.elemWidth*num;
		this.crslList.style.marginLeft = this.currentOffset + 'px';
		if(this.currentElement == 0) {
			this.leftArrow.style.display = 'none'; this.touchPrev = false
		}
		this.rightArrow.style.display = 'block'; this.touchNext = true
	}
	else {                    // ?????????? ???????????? ?? ????????????
		let elm, buf, this$ = this;
		for(let i=0; i<num; i++) {
			elm = this.crslList.lastElementChild;
			buf = elm.cloneNode(true);
			this.crslList.insertBefore(buf, this.crslList.firstElementChild);
			this.crslList.removeChild(elm)
		};
		this.crslList.style.marginLeft = '-' + this.elemWidth*num + 'px';
		let compStyle = window.getComputedStyle(this.crslList).marginLeft;
		this.crslList.style.cssText = 'transition:margin '+this.options.speed+'ms ease;';
		this.crslList.style.marginLeft = '0px';
		setTimeout(function() {
			this$.crslList.style.cssText = 'transition:none;'
		}, this.options.speed)
	}
};

Ant.prototype.elemNext = function(num) {
	num = num || 1;

	if(this.options.dots) this.dotOn(this.currentElement);
	this.currentElement += num;
	if(this.currentElement >= this.dotsVisible) this.currentElement = 0;
	if(this.options.dots) this.dotOff(this.currentElement);

	if(!this.options.loop) {  // ?????????? ?????????? ?????? ??????????
		this.currentOffset -= this.elemWidth*num;
		this.crslList.style.marginLeft = this.currentOffset + 'px';
		if(this.currentElement == this.dotsVisible-1) {
			this.rightArrow.style.display = 'none'; this.touchNext = false
		}
		this.leftArrow.style.display = 'block'; this.touchPrev = true
	}
	else {                    // ?????????? ?????????? ?? ????????????
		let elm, buf, this$ = this;
		this.crslList.style.cssText = 'transition:margin '+this.options.speed+'ms ease;';
		this.crslList.style.marginLeft = '-' + this.elemWidth*num + 'px';
		setTimeout(function() {
			this$.crslList.style.cssText = 'transition:none;';
			for(let i=0; i<num; i++) {
				elm = this$.crslList.firstElementChild;
				buf = elm.cloneNode(true); this$.crslList.appendChild(buf);
				this$.crslList.removeChild(elm)
			};
			this$.crslList.style.marginLeft = '0px'
		}, this.options.speed)
	}
};

Ant.prototype.dotOn = function(num) {
	this.indicatorDotsAll[num].style.cssText = 'background-color:#BBB; cursor:pointer;'
};

Ant.prototype.dotOff = function(num) {
	this.indicatorDotsAll[num].style.cssText = 'background-color:#556; cursor:default;'
};

Ant.initialize = function(that) {

	// Constants
	that.elemCount = that.crslElements.length; // ???????????????????? ??????????????????
	that.dotsVisible = that.elemCount;         // ?????????? ?????????????? ??????????
	let elemStyle = window.getComputedStyle(that.crslElemFirst);
	that.elemWidth = that.crslElemFirst.offsetWidth +  // ???????????? ???????????????? (?????? margin)
	  parseInt(elemStyle.marginLeft) + parseInt(elemStyle.marginRight);

	// Variables
	that.currentElement = 0; that.currentOffset = 0;
	that.touchPrev = true; that.touchNext = true;
	let xTouch, yTouch, xDiff, yDiff, stTime, mvTime;
	let bgTime = getTime();

	// Functions
	function getTime() {
		return new Date().getTime();
	};
	function setAutoScroll() {
		that.autoScroll = setInterval(function() {
			let fnTime = getTime();
			if(fnTime - bgTime + 10 > that.options.interval) {
				bgTime = fnTime; that.elemNext()
			}
		}, that.options.interval)
	};

	// Start initialization
	if(that.elemCount <= that.options.elemVisible) {   // ?????????????????? ??????????????????
		that.options.auto = false; that.options.touch = false;
		that.options.arrows = false; that.options.dots = false;
		that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
	};

	if(!that.options.loop) {       // ???????? ?????? ?????????? - ???????????????? ???????????????????? ??????????
		that.dotsVisible = that.elemCount - that.options.elemVisible + 1;
		that.leftArrow.style.display = 'none';  // ?????????????????? ?????????? ??????????????
		that.touchPrev = false;    // ?????????????????? ?????????????????? ???????????????????????????? ????????????
		that.options.auto = false; // ?????????????????? ????????????????????????
	}
	else if(that.options.auto) {   // ?????????????????????????? ????????????????????????
		setAutoScroll();
		// ?????????????????? ?????????????????? ?????? ?????????????????? ???????? ???? ??????????????
		that.crslList.addEventListener('mouseenter', function() {
    	clearInterval(that.autoScroll)
    }, false);
		that.crslList.addEventListener('mouseleave', setAutoScroll, false)
	};

	if(that.options.touch) {   // ?????????????????????????? ?????????????????? ????????????????????????????
		that.crslList.addEventListener('touchstart', function(e) {
			xTouch = parseInt(e.touches[0].clientX);
			yTouch = parseInt(e.touches[0].clientY);
			stTime = getTime()
		}, false);
		that.crslList.addEventListener('touchmove', function(e) {
			if(!xTouch || !yTouch) return;
			xDiff = xTouch - parseInt(e.touches[0].clientX);
			yDiff = yTouch - parseInt(e.touches[0].clientY);
			mvTime = getTime();
			if(Math.abs(xDiff) > 15 && Math.abs(xDiff) > Math.abs(yDiff) && mvTime - stTime < 75) {
				stTime = 0;
				if(that.touchNext && xDiff > 0) {
					bgTime = mvTime; that.elemNext()
				}
				else if(that.touchPrev && xDiff < 0) {
					bgTime = mvTime; that.elemPrev()
				}
			}
		}, false)
	};

	if(that.options.arrows) {  // ?????????????????????????? ??????????????
		if(!that.options.loop) that.crslList.style.cssText =
      'transition:margin '+that.options.speed+'ms ease;';
		that.leftArrow.addEventListener('click', function() {
			let fnTime = getTime();
			if(fnTime - bgTime > that.options.speed) {
				bgTime = fnTime; that.elemPrev()
			}
		}, false);
		that.rightArrow.addEventListener('click', function() {
			let fnTime = getTime();
			if(fnTime - bgTime > that.options.speed) {
				bgTime = fnTime; that.elemNext()
			}
		}, false)
	}
	else {
		that.leftArrow.style.display = 'none';
    that.rightArrow.style.display = 'none'
	};

	if(that.options.dots) {  // ?????????????????????????? ???????????????????????? ??????????
		let sum = '', diffNum;
		for(let i=0; i<that.dotsVisible; i++) {
			sum += '<span class="ant-dot"></span>'
		};
		that.indicatorDots.innerHTML = sum;
		that.indicatorDotsAll = that.crslRoot.querySelectorAll('span.ant-dot');
		// ?????????????????? ???????????? ???????????????????? ?????????????? 'click'
		for(let n=0; n<that.dotsVisible; n++) {
			that.indicatorDotsAll[n].addEventListener('click', function() {
				diffNum = Math.abs(n - that.currentElement);
				if(n < that.currentElement) {
					bgTime = getTime(); that.elemPrev(diffNum)
				}
				else if(n > that.currentElement) {
					bgTime = getTime(); that.elemNext(diffNum)
				}
				// ???????? n == that.currentElement ???????????? ???? ????????????
			}, false)
		};
		that.dotOff(0);  // ??????????[0] ??????????????????, ?????????????????? ????????????????
		for(let i=1; i<that.dotsVisible; i++) {
			that.dotOn(i)
		}
	}
};
new Ant();
});

