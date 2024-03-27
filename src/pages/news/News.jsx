import React,{useEffect,useState} from 'react'
import Background from "../../components/designs/Background";
import Newscard from './Newscard';
import { Grid } from '@mui/material';
import Footer from '../../components/footer/Footer';



function News() {
    const[news,setNews]=useState([])
  
    const getNews =()=>{
        fetch(" https://newsapi.org/v2/everything?q=AWS%20cloud%20computing&language=en&sortBy=popularity&pageSize=12&apiKey=9c2fed43a49b437da4652d5f6515109d")
        .then(res=>res.json())
        .then(json=>setNews(json.articles))
    }

    useEffect(()=>{
        getNews()
    },[])


  return (
    <div style={{ position: "relative", width: "100%" }}>
    <Background data="event" />
    <div style={{ position: "absolute", justifyContent: 'center', width: '100%' }}>
      <h3 className="animate-charcter" style={{ display: "flex", justifyContent: 'center' }}>Current cloud news</h3>
     
      <section style={{ marginTop: "80px" }}>
  <Grid container spacing={2} justifyContent="center">
    {news.map((data, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Newscard data={data} />
      </Grid>
    ))}
  </Grid>
</section>
<section style={{marginTop:"150px"}}>
        <Footer/>
      </section>




     
       </div>
      </div>
  )
}

export default News