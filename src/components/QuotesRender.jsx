import React, {useState, useEffect } from 'react'
import QuotesData from '../assets/Quotes.json'
import QuotesCard from '../components/QuotesCard'

const QuotesRender = () => {

    const [quotesAccumate, setquotesAccumate] = useState([])

    useEffect(() => {
        // console.log(QuotesData);
      setquotesAccumate(QuotesData)
    }, [])
    

  return (
    
    <div className=' bg-black flex flex-col gap-5'>
        
        {quotesAccumate.map((quote)=>{
           return <QuotesCard quote={quote}/>
        })}

    </div>
  )
}

export default QuotesRender