import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imgurl,newsurl}=this.props;

    return (
      <div className="card my-3" >
  <img src={!imgurl?"https://www.livemint.com/lm-img/img/2023/12/26/1600x900/3-0-97431674-iStock-834792042-0_1679787577110_1703560630288.jpg":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>
    )
  }
}
