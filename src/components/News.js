import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my3'>
        <h2>Next.news top headlines </h2>
        <div className="row my2">
          <div className="col-md-4">
            <NewsItem title="my title" description="my description"/> 
          </div>
          <div className="col-md-4">
            <NewsItem title="my title" description="my description"/> 
          </div>
          <div className="col-md-4">
            <NewsItem title="my title" description="my description"/> 
          </div>
        </div>
      </div>
    )
  }
}

export default News
