import { useEffect, useState } from "react"
import Line from "./Line"
import { emojiList } from "../assets/emojiList"

const EmojisList = ({search}) => {

    return (
        <ul>
            {emojiList.map((emoji, index) => {
                console.log(emoji)
                emoji.keywords.includes(search) ?
                (
                    <Line key={index} emoji={emoji} />
                ) : null
            })}            
        </ul>
    )
}

export default EmojisList