
const btnOnClickHandler = () => {

    console.log('hello world')
}
const Button = () => {

    const btn = document.createElement('button');


    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = btnOnClickHandler;

    return btn;
}

export default Button