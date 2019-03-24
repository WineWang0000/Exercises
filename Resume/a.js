setTimeout(function(){
	All.classList.remove('active')
}, 1000)
window.onscroll = function(a){
	console.log(a)
	if(window.scrollY > 0){
		NavBar.classList.add('sticky')
	}else{
		NavBar.classList.remove('sticky')
	}
}
let aTags = document.getElementsByClassName('menuTrigger')
console.log(aTags)
for(let i=0;i<aTags.length;i++){
  aTags[i].onmouseenter = function(e){
		let a = e.currentTarget
		let brother = a.nextSibling
		while(brother.tagName !== 'UL'){
			brother = brother.nextSibling
		}
		brother.classList.add('active')
	}
	aTags[i].onmouseleave = function(e){
		let a = e.currentTarget
		let brother = a.nextSibling
		while(brother.tagName !== 'UL'){
			brother = brother.nextSibling
		}
		brother.classList.remove('active')
	}
}