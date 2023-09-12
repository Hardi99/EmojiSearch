import '../App.css'
function Line({emoji, handleClickEmoji}) {
  return (
    <li onClick={handleClickEmoji}>
      {emoji.symbol} {emoji.title}
      <span>Click to copy !</span>
    </li>
  )
}

export default Line
