import React, { useState, useEffect } from "react";
import "./CompanyCard.css";

function CompanyCard({company}){

  return (
    <div className="CompanyCard">
      <ul>
        <li>{company.name}</li>
        <li>{company.description}</li>
        <img src={company.logoUrl}></img>
      </ul>
    </div>
  )

}

export default CompanyCard