import React,{useState,useEffect} from 'react'
// import PendingTable from './PendingTable';
//Table start
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//Table End


function Pending({UserData}) {
    const [pendingData,setPendingData]=useState([]);
    console.log(UserData)

    //Logic for filtering the Fail subjects
    useEffect(() => {
        let data=UserData.Semester1.filter((item)=>{
            if((item.Attempt1.Mark!==""&&item.Attempt1.Status===true)||(item.Attempt2.Mark!==""&&item.Attempt2.Status===true)||(item.Attempt3.Mark!==""&&item.Attempt3.Status===true)||(item.Attempt4.Mark!==""&&item.Attempt4.Status===true)||(item.Attempt5.Mark!==""&&item.Attempt5.Status===true)||(item.Attempt6.Mark!==""&&item.Attempt6.Status===true)){
                return false
            }else{
                return true
            }
        })
        // console.log(data)
        data.map((item)=>{
            pendingData.push(item)
        })
        // console.log(pendingData)
    
         data=UserData.Semester2.filter((item)=>{
            if((item.Attempt1.Mark!==""&&item.Attempt1.Status===true)||(item.Attempt2.Mark!==""&&item.Attempt2.Status===true)||(item.Attempt3.Mark!==""&&item.Attempt3.Status===true)||(item.Attempt4.Mark!==""&&item.Attempt4.Status===true)||(item.Attempt5.Mark!==""&&item.Attempt5.Status===true)||(item.Attempt6.Mark!==""&&item.Attempt6.Status===true)){
                return false
            }else{
                return true
            }
        })
        // console.log(data)
        data.map((item)=>{
            pendingData.push(item)
        })
        // console.log(pendingData)
    
         data=UserData.Semester3.filter((item)=>{
            if((item.Attempt1.Mark!==""&&item.Attempt1.Status===true)||(item.Attempt2.Mark!==""&&item.Attempt2.Status===true)||(item.Attempt3.Mark!==""&&item.Attempt3.Status===true)||(item.Attempt4.Mark!==""&&item.Attempt4.Status===true)||(item.Attempt5.Mark!==""&&item.Attempt5.Status===true)||(item.Attempt6.Mark!==""&&item.Attempt6.Status===true)){
                return false
            }else{
                return true
            }
        })
        // console.log(data)
        data.map((item)=>{
            pendingData.push(item)
        })
        // console.log(pendingData)
    
         data=UserData.Semester4.filter((item)=>{
            if((item.Attempt1.Mark!==""&&item.Attempt1.Status===true)||(item.Attempt2.Mark!==""&&item.Attempt2.Status===true)||(item.Attempt3.Mark!==""&&item.Attempt3.Status===true)||(item.Attempt4.Mark!==""&&item.Attempt4.Status===true)||(item.Attempt5.Mark!==""&&item.Attempt5.Status===true)||(item.Attempt6.Mark!==""&&item.Attempt6.Status===true)){
                return false
            }else{
                return true
            }
        })
        // console.log(data)
        data.map((item)=>{
            pendingData.push(item)
        })
        // console.log(pendingData)
    
         data=UserData.Semester5.filter((item)=>{
            if((item.Attempt1.Mark!==""&&item.Attempt1.Status===true)||(item.Attempt2.Mark!==""&&item.Attempt2.Status===true)||(item.Attempt3.Mark!==""&&item.Attempt3.Status===true)||(item.Attempt4.Mark!==""&&item.Attempt4.Status===true)||(item.Attempt5.Mark!==""&&item.Attempt5.Status===true)||(item.Attempt6.Mark!==""&&item.Attempt6.Status===true)){
                return false
            }else{
                return true
            }
        })
        // console.log(data)
        data.map((item)=>{
            pendingData.push(item)
        })
        // console.log(pendingData)
    
         data=UserData.Semester6.filter((item)=>{
            if((item.Attempt1.Mark!==""&&item.Attempt1.Status===true)||(item.Attempt2.Mark!==""&&item.Attempt2.Status===true)||(item.Attempt3.Mark!==""&&item.Attempt3.Status===true)||(item.Attempt4.Mark!==""&&item.Attempt4.Status===true)||(item.Attempt5.Mark!==""&&item.Attempt5.Status===true)||(item.Attempt6.Mark!==""&&item.Attempt6.Status===true)){
                return false
            }else{
                return true
            }
        })
        // console.log(data)
        data.map((item)=>{
            pendingData.push(item)
        })
        // console.log(pendingData)
        console.log(pendingData)    
    }, [UserData]) 

//Table Start
function createData(SUBCODE, SUBNAME, Atmpt1, Atmpt2, Atmpt3,Atmpt4,Atmpt5,Atmpt6) {
    return {SUBCODE, SUBNAME, Atmpt1, Atmpt2, Atmpt3,Atmpt4,Atmpt5,Atmpt6};
  } 

  const [rows,setrows] =useState([])

  useEffect(() => {
    if(pendingData){
      let data=pendingData.map((item)=>{
          return  createData(item.SubCode,item.SubName,
            (item.Attempt1.Mark===""&&item.Attempt1.Status===true)?" ":`${item.Attempt1.Mark} / ${item.Attempt1.Status===true?"P":"F"}`,
            (item.Attempt2.Mark===""&&item.Attempt2.Status===true)?" ":`${item.Attempt2.Mark} / ${item.Attempt2.Status===true?"P":"F"}`,
            (item.Attempt3.Mark===""&&item.Attempt3.Status===true)?" ":`${item.Attempt3.Mark} / ${item.Attempt3.Status===true?"P":"F"}`,
            (item.Attempt4.Mark===""&&item.Attempt4.Status===true)?" ":`${item.Attempt4.Mark} / ${item.Attempt4.Status===true?"P":"F"}`,
            (item.Attempt5.Mark===""&&item.Attempt5.Status===true)?" ":`${item.Attempt5.Mark} / ${item.Attempt5.Status===true?"P":"F"}`,
            (item.Attempt6.Mark===""&&item.Attempt6.Status===true)?" ":`${item.Attempt6.Mark} / ${item.Attempt6.Status===true?"P":"F"}`)
        })
        setrows(data)
        console.log(data)
    }
}, [pendingData])
//Table End





    return (
        <div>
        <TableContainer component={Paper} style={{boxShadow:'-1px 6px 45px -20px rgba(0,0,0,0.56)',borderRadius:'20px'}} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.NO</TableCell>
                <TableCell align="center">SUB CODE</TableCell>
                <TableCell align="center">SUB NAME</TableCell>
                <TableCell align="center">Attempt 1</TableCell>
                <TableCell align="center">Attempt 2</TableCell>
                <TableCell align="center">Attempt 3</TableCell>
                <TableCell align="center">Attempt 4</TableCell>
                {UserData.Degree==="UG"&&<TableCell align="center">Attempt 5</TableCell>}
                {UserData.Degree==="UG"&&<TableCell align="center">Attempt 6</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row,index) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{index+1}</TableCell>
                  <TableCell align="center">
                    {row.SUBCODE}
                  </TableCell>
                  <TableCell align="center" >{row.SUBNAME}</TableCell>
                  <TableCell align="center">{row.Atmpt1}</TableCell>
                  <TableCell align="center">{row.Atmpt2}</TableCell>
                  <TableCell align="center">{row.Atmpt3}</TableCell>
                  <TableCell align="center">{row.Atmpt4}</TableCell>
                  {UserData.Degree==="UG"&&<TableCell align="center">{row.Atmpt5}</TableCell>}
                  {UserData.Degree==="UG"&&<TableCell align="center">{row.Atmpt6}</TableCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
    )
}

export default Pending;