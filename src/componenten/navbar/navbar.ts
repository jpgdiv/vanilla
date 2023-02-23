const Navbar = ({ menuitems = [] }: { menuitems: HTMLLIElement[] }) => {

    const nav = document.createElement('header');
    const menu = document.createElement('ul');

    menuitems.forEach(child => menu.append(child))
    nav.append(menu)

    return nav;
}

export default Navbar