import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    const users = useLoaderData()
    return (
        <div>
            {users.length}
            <div>
                {
                    users.map(user => <p> {user.name} : {user.email}</p>)
                }
            </div>
        </div>
        
    );
};

export default User;