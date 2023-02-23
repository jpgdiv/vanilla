import styles from './work.module.scss'

const Work = () => {
    const div = document.createElement('div');

    div.innerHTML = 'work';
    div.className = styles.page

    return div;
}

export default Work