import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

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
function CompanyCard({ company }) {
  return (
    <Link className="text-decoration-none text-reset" to={`/companies/${company.handle}`}>
      <div className="Card">
        <div className="d-flex justify-content-between">
          <h4 className="title">{company.name}</h4>
          {company.logoUrl &&
            <img
              width="75px"
              height="33px"
              src={company.logoUrl}
              alt={company.name}>
            </img>}
        </div>
        <div className="mt-3">{company.description}</div>
      </div>
    </Link>
  );

}

export default CompanyCard;