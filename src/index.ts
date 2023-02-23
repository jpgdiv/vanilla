const btnOnClickHandler = () => {

    console.log('hello world')
}

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = 'Hello webpack';

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = btnOnClickHandler;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
