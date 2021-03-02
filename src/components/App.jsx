import React, { useState } from 'react';
import ReservationsContainer from './ReservationsContainer.jsx';
import stockPhoto from '../../assets/background-photo.jpg';
 
const App = () => {
 const background = {
     backgroundImage: `url(${stockPhoto})`
 }
 	return (
		<div style = {background} > 
        <ReservationsContainer  />
        </div>
	);
}
export default App;