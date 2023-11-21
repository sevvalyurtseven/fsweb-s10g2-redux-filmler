import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

export const store = createStore(reducer);