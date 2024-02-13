import React from "react";

export default function Writing(props) {
    const writing = props.writing;

    return (
        <div>
            <p>{writing.title}</p>
            <p>{writing.author}</p>
            <p>{writing.content}</p>
            <p>{writing.updatedAt}</p>
        </div>
    )

}   
