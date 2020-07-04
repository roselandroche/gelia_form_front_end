import React from 'react';
import '../css/LogInForm.css';

export default function LogInForm () {
    return (
        <form>
            <label>Username:</label>
            <input type='text' name='name' />
            <label>Password:</label>
            <input type='text' name='password' />
            <input type='submit' value='Submit' />
        </form>
    )
}