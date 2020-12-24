import React,{useState} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people,setPeople] = useState([
    {
        name:"Aniket Pal",
        url:"https://aniket.live/img/aniket.jpeg"
    },
    {
        name:"Cristiano Ronaldo",
        url:"https://i.guim.co.uk/img/media/6322b56e3c850027facfb00dd8178376b38900ed/0_182_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a3d60cc79f9ede018ec20e4d979eb5dd"
    },
    {
        name:"Sumana Basu",
        url: "https://sumana.live/img/sumana.jpeg"
    }
]);

    const swiped = (direction,nameToDelete) => {
        console.log("removing:" +nameToDelete);
    };

    const outOfFrame = (name) =>{
        console.log(name + "left the screen!");
    };



    return (
        <div className="tinderCards">

        <div className="tinderCards__cardContainer">
        {people.map((person)=>(
            <TinderCard
                className="swipe"
                key = {person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir,person.name)}
                onCardLeftScreen={() =>outOfFrame(person.name)}
            >

              <div style={{backgroundImage: `url(${person.url})`}} className="card">
                  <h3>{person.name}</h3>
              </div>

            </TinderCard>
        ))} 
        </div>   
        </div>
    );
}

export default TinderCards;
