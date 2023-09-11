import axios from "axios"
import { useEffect, useState } from "react"
import Line from "./Line"

const EmojisList = ({search}) => {

    const [data, setData] = useState([])

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1604577176/react-new-exercices/EmojiSearch/emojiList_mar8cs.json`)
            setData(response.data)
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }
    };
    fetchData();
    })

    return (
        <ul>
            {data.map((emoji, index) => {
                console.log(emoji)
                return (
                    <Line key={index} emoji={emoji} />
                )
            })}            
        </ul>
    )

}

export default EmojisList