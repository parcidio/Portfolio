console.log("Its working")

let theme = localStorage.getItem('theme')
let themeDots = document.getElementsByClassName('theme-dots')
let mode

if (theme == null) {
	setTheme('light')
}else{
	setTheme(theme)
}
setInterval(autoSetTheme, 60000)
for (var i = 0; themeDots.length > 1; i++) {

	themeDots[i].addEventListener('click',function(){
		 mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode=='light'){
		document.getElementById('theme-style').href = 'default.css'
	}
	if(mode=='blue'){
		document.getElementById('theme-style').href = 'theme-blue.css'
	}
	if(mode=='green'){
		document.getElementById('theme-style').href = 'theme-green.css'
	}
	if(mode=='purple'){
		document.getElementById('theme-style').href = 'theme-purple.css'
	}

	localStorage.setItem('theme', mode)
}

//***********changing theme automatically************

var i = 1 
function autoSetTheme(){
	
	themeMode = ['default.css', 'theme-purple.css', 'theme-blue.css', 'theme-green.css']
	
	if(themeMode[i]=='default.css'){
		mode ='light'
	}
	if(themeMode[i]=='theme-purple.css'){
		mode ='purple'
	}
	if(themeMode[i]=='theme-blue.css'){
		mode ='blue'
	}	
	if(themeMode[i]=='theme-green.css'){
		mode ='green'
	}
	localStorage.setItem('theme', mode )
	document.getElementById('theme-style').href = themeMode[i]
	console.log("i ="+ i)
	i = (i+1) % themeMode.length 
}
//************************

