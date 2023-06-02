import React, { useState, useEffect } from "react";
import JoblyApi from "./api.js";
import SearchForm from './SearchForm';
import CompanyCard from './CompanyCard';
import Loading from "./Loading.js";
import Paginator from "./Paginator.js";

/**
 * CompanyList
 *
 *state: companies use to store company data and isLoading status
 *
 * RoutesList => CompanyList => CompanyCard, SearchForm
 *
 *
 */
function CompanyList() {

  const [companies, setCompanies] = useState({
    companyData: [],
    isLoading: true
  });

  useEffect(function getCompaniesWhenMounted() {
    async function getCompanies() {
      await search();
    }
    getCompanies();
  }, []);

  if (companies.isLoading) {
    return <Loading />;
  }

  async function search(searchTerm) {
    const searchedCompanies = await JoblyApi.getCompanies(searchTerm);
    setCompanies({
      companyData: searchedCompanies,
      isLoading: false
    });
  }

  const cards = companies.companyData.map(company =>
    <CompanyCard key={company.handle} company={company} />);

  return (
    <div>
      <h1>Companies</h1>
      <SearchForm search={search} />
      {<Paginator items={cards} />}
    </div>
  );
}

export default CompanyList;