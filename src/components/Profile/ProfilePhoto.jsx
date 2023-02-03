import React from 'react'
import imag from "./Capture.png";

const ProfilePhoto = () => {
  return (
    <div>
      <h1>About me </h1>
      <p>Femme ingénieur chercheuse responsable,
         motivée et rigoureuses, passionnée par les
         nouvelles technologies avec des bonnes
         capacités d’analyse et de synthèse. Active
         dans la vie associative en participant aux
         plusieurs événements et projets</p>
      <img className="avatar" src={imag} alt="sahar-amami" />
    </div>
  )
}

export default ProfilePhoto