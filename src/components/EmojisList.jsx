import Line from "./Line"

const EmojisList = ({emojiList, search}) => {

    const results = []

    for (let i = 0; i < emojiList.length; i++) {
        if(emojiList[i].keywords.includes(search)) {
            results.push(emojiList[i])
        }
    }

    return (
        <ul>
            {results.map((emoji, index) => {
                // C'est la fonction handleClikEmoji qui permet de copier un emoji lors d'un event click
                const handleClickEmoji = () => {
                    navigator.clipboard.writeText(emoji.symbol)
                }
                return index <= 19 && emoji.keywords.includes(search) ? (
                    <Line key={index} emoji={emoji} handleClickEmoji={handleClickEmoji} />
                ) : null
            })}            
        </ul>
    )
}

export default EmojisList