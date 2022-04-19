import queryString from 'query-string'
import React, { useEffect, useState } from 'react'
import { APIURL, SEARCHAPI } from './apis/apis'
import Footer from './components/Footer'
import HeaderSearch from './components/HeaderSearch'
import Movie from './components/Movie'
import Pagination from './components/Pagination'

function App() {
  const [movies, setMovies] = useState([])
  const [pagination, setPagination] = useState({
    page: 1,
    total_pages: 10,
    total_results: 30
  })
  const [filters, setFilters] = useState({
    page: 1,
    query: ''
  })

  const fetchData = async (dataURL) => {
    const dataJson = await fetch(dataURL)
    const data = await dataJson.json()
    setMovies(data.results)
    setPagination({
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results
    })
  }

  useEffect(() => {
    try {
      const paramString = queryString.stringify(filters)
      if (filters.query === '') {
        fetchData(APIURL + paramString)
      }
      else {
        fetchData(SEARCHAPI + paramString)
      }
    }
    catch (err) {
      console.log("Failed to fetch data: ", err.message)
    }
  }, [filters])

  const handleSearch = (input) => {
    if (input) {
      fetchData(SEARCHAPI + 'query=' + input)
      setFilters({ page: 1, query: input })
    }
  }

  const handleClearSearch = () => {
    fetchData(APIURL)
    setFilters({ page: 1, query: '' })
  }

  const handlePageChange = (newPage) => {
    setFilters({ ...filters, page: newPage })
  }

  return (
    <div className="app">
      <HeaderSearch onSearch={handleSearch} onClearSearch={handleClearSearch} />
      <div className="movie-container">
        {movies < 0 || movies.map(movie => <Movie key={movie.id} {...movie} />)}
      </div>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <Footer />
    </div>
  );
}

export default App;
