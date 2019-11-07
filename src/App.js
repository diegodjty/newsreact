import React, { Component } from 'react'

export default class App extends Component {

  state ={
    news: []
  }



  componentDidMount(){
    this.getNews()
  }
  
  getNews = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7a8e9d69843944fe921886aea591ff7b`;
    const response = await fetch(url)
    const news = await response.json()

    this.setState({
      news: news.articles
    })

  }

  render() {
    
    
    return (
      <div>
        <h1>News</h1>
      </div>
    )
  }
}
