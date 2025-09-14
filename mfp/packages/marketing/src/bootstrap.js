import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory} from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();
  
  if(onNavigate){
    history.listen(onNavigate)
  }

  ReactDOM.render(<App history={history}/>, el);
  return {
    onParentNavigate({pathname:nextPathName}) {
      let { pathname } = history.location;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
      console.log('Container just navigated',location);

    }
  }
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#marketing-dev');

  if (devRoot) {
    mount(devRoot,{});
  }
}

// We are running through container
// and we should export the mount function
export { mount };
