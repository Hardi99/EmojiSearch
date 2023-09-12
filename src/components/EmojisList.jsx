import Line from "./Line"

const EmojisList = ({emojiList, search}) => {

    return (
        <ul>
            {emojiList.map((emoji, index) => {
                return emoji.keywords.includes(search) ? (
                    <Line key={index} emoji={emoji} />
                ) : null
            })}            
        </ul>
    )
}

export default EmojisList