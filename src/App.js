import React, { Component,Fragment } from 'react'

import Header from './components/Header'
import NewsList from './components/NewsList';
import Category from './components/Category';

export default class App extends Component {

  state ={
    news: []
  }



  componentDidMount(){
    this.getNews()
  }
  
  getNews = async (category='general') => {

    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=7a8e9d69843944fe921886aea591ff7b`;
    const response = await fetch(url)
    const news = await response.json()

    this.setState({
      news: news.articles
    })

  }

  render() {
    
    
    return (
      <Fragment>
          <Header
            title='News React API' 
          />
          <div className="container white news-container">
              <Category 
                category={this.getNews}
              />
              <NewsList 
                news={this.state.news}
              />
          </div>
      </Fragment>
    )
  }
}
