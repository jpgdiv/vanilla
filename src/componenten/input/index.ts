
const inputOnChangeHandler = () => {

    console.log('hello world')
}
const Button = (inner: string) => {

    const btn = document.createElement('button');



    btn.onchange = inputOnChangeHandler;


    btn.innerHTML = inner

    return btn;
}

export default Button