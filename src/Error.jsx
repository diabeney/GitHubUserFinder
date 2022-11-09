import React from 'react';
import { override } from './components/Loader';

function Error404({message}) {
    return (
        <div style={override}>
            <h1>{message}</h1>
        </div>
    )
}

export default Error404