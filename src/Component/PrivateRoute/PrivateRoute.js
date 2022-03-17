import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { selectUser } from '../../feature/userSlice'

const PrivateRoute = ({ children, ...rest }) => {
    const user=useSelector(selectUser)
    return (
        <Route
            {...rest}

            render={({ location }) => user ? children : <Redirect

                to={{
                    pathname: "/login",
                    state: { from: location }
                }}

            ></Redirect>}

        >

        </Route>
    );
};

export default PrivateRoute;