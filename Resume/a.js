setTimeout(function(){
	All.classList.remove('active')
}, 1000)
window.onscroll = function(a){
	// console.log(a)
	if(window.scrollY > 0){
		NavBar.classList.add('sticky')
	}else{
		NavBar.classList.remove('sticky')
	}
}
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
}

let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for(let i=0;i<aTags.length;i++){
	aTags[i].onclick = function(e){
		e.preventDefault()
		let a = e.currentTarget
		let href = a.getAttribute('href')
		let element = document.querySelector(href)
		let top = element.offsetTop
		window.scrollTo(0, top - 80)
	}
}