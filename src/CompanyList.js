import React, { useState, useEffect } from "react";
import JoblyApi from "./api.js";
import SearchForm from './SearchForm';
import CompanyCard from './CompanyCard'




function CompanyList(){


  const [companies,setCompanies] = useState({
    companyData: [],
    isLoading: true
  })

useEffect(function getCompaniesWhenMounted(){
  async function getCompanies(){
    const allCompanies = await JoblyApi.getCompanies();
    setCompanies({
      companyData: allCompanies,
      isLoading: false
    });
  }
  getCompanies();
},[]);



  if (companies.isLoading){
    return <i>Loading...</i>
  }



  async function search(searchTerm){
    const searchedCompanies = await JoblyApi.searchCompanies(searchTerm);
    setCompanies({
      companyData: searchedCompanies,
      isLoading: false
    });
  }



  return (
    <div>
      <SearchForm search={search}/>
      <ul>
        {companies.companyData.map( company =>
        <li key={company.handle}>
          <CompanyCard  company={company} />
          </li>)}
      </ul>


    </div>
  )
}

export default CompanyList