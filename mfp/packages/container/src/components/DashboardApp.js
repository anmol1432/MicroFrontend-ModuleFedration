import React, {useRef,useEffect} from 'react'
import { mount as DashboardAppMount } from "dashboard/DashboardApp"


const DashboardApp = () => {
    const ref = useRef(null);
    
    useEffect(() => {
      if (ref.current) {
        DashboardAppMount(ref.current)
      }
    }, [ref])
    
  return (
     <div ref={ref} id="dashboard-dev"> </div>
  )
}

export default DashboardApp