import Button from '../../componenten/button';
import styles from './home.module.scss'

import { useStore } from '../../componenten/store';


const Home = () => {
    const div = document.createElement('div');
    const [store, setStore] = useStore();

    div.append(...[
        Button('hoinormal', () => {
            setStore({ ...store, name: store.name + "iets" })
        }),
        Button(store.name, () => { setStore({ ...store, name: "restore" }) })

    ])
    div.className = styles.page




    return div;
}

export default Home