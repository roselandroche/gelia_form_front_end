import React from 'react';

export default function LogInForm () {
    return (
        <form>
            <label>
                Username: 
                <input type='text' name='name' />
            </label>
            <label>
                Password: 
                <input type='text' name='password' />
            </label>
            <input type='submit' value='Submit' />
        </form>
    )
}