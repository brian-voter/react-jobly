import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";


function CompanyDetail() {
  const { company: companyHandle } = useParams();

  const [data, setData] = useState({
    company: null,
    isLoading: true
  });

  useEffect(function getCompanyDataWhenMounted() {
    async function getCompanyData() {
      const company = await JoblyApi.getCompany(companyHandle);
      setData({
        company,
        isLoading: false
      });
    }
    getCompanyData();
  }, []);

  if (data.isLoading) {
    return <i>Loading...</i>;
  }

  return (
    <div>
      <h1>{data.company.name}</h1>
      <p>{data.company.description}</p>
      <ul>
        {data.company.jobs.map(job =>
          <li key={job.id}>{job.title}</li> //TODO: turn this into JobCards
        )}
      </ul>
    </div>
  );
}

export default CompanyDetail;