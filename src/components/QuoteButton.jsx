const QuoteButton = ({getNewValues, stylesButton}) => {
  return (
    <button onClick={getNewValues} style={stylesButton}>
        <i className='bx bx-caret-right-circle'></i>
    </button>
  )
}

export default QuoteButton
