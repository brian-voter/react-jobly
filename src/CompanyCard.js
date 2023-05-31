import React, { useState, useEffect } from "react";
import "./CompanyCard.css";
import { Link } from "react-router-dom"

/**
 * CompanyCard
 *
 * prop: company
 *
 * state: none
 *
 *  CompanyList => CompanyCard
 *
 *
 */

function CompanyCard({company}){

  return (
    <Link to={`/companies/${company.handle}`}>
    <div className="CompanyCard">
      <ul>
        <li>{company.name}</li>
        <li>{company.description}</li>
        <img src={company.logoUrl}></img>
      </ul>
    </div>
    </Link>
  )

}

export default CompanyCard