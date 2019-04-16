window.onscroll = function(a){
	if(window.scrollY > 0){
		NavBar.classList.add('sticky')
	}else{
		NavBar.classList.remove('sticky')
	}
} //如果滑动NAVBar增加sticky
