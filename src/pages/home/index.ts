import styles from './home.module.scss'

const Home = () => {
    const div = document.createElement('div');

    div.innerHTML = 'home';
    div.className = styles.page

    return div;
}

export default Home