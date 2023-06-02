import React from "react";
import "./Card.css";


/**
 * JobCard
 *
 *state: none
 *
 *props: job
 *
 * JobCardList => JobCard
 */
function JobCard({ job }) {

  return (

    <div className="Card">
      <h4 className="title">{job.title}</h4>
      <h6 className="mb-2">{job.companyName}</h6>
      {job.salary && <div>Salary: ${job.salary}</div>}
      {job.equity && <div>Equity: {job.equity}</div>}
    </div>

  );

}

export default JobCard;