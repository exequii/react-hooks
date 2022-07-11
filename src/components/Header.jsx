import React, {useState, useContext} from 'react'
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    const [darkMode, setDarkMode] = useState(true);
    const color = useContext(ThemeContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const style = {
        backgroundColor: darkMode ? '#333' : '#fff',
    }

    return (
        <div style={style}>
            <h2 style={{color}}>React Hooks</h2>
            <button onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
        </div>
    )
}

export default Header