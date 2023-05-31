import React, { useState, useEffect } from "react";
import "./JobCardList.css";
import JobCard from './JobCard'

/**
 * JobCardList
 *
 *state: none
 *
 *props: jobs contains all the jobs listed
 *
 * JobList, companyDetail => JobCardList,  => JobCard
 *
 *
 */

function JobCardList({jobs}){

  return (

    <div className="JobCardList">
      <ul>
        {jobs.map(job => <li><JobCard job={job}/></li>)}
      </ul>

    </div>

  )

}

export default JobCardList
