
import React from 'react';
import ReactDOM from 'react-dom';

class Person extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
       <>
       <h1>Hello {this.props.name}</h1>
       <p>{this.props.proffesion}</p>
       </>


     )
   }
 }

 //const kasia = new Person({name: "Katarzyna"});



document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(
    <>
    <h1>Łukasz</h1>
    <h2>Gosia</h2>
     <Person name="Katarzyna" proffesion={"budowlaniec"}/>
      <Person name="Wiktoria" proffesion={"grafik"}/>
      <Person name="Piotr" proffesion={"filmowiec"}/>
    </>,
    document.querySelector("#app")
  )

 })
