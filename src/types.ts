

export type IChildren = HTMLElement | HTMLElement[] | undefined;

export interface IFCProps {
    children?: IChildren;
    rerender?: (element: HTMLElement | Element) => void
};

export type IFC<T> = (props: T & IFCProps) => HTMLElement | Element;