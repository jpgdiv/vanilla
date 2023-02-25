

const Button = (text: string, onClickHandler: () => void) => {

    const btn = document.createElement('button');


    btn.innerHTML = text ?? 'Click me and check the console!';
    btn.onclick = onClickHandler;

    return btn;
}

export default Button