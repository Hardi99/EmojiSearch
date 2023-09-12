import '../App.css'
function Line({emoji}) {

  return (
    <li>
      {emoji.symbol} {emoji.title}
      <span>Click to copy !</span>
    </li>
  )
}

export default Line
