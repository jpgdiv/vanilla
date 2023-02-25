import styles from './app.module.scss'
import Navbar from './componenten/navbar';
import NavItem from './componenten/navitem';
import Home from './pages/home';
import Work from './pages/work';
import { createContext } from './componenten/store';
import { RenderContainer } from './utilty';

const rerender = () => {
  const contentContainer = document.getElementById('content-container');

  if (!contentContainer?.lastChild) return
  contentContainer.removeChild(contentContainer.lastChild);
  contentContainer.appendChild(getPageContent());
}

window.addEventListener('hashchange', function () {
  rerender()
});

const eventHandlerRerender = () => {
  rerender()
}

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
  createContext(app, eventHandlerRerender);
  app.className = styles.app

  const navbar = RenderContainer({
    logo: "Learn ",
    children: [
      NavItem({ text: "home", route: "#" }),
      NavItem({ text: "work", route: "#work" }),
    ],
  }, Navbar)

  const content = document.createElement('div');
  content.id = "content-container"
  content.append(getPageContent());

  app.append(...[navbar, content])


  return app;
}



export default App