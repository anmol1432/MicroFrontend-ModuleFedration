import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory} from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory,initialPath, onSignIn  }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries:[initialPath]
  });
  
  if(onNavigate){
    history.listen(onNavigate)
  }

  console.log(onSignIn)
  ReactDOM.render(<App onSignIn={onSignIn} history={history}/>, el);
  
  return {
    onParentNavigate({pathname:nextPathName}) {
      let { pathname } = history.location;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    }
  }
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#auth-dev');

  if (devRoot) {
    mount(devRoot,{});
  }
}

// We are running through container
// and we should export the mount function
export { mount };
