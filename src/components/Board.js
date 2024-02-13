import React from "react";

import Writing from './Writing';

export default function Board(props) {
    const writings = props.writings;

    return (
        <div className='container mt-5' style={{paddingBottom:'300px'}}>
            {writings.map(writing => (
                <Writing
                    writing={writing}>    
                </Writing> 
            ))}
        </div>

    )
    
}   