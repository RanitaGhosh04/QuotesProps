import React from 'react'

const QuotesCard = ({quote}) => {
    console.log(quote)
  return (
   
       <div className=' text-white bg-slate-800'>
        <p className=' text-4xl mb-3'>{quote.quoteText}</p>
        <p><i>By - {quote.quoteAuthor}</i></p>
    
    </div>
  )
}

export default QuotesCard