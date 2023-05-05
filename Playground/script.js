function resize(){
    const image = document.querySelector('#dog');
    image.setAttribute('width', '50');
}


function go_back(){
    const image = document.querySelector('#dog');
    image.removeAttribute('width')
}

function green(){
    const title = document.querySelector('#title');
    title.classList.remove('text-red');
    title.classList.add('text-green');
}

function red(){
    const title = document.querySelector('#title');
    title.classList.remove('text-green');
    title.classList.add('text-red');
}

function erase(){
    const image = document.querySelector('#dog');
    image.remove();
}