import React, { useState, useContext } from 'react'
import GithubContext from '../../Context/Github/githubContext'
import AlertContext from '../../Context/alert/alertContext'

function Search() {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    const [ text, setText ] = useState()

    function handleChange (e) {
        setText(e.target.value)
    }

   function onSubmit(e) {
        e.preventDefault()
        if(text === ''){
            alertContext.setAlert("Please enter something", 'light')
        }
        else{
            githubContext.searchUsers(text)
            setText('')
        }
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit} style={{ display:'flex', flexDirection:'column',alignItems:'center' }}>
                <input type="text" name="text" placeholder="Search Users..." value={text} onChange={handleChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />

            {
                githubContext.users.length > 0 && 
            <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
            }
            </form>

        </div>
    )
}

export default Search