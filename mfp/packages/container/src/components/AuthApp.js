import React, {useRef,useEffect} from 'react'
import { mount as AuthAppMount } from "auth/AuthApp"
import { useHistory } from "react-router-dom";


const AuthApp = () => {
    const ref = useRef(null);
    let history = useHistory();
    
    useEffect(() => {
      if (ref.current) {
       const {onParentNavigate} = AuthAppMount(ref.current,{
          onNavigate: ({pathname:nextPathName}) => {
            let { pathname } = history.location;
            // What url marketing app should navigate to
            // console.log("hello  Mom the container noticed marketing",nextPathName)
            if (pathname !== nextPathName) {  
              history.push(nextPathName)
            }
          }
        })
      
        history.listen(onParentNavigate)
      }
    }, [ref])
    
  return (
     <div ref={ref} id="marketing-root"> </div>
  )
}

export default AuthApp