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

    <div /*className="JobCardList"*/>
        {jobs.map(job => <JobCard key={job.id} job={job}/>)}
    </div>

  )

}

export default JobCardList
