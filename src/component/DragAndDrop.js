import React, { useRef } from 'react';


const DragAndDrop = () => {
    const imgBoxRef = useRef(null);

    const handleDragStart = () => {
        console.log("drag start");
    };

    const handleDragEnd = () => {
        console.log("drag end");
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.currentTarget.classList.add("hold");
        console.log("drag enter");
    };

    const handleDragLeave = (e) => {
        e.currentTarget.classList.remove("hold");
        console.log("drag leave");
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        console.log("drag over");
    };

    const handleDrop = (e) => {
        e.currentTarget.classList.remove("hold");
        e.currentTarget.appendChild(imgBoxRef.current);
        console.log("drop");
    };

    return (
        <div className="container">
            <div className="empty" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}></div>
            <div className="empty" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}></div>
            <div className="empty" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}></div>
            <div className="empty" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}></div>
            
            <div className="img-box" ref={imgBoxRef} draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}></div>
        </div>
    );
};

export default DragAndDrop;
