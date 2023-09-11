import '../App.css'
function Line({emoji}) {

  return (
    <span> {emoji.symbol} {emoji.title} </span>
  )
}

export default Line
