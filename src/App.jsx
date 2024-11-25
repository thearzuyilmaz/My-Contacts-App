import React from 'react';
import './index.css';
import Card from './Card';
import contacts from './contacts';
import Avatar from './Avatar';

function createCard(person){
  return (
    <Card
    key = {person.id}
    name = {person.name}
    img = {person.imgURL}
    tel = {person.phone} 
    email = {person.email}
    />
  );
}

function App(){

    return (<div>
    
    <Avatar img = "https://oyster.ignimgs.com/mediawiki/apis.ign.com/avatar-the-last-airbender/1/17/Korra_img.jpg?width=325" />

    <h1 className="heading">My Contacts</h1>
    {contacts.map(createCard)}
  </div>);
}
export default App;



  