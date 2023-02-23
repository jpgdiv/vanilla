import styles from './app.module.scss'
import Navbar from './componenten/navbar/navbar';
import NavItem from './componenten/navitem/navitem';


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
      const home = document.createElement('div');
      home.innerHTML = "<p>home page <p>"
      return home;
    case "#work":
      const work = document.createElement('div');
      work.innerHTML = "<p> work page <p>"
      return work;
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