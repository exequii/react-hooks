import React, {useState, useReducer, useMemo , useRef, useCallback} from 'react'
import Card from '../components/Card';
import Search from '../components/Search';
import useFetch from '../hooks/useFetch';
import "../styles/Cards.css"

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_FAVORITE':
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                }
            case 'REMOVE_FAVORITE':
                return {
                    ...state,
                    favorites: state.favorites.filter(favorite => favorite.name !== action.payload.name)
                }
            default:
                return state
        }
}



const ListCards = () => {

    const characters = useFetch('https://rickandmortyapi.com/api/character/');
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null)

    const filteredCharacters = useMemo(() => {
        return characters.filter(character => {
            return character.name.toLowerCase().includes(search.toLowerCase())
        })
    }, [characters, search])

    const handleSearch = useCallback(() => setSearch(searchInput.current.value), [searchInput]);
    
    const handleClick = (favorite) => dispatch({type: 'ADD_FAVORITE', payload: favorite})

    const handleRemove = (favorite) => dispatch({type: 'REMOVE_FAVORITE', payload: favorite})
      

  return (
    <div>
        <div>
            <h2>Favorites</h2>
            <div className='list-cards'>
            {
                 favorites.favorites.map(favorite => (
                     <Card key={favorite.id} character={favorite} handleRemove={handleRemove}/>
                 ))
            }
            </div>
        </div>

        <div>
            <h2>Lista de Caracteres</h2>
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch}></Search>
            <div className='list-cards'>
            {
                filteredCharacters.map(character => (
                    <Card key={character.id} character={character} handleClick={handleClick}/>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default ListCards