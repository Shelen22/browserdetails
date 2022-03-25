import React, { useEffect, useState } from "react";
import axios from "axios";

export const BrowserDetails = () => {
  const [details, setDetails] = useState({});
  const [ visit , setVisit ] = useState({})

  useEffect(() => {
    getDetails();
    Visitors()
  }, []);

  const getDetails = async () => {
    const { data } = await axios.get(
      `https://api.apicagent.com/?ua=Mozilla/5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_5)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/89.0.4389.114%20Safari/537.36`
    );
    setDetails(data);
};
const Visitors = async () => {
    const { data } = await axios.get(
      `https://api.countapi.xyz/hit/shailendra/visits`
    );
    setVisit(data);
};
 
  return (
  <div className = "mainpage">
    <h1>Browser Details</h1>
    <div>
    <h2>Browser Family :- {details.browser_family}</h2>
     <div>
         <h3>Client Details</h3>
         <p> Engine : {details?.client?.engine}</p>
         <p> Name : {details?.client?.name}</p>
         <p> Type : {details?.client?.type}</p>
         <p>Version : {details?.client?.version}</p  >
     </div>
     <hr />
     <div>
         <h3>Device</h3>
         <p>Brand : {details?.device?.brand}</p>
         <p>Model : {details?.device?.model}</p>
         <p>Type : {details?.device?.type}</p>
     </div>
     <hr />
     <h2>OS family :- {details.os_family}</h2>
     <div>
         <h3>OS</h3>
         <p>Name : {details?.os?.name}</p>
         <p>Platform : {details?.os?.platform}</p>
         <p>Version : {details?.os?.version}</p>
     </div>
     </div>
      <div className="visit"> Number of people Visited : &nbsp;<div style= {{color: 'white', fontWeight:"bold"}}>{visit.value}</div></div>
  </div>
  )
};
