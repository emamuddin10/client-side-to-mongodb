import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUsers = useLoaderData()

    const handleUpdateData = event =>{
        event.preventDefault()
        const form = event.target 
        const name = form.name.value
        const email = form.email.value

        const user = {name,email}
        console.log(user)
    }
    return (
        <div>
            <p>The Updated Information is : {loadedUsers.name}</p>
            <form onSubmit={handleUpdateData}>
                <input type="text" name="name" id=""  defaultValue={loadedUsers?.name}/>
                <br />
                <input type="email" name="email" id="" defaultValue={loadedUsers?.email} />
                <br />
                <input type="submit" value="Update Profile" />
            </form>
        </div>
    );
};

export default Update;