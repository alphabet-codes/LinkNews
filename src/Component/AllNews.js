import React, { Component, } from 'react';
import '../styles/News.css';
import {Container} from 'react-bootstrap';
import Pagination from './Pagination';
import QuickLinks from './QuickLinks';
import request from 'superagent';
import Navbar from './Navbar';
import key from '.././Config';

import NewsList from './NewsList';

const LOAD_STATE = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING'
};
const discovered = 'news discovered';
const sport = 'sport';
const business = 'business';
const URL = `https://newsapi.org/v2/everything?apiKey=${key}`
class Trending extends Component {
  state = {
    news:[],
    loadState:LOAD_STATE.LOADING,
    q: 'technology',
    totalResults: 0,
    pageSize: 5,
    currentPage: 1,
}

componentDidMount(){
  this.fetchNews(this.state.currentPage)
}
fetchNews = (page) =>{
  const url = URL;
  const {pageSize, q} = this.state;
  const option = page
  request.get(url)
  .query({ q:q, page:option, pageSize:pageSize })
  .set('Accept', 'application/json')
  .end((error, response) => {
      if (!error && response) {
          this.setState({
             news: response.body,
             loadState : LOAD_STATE.SUCCESS,
             totalResults : response.body.totalResults,
             currentPage : page
             });
      } else {
          console.log('There was an error fetching from News.org', error);
      }
  }
);
}

onChangeSport = e => {
    this.fetchNews(this.state.currentPage)
    this.setState({
      q: {sport}
    })
  }
  onChangeBusiness = e => {
    this.fetchNews(this.state.currentPage)
    this.setState({
      q: {business}
    })
  }

  onQueryChange = e => {
    this.setState({
      q: e.target.value,
    })
  }
render(){
  return (
    <div className="Trending">
      <Navbar
      onRouteChange = {this.props.onRouteChange}
      searchHandler = {()=>this.fetchNews(this.state.currentPage)}
      onQueryChange = {this.onQueryChange}
      query = {this.state.q}
       />
      <QuickLinks
sport = {this.onChangeSport}
business = {this.onChangeBusiness}
 />

{this.state.loadState === LOAD_STATE.LOADING
  ? <div className="loader"></div>
  : <News data={this.state.news} />  
}
  <Pagination
          current={this.state.currentPage}
          total={this.state.totalResults} 
          pageSize={this.state.pageSize} 
          onPageChanged={this.fetchNews}
        />
    </div>
  );
}
}


const News = ({ data }) => {
    var items = data.articles.map(articles => <NewsList key={Math.random()} article={articles}/>);
    return (
      <div className="grid">
        { items }
        <Container>
        <h6>{data.totalResults} {discovered}</h6>
        </Container>
      </div>
    )
  }
  

export default Trending;