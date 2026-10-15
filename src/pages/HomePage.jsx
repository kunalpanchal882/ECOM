import { useContext } from "react"
import {store} from '../context/Store.jsx'

const HomePage = () => {

   const data =  useContext(store)
   console.log("data",data)

  return (
    <div>HomePage</div>
  )
}

export default HomePage