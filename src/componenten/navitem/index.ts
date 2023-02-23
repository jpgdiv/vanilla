const NavItem = ({ text = "", route = "" }: { text: string, route: string }) => {

    const menuitem = document.createElement('li');
    const link = document.createElement('a');

    link.href = route;
    link.innerText = text;

    menuitem.append(link)
    return menuitem;
}

export default NavItem