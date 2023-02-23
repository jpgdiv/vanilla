import styles from './app.module.scss'

const App = () => {
    const app = document.createElement('div');
    app.innerHTML = 'app content'
    app.className = styles.app

    return app;
}

export default App