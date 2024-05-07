import React from 'react'

const QuotesCard = ({quote}) => {
  return (
    <div>
        <p>{quote.quoteText}</p>
        <p>{quote.quoteAuthor}</p>
    </div>
  )
}

export default QuotesCard