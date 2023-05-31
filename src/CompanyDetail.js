import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import Loading from "./Loading";



/**
 * CompanyDetail
 *
 *state: data use to store company data and isLoading status
 *
 * useParam: uses the companyHandle to get the data for the company
 *
 * RoutesList => CompanyDetail => JobCardList
 *
 *
 */
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
    return <Loading />;
  }

  return (
    <div>
      <h1>{data.company.name}</h1>
      <p>{data.company.description}</p>
      <ul>
       <JobCardList jobs={data.company.jobs}/>
      </ul>
    </div>
  );
}

export default CompanyDetail;