
import React,{useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from "react-router-dom";
import specializationService from "../services/specialization";
import { Link } from 'react-router-dom';

function Specialization() {
    const back=()=>{
        window.location.replace(`/main`)
    }
    const [ data, setData] = useState([])
    const {uid}=useParams()
    useEffect(() => {
      async function fetchData() {
        if (uid) {
          const code = uid
          // console.log(code)
          const pdata = {code}
          console.log(pdata)
          const studentData = await specializationService.getStudentDetail(pdata)
          setData(studentData)
          console.log(studentData)
        }
      }
      fetchData()
    }, [])
    return(
      <>
      <Table striped bordered hover>
    <thead>
      <tr>
        <th>Student Name</th>
        {/* <th>Specialization</th> */}
        <th>Domain</th>
      </tr>
    </thead>
    <tbody>
      {data.map(i=>{
          return(
              <tr>
        <td>{i.first_name}</td>
        <td>{i.domain}</td>
        {/* <td>{i.specialization.name}</td> */}

      </tr>
          )
      })}
      
      
    </tbody>
  </Table>
  <Link onClick={back}>Back</Link>
  </>
  )
}

export default Specialization;