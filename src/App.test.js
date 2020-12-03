import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { fireEvent, render} from'@testing-library/react';
import'@testing-library/jest-dom/extend-expect';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test ('addTodo', () => { //tässä testataan toiminnallisuutta (functionality) "addTodo"
  const {container, getByText, getByPlaceholderText} = render(<App />);
  /*
  renderöidään komponentti App App.js tiedostosta
  attribuutteina container (sisältää ko. komponentin HTML presentaation)
  getText (hakee määriteltyä tekstiä)
  getPlaceholderText (hakee määriteltyä tekstiä, 
    joka on määritelty placeholderin arvoksi)
  */

  const desc = getByPlaceholderText('Description');
  fireEvent.change(desc, {target: {value: 'Lunch with Elsa'}})
/* 
fireEvent on metodi, joka laukaisee määritellyn tapahtuman(event= tässä change
  =kun halutaan muuuttaa arvoa) Sille annetaan target (tässä desc:n value 'Lunch
  with Elsa') ja muuttaa siis desc:n valuen annetuksi 'Lunch with Elsa' 
*/
  const date = getByPlaceholderText('Date');
  fireEvent.change(date, {target: {value: '17.1.2021'}})

  const button = getByText('Add'); /* tässä siis getText hakee buttonin, jonka 
  määrittelyistä löytyy tekstiä, joka matchaa sanaan 'Add' 
  */
  fireEvent.click(button); /* tässä fireEvent laukaisee tapahtuman click */

expect(container).toHaveTextContent('Lunch with Elsa');
/* tässä asetetaan millä "tarkistetaan" testin tulos, eli jos containerin 
(sisältää siis komponentin App palauttaman HTML sisällön?)
sisältö vastaa asetettua tekstiä 'Lunch with Elsa' Testi on onnistunut
*/

expect (getByText('Clear')).not.toHaveTextContent();

})

/* test ('deleteTodos', () => {

  const {container, getByText} = render(<App />);

  const button = getByText('Clear');
  fireEvent.click(button);

  expect (container).not.toHaveTextContent();

}) */