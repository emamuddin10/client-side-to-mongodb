import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {

    const users = useLoaderData()
    const handleDeleteUser = _id =>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deleteCount > 0){
                alert('deleted document successfull')
            }
            // else{
            //     alert('0 document deleted')
            // }
        })
    }


    return (
        <div>
            {users.length}
            <div>
                {
                    users.map(user => <p> {user.name} : {user.email}
                    <button onClick={()=>handleDeleteUser(user._id)}>Delete</button>
                    </p>)
                }
            </div>
        </div>
        
    );
};

export default User;