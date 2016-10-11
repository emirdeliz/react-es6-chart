import { createStore } from 'redux';
import rootReducer from '../reducers';

const storeConfig = (preloadedState) => {
    const store = createStore(rootReducer, preloadedState);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(reducers);
        });
    }
    return store;
};

export default storeConfig;
