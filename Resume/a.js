setTimeout(function(){
	All.classList.remove('active')
}, 1000) //加载的动画

window.onscroll = function(a){
	if(window.scrollY > 0){
		NavBar.classList.add('sticky')
	}else{
		NavBar.classList.remove('sticky')
	}
} //如果滑动NAVBar增加sticky

let liTags = document.getElementsByClassName('menuTrigger')
for(let i=0;i<liTags.length;i++){
  liTags[i].onmouseenter = function(e){
		let li = e.currentTarget
		let brother = li.getElementsByTagName('ul')[0]
		brother.classList.add('active')
	}
	liTags[i].onmouseleave = function(e){
		let li = e.currentTarget
		let brother = li.getElementsByTagName('ul')[0]
		brother.classList.remove('active')
		}
} //鼠标进入出现List，鼠标移开消失

let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for(let i=0;i<aTags.length;i++){
	aTags[i].onclick = function(e){
		e.preventDefault()
		let a = e.currentTarget //获取当前点的元素
		let href = a.getAttribute('href') //获取a连接的href，注意getAtt与直接获取的区别
		let element = document.querySelector(href) 
		let top = element.offsetTop //元素距离页面的距离，(不动值)
		let n = 10
		let duration = 400 / n
		let currentTop = window.scrollY 
		let targetTop = top
		console.log(targetTop)
		console.log(window.scrollY )
		//上面四句等于：let top = document.querySelector(e.currentTarget).grtAttribute('href')).offsetTop
		let distance = (targetTop - currentTop) / n
		let i = 0
		let id = setInterval(()=>{
			if(i===n){
				window.clearInterval(id)
				return
			}
			i+=1
			window.scrollTo(0, currentTop + distance * i)
		}, duration)
	}
}


$('#switch1').on('click', function(){
  $(pictures).css({
    transform: 'translateX(0)'
  })
})
$('#switch2').on('click', function(){
  $(pictures).css({
    transform: 'translateX(-451px)'
  })
})
$('#switch3').on('click', function(){
  $(pictures).css({
    transform: 'translateX(-902px)'
  })
}) 

