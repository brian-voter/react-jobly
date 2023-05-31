import JoblyApi from './api';
import React, { useState, useEffect } from "react";
import SearchForm from './SearchForm'
import JobCardList from './JobCardList';
import Loading from './Loading';


/**
 * JobList
 *
 *state: jobs use to store the jobs data and isLoading status
 *
 *props: none
 *
 * RouteList => JobList =>JobCardList
 *
 *
 */

function JobList(){

  const [jobs, setJobs] = useState({
    jobData: [],
    isLoading: true
  });

  useEffect(function getJobsWhenMounted() {
    async function getJobs() {
      const allJobs = await search();
    }
    getJobs();

  }, []);

  if (jobs.isLoading) {
    return <Loading />;
  }

  async function search(searchTerm) {
    const searchedJobs = await JoblyApi.getJobs(searchTerm);
    setJobs({
      jobData: searchedJobs,
      isLoading: false
    });
  }

  return (
    <div>
    <SearchForm search={search} />
    <ul>

      <JobCardList jobs={jobs.jobData} />

    </ul>


  </div>
  )
}

export default JobList