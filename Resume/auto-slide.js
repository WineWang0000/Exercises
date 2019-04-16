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
		let targetTop = top - 80
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
