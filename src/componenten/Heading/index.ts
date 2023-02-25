
import { createElementWithContent } from '../../utilty';
import styles from './heading.module.scss'

const Heading = (text: string, order: "h1" | 'h2' | 'h3' | 'h4') => {

    const heading = createElementWithContent(order, text);
    heading.className = styles[order] + " header--title";
    const container = createElementWithContent('div', heading.outerHTML);

    container.className = ''
    return container
}

export default Heading