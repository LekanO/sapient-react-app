import React from 'react'

function NameItem(name) {
        return (
            <div className="card">
            <div className="content">
                <div className="center aligned header"> </div>
                <div className="center aligned description" style={{ color: '#8B0000', }}>
                    <span><b>{name.name}</b></span>
                </div>
            </div>
            <div className="extra content">
                <div className="center aligned author" style={{ color: '#8B0000' }}>
                <span> <p> {name.name}</p></span>
                </div>
            </div>
        </div>
        )
    }

export default NameItem
