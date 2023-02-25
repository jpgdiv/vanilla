import { IChildren, IFC, IFCProps } from "./types";
import { v4 as uuidv4 } from 'uuid';



export const createElement = (tagname: keyof HTMLElementTagNameMap) => {
    const tag = document.createElement(tagname);

    return tag
};

export const createElementWithContent = (tag: keyof HTMLElementTagNameMap, content: string) => {
    const node = createElement(tag);
    node.innerHTML = content
    return node
};

export const createRootElement = () => {
    const root = createElement("div")
    const id = uuidv4();
    root.id = id;

    return {
        root,
        rerender: (element: HTMLElement | Element) => { render(id, element) }
    }
}

export const getChildrenArray = (children: IChildren) => {
    if (!children) {
        return []
    } else if (Array.isArray(children)) {
        return children
    } else {
        return [children]
    }
}

export const render = (selector: string, content: HTMLElement | Element) => {

    var node = document.getElementById(selector);
    console.log({ node, content })
    if (!node || !node.firstChild) return;
    node.removeChild(node.firstChild);
    node.append(content)
};



export const RenderContainer = <T>(props: IFCProps & T, element: IFC<T>) => {
    const { root, rerender } = createRootElement();

    const doRenrender = () => {
        rerender(element({ ...props, rerender: doRenrender }))
    }

    root.append(element({ ...props, rerender: doRenrender }))
    return root;
}
