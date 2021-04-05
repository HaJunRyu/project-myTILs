import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './modules';

const middlewares = [ReduxThunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const StoreProvider = props => <Provider store={store}>{props.children}</Provider>;

export default StoreProvider;
