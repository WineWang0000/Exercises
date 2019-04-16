setTimeout(function(){
	All.classList.remove('active')
}, 1000) //加载的动画

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



