const Search = ({search, setSearch, handleEmoji}) => {
    return (
        <header>
            <h1>😎 EmojiSearch 😎</h1>
            <input type="text" placeholder="What emoji are you looking for ?" value={search} onChange={handleEmoji} />
        </header>
    )
}

export default Search