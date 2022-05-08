import React,{useState,useEffect} from 'react';
import "./Report.css"
import axios from 'axios';
import UnstyledTable from './Table/Table';
import SemTable from '../../../../StudentProfile/SemTable'


export const Report = React.forwardRef((props, ref) => {

  const [UserData, setUserData] = useState(props.UserData)
  console.log(props.UserData)

  
 

    return (
      <div  className="report" ref={ref}>
            <div className='wraper'>
                <div className="report__title">
                    <h2>PERIYAR UNIVERSITY COLLEGE OF ARTS AND SCIENCE</h2>
                    <h3>PAPPIREDDIPATTI-636905</h3>
                    <h5>DEPARTMENT OF COMPUTER SCIENCE</h5>
                </div>
                <div className="bio__title" style={{textTransform:'uppercase',marginTop:'10px'}}>
                  <h3>Students BIO-Data</h3>  
                </div>
                <div className="bio">
                   {
                   props.UserData&&props.UserData.ImageURL&&
                   <div className='student__img'>
                      <img src={props.UserData.ImageURL} alt="student image" />
                    </div>
                    }
                   
                    <div className="list"><div className="key"><h3>Name</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.Name}</h3></div></div>
                    <div className="list"><div className="key"><h3>Register number</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.RegNo}</h3></div></div>
                    <div className="list"><div className="key"><h3>data of birth</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.DOB}</h3></div></div>
                    <div className="list"><div className="key"><h3>Period of study</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.PeriodOfStudy}</h3></div></div>
                    <div className="list"><div className="key"><h3>gender</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.Gender}</h3></div></div>
                    <div className="list"><div className="key"><h3>father name</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.FatherName}</h3></div></div>
                    <div className="list"><div className="key"><h3>mother name</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.MotherName}</h3></div></div>
                    <div className="list"><div className="key"><h3>Aadhar card No</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.AadharCardNo}</h3></div></div>
                    <div className="list"><div className="key"><h3> Voter Id Number</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.VoterIdNumber}</h3></div></div>
                    <div className="list"><div className="key"><h3>Cell No</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.CellNo}</h3></div></div>
                    <div className="list"><div className="key"><h3>Email Id</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.EmailId}</h3></div></div>
                    <div className="list"><div className="key"><h3>Nationality & Religion</h3></div> <div className='value'><h3>{props.UserData&&`${props.UserData.Nationality} & ${props.UserData.Religion}`}</h3></div></div>
                    <div className="list"><div className="key"><h3>Community</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.Community}</h3></div></div>
                    <div className="list"><div className="key"><h3>Blood Group</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.BloodGroup}</h3></div></div>
                    <div className="list"><div className="key"><h3>Permenent Address</h3></div> <div className='value'><h3>{props.UserData&&props.UserData.PermenentAddress}</h3></div></div>
                </div>

                <div className="bio__bottom" style={{marginTop:'15px'}}>
                      <UnstyledTable/>
                </div>
                <div className="SemList">
                      <div className="view__semester">
                        <div><h3>Semester 1</h3><SemTable UserData={props.UserData} SemesterN={"Semester1"}/></div>
                        <div><h3>Semester 2</h3><SemTable UserData={props.UserData} SemesterN={"Semester2"}/></div>
                        <div><h3>Semester 3</h3><SemTable UserData={props.UserData} SemesterN={"Semester3"}/></div>
                        <div><h3>Semester 4</h3><SemTable UserData={props.UserData} SemesterN={"Semester4"}/></div>
                        {props.UserData.Degree==="UG"&&<div><h3>Semester 5</h3><SemTable UserData={props.UserData} SemesterN={"Semester5"}/></div>}
                        {props.UserData.Degree==="UG"&&<div><h3>Semester 6</h3><SemTable UserData={props.UserData} SemesterN={"Semester6"}/></div>}
                      </div>
                </div>
            </div>
      </div>
      
    );
  });
export default Report
