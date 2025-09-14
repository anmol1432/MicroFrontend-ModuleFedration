import React, {useRef,useEffect} from 'react'
import { mount as marketingMount } from "marketing/MarketingApp"
import { useHistory } from "react-router-dom";


const MarketingApp = () => {
    const ref = useRef(null);
    let history = useHistory();
    
    useEffect(() => {
      if (ref.current) {
       const {onParentNavigate} = marketingMount(ref.current,{
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

export default MarketingApp