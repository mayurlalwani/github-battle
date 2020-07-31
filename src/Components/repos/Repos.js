import React from 'react'
import PropTypes from 'prop-types';
import RepoItem from './RepoItems'

function Repos({ repos }) {

    return (
    repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
    )
}

Repos.prototypes = {
    repos: PropTypes.array.isRequired,
}

export default Repos