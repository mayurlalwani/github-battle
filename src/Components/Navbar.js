import React, { useState, useEffect } from 'react';
import '../index.css'
import { fetchPopularRepos } from '../utils/api'

function Navbar(){
    const [selectedLanguage, setSelectedLanguage] = useState('All')
    const [repos, setRepos] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        updateLanguage(selectedLanguage)
        fetchPopularRepos(selectedLanguage)
            .then((repos) => {
                setRepos(repos)
                setError(null)
            })
            .catch(() => {
                console.warn('Error fetching repos: ', error)

            setError(`There was an error fetching the repositories.`)
        })
    }, [updateLanguage, selectedLanguage, error])

    function updateLanguage(language){
        setSelectedLanguage(language)
    }

    function isLoading(){
        return !repos[selectedLanguage] && error === null
    }

    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'Python']
    return (
        <>
        <ul className='flex-center'>
        {languages.map((language) => (
            <li key={language}>
                <button 
                    className='btn-clear nav-link'
                    style={language === selectedLanguage ? { color: 'rgb(187,46,31)' } : null}
                    onClick={updateLanguage(language)}>{language}</button>
            </li>
        ))}
        </ul>

        {isLoading() && <p>Loading</p>}

        {error && <p>{error}</p>}

        {repos[selectedLanguage] && <pre>{JSON.stringify(repos[selectedLanguage], null, 2)}</pre>}
        </>
    )

}

export default Navbar