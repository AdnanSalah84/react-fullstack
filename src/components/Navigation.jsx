import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ConnectedUsernameDisplay } from './UsernameDisplay'
import React from 'react';
import * as mutations from '../store/mutations';

const Navigation = ({id, authenticated}) => (
    <div>
        <Link to='/dashboard'>
            <h1>My Application</h1>
        </Link>
        { authenticated ?
            <h4>
                Welcome, <ConnectedUsernameDisplay id={id}/>!
            </h4>
            : null
        }
    </div>

)

const mapStateToProps = ({session})=>({
    id:session.id,
    authenticated:session.authenticated == mutations.AUTHENTICATED
});

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);

// export const ConnectedNavigation = connect(state =>state)(Navigation);