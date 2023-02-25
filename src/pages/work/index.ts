import Button from '../../componenten/button';
import { useStore } from '../../componenten/store';
import styles from './work.module.scss'

const Work = () => {
    const div = document.createElement('div');

    const [store, setStore] = useStore();


    div.innerHTML = 'work';
    div.className = styles.page

    div.append(Button('rerender', () => { console.log("not iplemented"); }))

    return div;
}

export default Work