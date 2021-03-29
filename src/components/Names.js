import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import NameItem from './NameItem'
const NAMES_QUERY = gql`
    query NamesQuery {
        name {
            name,
            address1,
            address2,
            city,
            country,
            zip_code,
            email,
            tel
        }
    }
`;

function Names() {
    return (
        <div className="ui container">
            <div className="ui header" style={{margin: '25px'}}> 
                Name List
            </div>
            <Query query={NAMES_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if(loading) return <h4>Loading...</h4>
                        if(error) console.log(error)
                        console.log(data)
                        return <div className="ui four stackable cards">
                        {
                            data.name.map(n => (
                                <div className="card">
                                    <div className="content">
                                        <div className="center aligned header"> </div>
                                        <div className="center aligned description" style={{ color: '#8B0000', }}>
                                            <span><b>{n.name}</b></span>
                                        </div>
                                    </div>
                                    <div className="extra content">
                                        <div className="center aligned author" style={{ color: '#8B0000' }}>
                                            <span> <p> {n.address1}</p></span>
                                            <span> <p> {n.address2}</p></span>
                                            <span> <p> {n.city}</p></span>
                                            <span> <p> {n.country}</p></span>
                                            <span> <p> {n.zip_code}</p></span>
                                            <span> <p> {n.email}</p></span>
                                            <span> <p> {n.tel}</p></span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    }
                }
            </Query>
        </div>
    )
}

export default Names
