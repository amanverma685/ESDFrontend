// import React from "react";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import studentService from '../services/student';
import React,{useEffect, useState} from 'react';

function Main() {
       
    const [ data, setData] = useState([])
    const [updatedData,setUpdatedData]= useState([]);
    const [selectedValue,setSelectedValue]= useState("All");

    const handleDropdownChange = () => {

    };
  

    useEffect(() => {
      fetchData()
    }, []);

    async function fetchData() {
       
      // console.log(pdata)
      const studentData = await studentService.getStudentDetails();
      setData(studentData)
      setUpdatedData(studentData);
      console.log(studentData) ;

  }

    return(
        <>
        <div className='container'>
        <div>
          <br>
          </br>
        </div>
        <select value={selectedValue} onChange={handleDropdownChange}>
        <option value="All">All</option>
        <option value="CSE">Computer Science Engineering</option>
        <option value="ECE">ECE</option>
        <option value="PHD">Doctor of Philosophy</option>
        <option value="MS">Masters in Science</option>
      </select>
      <hr/>
      <div className='p-10'> 
        Student Records
      </div>
      <hr></hr>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Student First Name</th>
          <th>Student Last Name</th>
          <th>Roll Number</th>
          <th>Domain</th>
          <th>Graduation Year</th>
          <th>CGPA</th>
        </tr>
      </thead>
      <tbody>
        {updatedData.map((i)=>
          (<tr key={i.student_id}>
          <td>{i.first_name}</td>
          <td>{i.last_name}</td>
          <td>{i.roll_number}</td>
          <td>{i.domain}</td>
          <td>{i.graduation_year}</td>
          <td>{i.cgpa}</td>
        </tr>)
        )
        }
      </tbody>
    </Table>
    
        </div>
    </>
    )
}
export default Main