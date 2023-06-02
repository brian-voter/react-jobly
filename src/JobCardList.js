import React from "react";
import "./JobCardList.css";
import JobCard from './JobCard';
import Paginator from "./Paginator";

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

function JobCardList({ jobs }) {

  const jobCards = jobs.map(job => <JobCard key={job.id} job={job} />);

  return <Paginator items={jobCards} />;

}

export default JobCardList;
