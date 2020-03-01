import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { searchReducer } from '../search/deps/search.reducer';
import { listingsReducer } from '../listings/deps/listings.reducer';

export const configureStore = () => {
  const rootReducer = combineReducers({
    search: searchReducer,
    listings: listingsReducer,
  });

  const middlewareEnhancer = compose(applyMiddleware(thunk));

  const enhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, enhancers);

  return store;
};
