import React from 'react';

export default function Card({children}) {
    return (
        <section className="card">
            <p>Voy a romperlo</p>
            {children}
        </section>
    )
}