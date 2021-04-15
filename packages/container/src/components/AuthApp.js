//this function allows us to render from our child application 
//this function will work with any child framework angulat,vue etc 
//As long as output is html this function will work


import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory()

  useEffect(() => {
    let { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {

        const { pathname } = history.location

        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
      onSignIn

    });

    history.listen(onParentNavigate)
  }, []);

  return <div ref={ref} />;
};
