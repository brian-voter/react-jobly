import React, { useState, useEffect } from "react";
import "./JobCard.css";


/**
 * JobCard
 *
 *state: none
 *
 *props: job
 *
 * JobCardList => JobCard
 *
 *
 */

function JobCard({job}){

  return (

    <div className="jobCard">
      <ul>
        <li>{job.title}</li>
        <li>{job.companyName}</li>
       <li>{job.salary}</li>
       <li>{job.equity}</li>
      </ul>
    </div>

  )

}

export default JobCard