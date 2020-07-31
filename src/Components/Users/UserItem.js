import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function UserItem(props) {
    const { avatar_url, login } = props.user
    return (
        <div className="card text-center">
            <img src={avatar_url} className="round-img" alt="avatar" style={{ width: '60px'}} />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} class="btn btn-dark btn-sm my-1">More</Link>
            </div>
        </div>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
 
export default UserItem;