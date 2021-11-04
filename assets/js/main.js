const changeUrl = function(imgLink){
    let href = imgLink.href;
    (href.includes('dark')) ? 
        imgLink.href = href.replace('dark', 'light'):
        imgLink.href = href.replace('light', 'dark');
}

const changeMode = function(){
    changeClass(...this.changeColor)
    changeText(...this.changeText)
    changeUrl(this.changeImg)
}

const changeClass = function(){
    for(x of arguments){
        x.classList.toggle('dark')
    }
}

const changeText = function(){
    for (x of arguments){
        (x.innerText.includes('Dark')) ? 
        x.innerText = x.innerText.replace('Dark','Light') : 
        x.innerText = x.innerText.replace('Light','Dark')
    }
}

const button = document.getElementById('mode-modifier')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const title = document.querySelector('title')
const linkImg = document.querySelector('link[rel="icon"]')

button.addEventListener('click', e => changeMode.call(toChange))

const toChange = {
    changeColor:[body],
    changeText:[button,h1,title],
    changeImg:linkImg
}



