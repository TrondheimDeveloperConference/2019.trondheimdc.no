import reactFlexboxGrid from 'react-flexbox-grid';
import styles from './styles/App.less';
import 'whatwg-fetch';
import 'es6-promise/auto';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as polyfill from './components/polyfill';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { store } from './store.js';
import routes from './routes';
import Root from './root';

const container = document.querySelector('#app');

render(<Provider store={store}><Root></Root></Provider>, container);
