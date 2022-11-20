import QuoteButton from "./QuoteButton"

const QuoteBox = ({quote, getNewValues, stylesButton}) => {
  return (
    <article className="quote__box">
        <p><i className='bx bxs-quote-alt-left' ></i>{quote.quote}</p>
        <h4>{quote.author}</h4>

        <section>
            <QuoteButton getNewValues={getNewValues} stylesButton={stylesButton}/>
        </section>
    </article>
  )
}

export default QuoteBox