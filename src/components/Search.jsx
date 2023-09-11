const Search = ({search, setSearch}) => {
    return (
        <header>
            <h1>😎 EmojiSearch 😎</h1>
            <input type="text" placeholder="What emoji are you looking for ?" value={search} onChange={(event) => {setSearch(event.target.value)}} />
        </header>
    )
}

export default Search