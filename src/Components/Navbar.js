import React from 'react';
import '../index.css'

function Navbar(){
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'Python']
    return (
        <ul className='flex-center'>
        {languages.map((language) => (
            <li key={language}>
                <button className='btn-clear nav-link'>{language}</button>
            </li>
        ))}
        </ul>

    )

}

export default Navbar