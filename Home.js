import React from 'react';

function Home(props) {
    return (
        <div>
            <h1>WELCOME TO TRAINING-{props.name} {props.age} {props.obj.Department} - {props.obj.College} {props.Arr.map((data)=> {return(<li>{data}</li>)})}</h1>
            </div>
    );
}

export default Home;