import React, {useState, useEffect } from 'react'
import QuotesData from '../assets/Quotes.json'
import QuotesCard from '../components/QuotesCard'

const QuotesRender = () => {

    const [quotesAccumate, setquotesAccumate] = useState(QuotesData)

    useEffect(() => {
      setquotesAccumate(quotesAccumate)
    }, [])
    

  return (
    
    <div>
        
        {quotesAccumate.map((quote,idx)=>{
            <QuotesCard quote={quote} />
        })}

    </div>
  )
}

export default QuotesRender