//封运动函数
function montion(obj,time,doFn,callBack){
	obj.style.transition = time;
	doFn.call(obj);//调用函数，并把this的指向给obj
	var called = false;//解决transitionend调用多次的bug
	obj.addEventListener('transitionend',function(){
		if(!called){
			callBack && callBack.call(obj);
			called = true;  
		}   
	},false);  
}     
       
     
//part1
function Nx_$1(cla){
	this.$1 = document.getElementsByClassName(cla)[0];
	this.$1C = this.$1.getElementsByClassName("container")[0];
	this.$1Car = this.$1C.getElementsByClassName("car")[0];
	this.$1CP = this.$1C.children[1].children;
	this.v =document.getElementsByClassName("viewport")[0];
// 	this.v.style.width = window.screen.width/40 + 'rem';   
// 	this.v.style.height = window.screen.height/40 + 'rem'; 
	this.$1CU = null;
	this.$1CL = null;
	this.timer = null;
	this.timerT = null;
	this.n = 0; 
	this.num = 0; 
}


//part1初始化
Nx_$1.prototype.init = function(){
	let ul = document.createElement("ul");
	ul.className = 'first_line';
	let ulT = document.createElement("ul");
	ulT.className = 'two_line';
	this.$1C.appendChild(ul);
	this.$1C.appendChild(ulT);
	for (let i = 0; i < 7; i++) {
		ul.innerHTML += '<li class="line"></li>';
		ulT.innerHTML += '<li class="line"></li>';
	}
	ulT.innerHTML += '<li class="line"></li>';
	this.$1CU = this.$1C.getElementsByClassName("first_line")[0];
	this.$1CUt = this.$1C.getElementsByClassName("two_line")[0];
	this.$1CL = this.$1CU.children;
	this.$1CLt = this.$1CUt.children;
	this.line();
	this.tend();
}


//part1呼吸灯
Nx_$1.prototype.line = function(){
	let _this = this;
	function Time(){
		_this.num %= _this.$1CL.length;
		_this.$1CL[_this.num].style.transition = '';
		montion(_this.$1CL[_this.num],'500ms',function(){
			this.style.opacity = 1;
		},function(){
			let that = this;
			setTimeout(function(){
				that.style.transition = '1.5s';
				that.style.opacity = 0;
				_this.num++;
			},400)
		})
	}
	this.timer = setInterval(function(){Time()},1000);
}


//part1呼吸灯2
Nx_$1.prototype.lineT = function(){
	let _this = this;
	this.$1CUt.style.display = 'block'; 
	function TimeT(){
		_this.n %= _this.$1CLt.length;
		for (let i = 0; i < _this.$1CLt.length; i++) {
			_this.$1CLt[i].style.transition = '';
		}
		montion(_this.$1CLt[_this.n],'200ms',function(){
			this.style.opacity = 1;
			_this.n++;
		},function(){
			let that = this;
			setTimeout(function(){
				that.style.transition = '500ms';
				that.style.opacity = 0;
			},400)
		})	
	}
	this.timerT = setInterval(function(){TimeT()},300);
}


//part1闪光
Nx_$1.prototype.wt = function(){
	let _this = this;
	let Bln = document.getElementById("BLN");
	montion(Bln,'500ms',function(){
		this.style.opacity = 1;
	},function(){
		montion(this,'1s',function(){
			this.style.opacity = 0;
		},function(){
			this.style.display = 'none';
			_this.lineT();
			_this.car();
		})
	})
}


//part1触发屏幕定位
Nx_$1.prototype.tend = function(){
	let _this = this;
	let end = function(){
		document.removeEventListener('touchend',end);
		clearInterval(_this.timer);
		_this.$1CU.style.display = 'none';
		_this.$1Car.style.display = 'block';
		for (let index in data.$3d) {
			_this.$1CP[data.$3d[index][0]].style.transform = data.$3d[index][1];
		}  
		_this.wt();
	}
	document.addEventListener('touchend',end);
}


//part1触发屏幕car
Nx_$1.prototype.car = function(){
	let _this = this;
	let reCar = function(ev){
		ev.cancelBubble = true;
		clearInterval(_this.timerT);
		montion(_this.$1,'2s',function(){
			this.style.opacity = 0;
		},function(){
			let that = this;
			setTimeout(function(){
				that.style.display = 'none';
			},1000)
		})
		_this.$1Car.removeEventListener('touchstart',reCar)
	}
	this.$1Car.addEventListener('touchstart',reCar)
}


let $1 = new Nx_$1("partOne");
$1.init();
 

var pageOne = document.getElementsByClassName("pagesOne")[0];

	for (var j = 0; j < data.NX_describe.pageThree.length; j++) {
//		pageOne.innerHTML += data.NX_describe.pageOne[j]+'';
//		pageOne.innerHTML += data.NX_describe.pageTwo[j]+'';
		pageOne.innerHTML += data.NX_describe.pageThree[j]+'';
	}



