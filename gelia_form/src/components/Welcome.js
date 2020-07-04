import React from 'react';
import LogInForm from './LogInForm';
import '../css/Welcome.css';

export default function Welcome() {
    return (
        <section>
            <h3>Welcome! Please log in to continue...</h3>
            <LogInForm />
        </section>
    )
}