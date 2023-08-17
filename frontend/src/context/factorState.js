import React,{useState} from 'react'
import factorContext from './factorContext'

const FactorState = (props) => {
    const [result, setResult] = useState(0)
    const [names, setNames] = useState([{ name: '', score: 0 }]);
    const [factors, setFactors] = useState({
        "Quality": 0,
        "Price" : 0 , 
         "Distance" : 0,
         "Orders" : 0,
         "Sales" : 0,
         "Benefit" : 0
     });
  return (
    <factorContext.Provider value={{factors, setFactors, result, setResult, names, setNames}}>
        {props.children}
    </factorContext.Provider>
  )
}

export default FactorState;