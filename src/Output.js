import React from "react";

export default function MainOutput (props) {

    let theColor = true
    // color = !color

    const newFirst = props.badge.map(itme => <div>
        <div>First name: {itme.FirstName}</div>
        <div>Last name: {itme.LastName} </div>
        <div>Phone Number: {itme.number}</div>
        <div>Email: {itme.email}</div>
        <div>Born in: {itme.birth}</div>
        <div>Fav food: {itme.favFood}</div>
        <div>{itme.aboutYou}</div>
        <br/><br/>
        </div>)

    // for(let i = 0; i > props.badge.length; i++) {
    //     return props.badge[i]
    // }

    // console.log(props.badge[0].FirstName)

    return(
        <div>            
            <ol>{newFirst}</ol>
        </div>
    )
}
// style={theColor?"background-color:Blue":"background-color:Red")