import React from 'react';

export default function CardHeader({title}) {
    return (
        <header className="card-header">
            <h3>{title}</h3>
        </header>
    )
}