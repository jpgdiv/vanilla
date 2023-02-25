import { IFC, IChildren } from '../../types';
import { getChildrenArray, createElement, render, createRootElement } from '../../utilty';
import Button from "../button";
import Heading from "../Heading";

type INavbar = IFC<{
    logo: string
}>

let condition = false;


const Navbar: INavbar = (props) => {
    const { children, logo, rerender } = props;
    const element = createElement('header');

    const menu = createElement('ul');

    element.className = `${condition ? '' : 'header-container'}`
    menu.append(...[
        Heading(logo, 'h1'),
        ...getChildrenArray(children),
        Button('togle', () => { condition = !condition; console.log(condition) }),
        Button('rerenderdd', () => { rerender?.(Navbar(props)) }),
    ])

    element.append(
        menu
    )

    return element;
}

export default Navbar



