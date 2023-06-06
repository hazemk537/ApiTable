import { Table } from 'antd';
import {useState,useEffect} from 'react'
import * as uuid from 'uuid'//new syntax
const columns = [
  {
    title: 'Recruiter',
    dataIndex: 'recruiter',
    width: 150,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    width: 150,
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
];


 function getNewJobs(Jobs){
  let newJobs=Jobs.map((job)=>{
    return {'location':job.location,
    'recruiter':job.recruiter.title,
    'salary':job.salaryMax
    ,'id':uuid.v4()

  }
  })

  return newJobs
}
// console.log(typeof(Jobs))

    
function  AntTable (){
  //we should have initial state in this example notarray.map errors or
  // use conditional rendering on the Table component
  const [Jobs,setJobs]=useState()
  useEffect(()=>{
    fetch('https://api.placeholderjson.dev/job-listings')
    .then(response=>response.json())
    .then(Data=>getNewJobs(Data))
    .then(newJobs=>setJobs(newJobs))




},[])//TODO run twice




  return (
    <div> 
      {Jobs && <Table
    columns={columns}
    dataSource={Jobs}
    pagination={{
      pageSize: 50,
    }}
    scroll={{
      y: 240,
    }}
  />}
  
  </div>
 
  )
}


export default AntTable

