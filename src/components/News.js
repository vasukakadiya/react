import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

 article=[];

  constructor(){
    super();
   
  
    this.state = {
      articles:this.article,
      loading:true,
      page:1,
      totalart:""
    };
  }

  async componentDidMount()
  {
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c146829594884f12b627696990485449&pageSize=20&page=1";
    let data=await fetch(url);
    let parseData=await data.json();

    this.setState({articles:parseData.articles,totalart:parseData.totalResults})
  }

   next =async ()=>
  {
    if(this.state.page<Math.ceil(this.state.totalart/20))
    {

    

    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c146829594884f12b627696990485449&pageSize=20&page=${this.state.page+1}`;
    let data=await fetch(url);
    let parseData=await data.json();

    this.setState({articles:parseData.articles})
    console.log(this.state.page)
    console.log(Math.ceil(this.state.totalart/20))


    this.setState({
      page:this.state.page+1
      
    });
    console.log(this.state.page)
  }else{
    console.log("nooooo")

  }

  }


  prev =async ()=>
  {
   

    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c146829594884f12b627696990485449&pageSize=20&page=${this.state.page}`;
    let data=await fetch(url);
    let parseData=await data.json();

    this.setState({articles:parseData.articles})
    console.log(this.state.page)

    this.setState({
      page:this.state.page-1
    });
    console.log(this.state.page)


  }

  render() {


    
    
    return (
      <div className='container my-3'>
       <h2>NewsBlog - Top Business Headlines</h2>
       <div className='row'>

        {this.state.articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>
            <NewsItem  title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url}></NewsItem>
          </div>

        })}
        

       

       </div>
       <div className="container d-flex justify-content-between" >
        <button disabled={this.state.page===1}className="btn btn-dark" onClick={this.prev}>&larr; Previous</button>
        <button disabled={this.state.page===Math.ceil(this.state.totalart/20)} className="btn btn-dark" onClick={this.next}>Next &rarr;</button>

       </div>
  

      </div>
    )
  }
}
