import styles from './app.module.scss'
import Navbar from './componenten/navbar';
import NavItem from './componenten/navitem';
import Home from './pages/home';
import Work from './pages/work';


window.addEventListener('hashchange', function () {
  const contentContainer = this.document.getElementById('content-container');

  if (!contentContainer?.lastChild) return
  contentContainer.removeChild(contentContainer.lastChild);
  contentContainer.appendChild(getPageContent());
});

const getPageContent = (): HTMLDivElement => {
  const route = window.location.hash;

  switch (route) {
    case "":
      return Home();
    case "#work":
      return Work();
    default:
      const notfound = document.createElement('div');
      notfound.innerHTML = "<p>404 not found<p>"
      return notfound;
  }
}



const App = () => {
  const app = document.createElement('div');
  const content = document.createElement('div');

  app.className = styles.app

  app.append(
    Navbar({
      menuitems: [
        NavItem({ text: "home", route: "#" }),
        NavItem({ text: "work", route: "#work" }),
      ],
    })
  )
  content.id = "content-container"
  content.append(getPageContent());
  app.append(content)

  return app;
}

export default App