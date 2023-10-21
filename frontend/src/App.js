import './App.css'
import { useEffect, useState } from "react";
import Header from "./components/Header";
import IntensityChart from "./components/IntensityChart";
import axios from "axios";
import LikelihoodChart from "./components/LikelihoodChart";
import SectorChart from "./components/SectorChart ";
import RegionChart from "./components/RegionChart";
import RelevanceBubbleChart from "./components/RelevanceBubbleChart ";
import CountryChart from "./components/CountryChart";
import TopicsPolarAreaChart from "./components/TopicChart";



function App() {

  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchData=async ()=>{
      const API_URL="http://localhost:4000/";
      try{
        const response=await axios.get(`${API_URL}api/v1/data`);
        setData(response.data.data);
       
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  },[]);



  return (
    <>
    <Header />

    <div className="div1">
      <SectorChart data={data} />
      <RegionChart data={data}  />
    </div>


    <IntensityChart data={data}/>
    <LikelihoodChart data={data} />
    
    
    <RelevanceBubbleChart data={data} />
    <CountryChart data={data} />
    <TopicsPolarAreaChart data={data} />
    </>
  );
}

export default App;
