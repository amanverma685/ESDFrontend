import React,{useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import { Link, useParams } from "react-router-dom";
import domainService from "../services/domain";

function Domain() {
    const back=()=>{
        window.location.replace(`/main`)
    }
    const [ data, setData] = useState([])
    const {uid}=useParams()
    useEffect(() => {
      async function fetchData() {
        if (uid) {
          const domain = uid
          const pdata = {domain}
          // console.log(pdata)
          const studentData = await domainService.getStudent(pdata)
          setData(studentData)
          console.log(studentData)
        }
      }
      fetchData()
    }, [])


    // const data=[
    //     {
    //         "domain_id":1,
    //         "specialization_id":1,
    //         "student_name":"ayush",
    //         "specialization":"ai",
    //         "domain":"mtech cse"
    //     },
    //     {
    //         "domain_id":2,
    //         "specialization_id":2,
    //         "student_name":"yash",
    //         "specialization":"ml",
    //         "domain":"imtech"
    //     },
    //     {
    //         "domain_id":3,
    //         "specialization_id":3,
    //         "student_name":"akshat",
    //         "specialization":"nlp",
    //         "domain":"mtech ece"
    //     },
    // ]
    // const {uid}=useParams()
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

export default Domain;