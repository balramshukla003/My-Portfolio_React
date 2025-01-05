import React from 'react'
import Creation from './Creation';

const Auth = (props) => {
  return (
    <Creation.Provider value={{}}>
      {props.children}
    </Creation.Provider>
  )
}

export default Auth
