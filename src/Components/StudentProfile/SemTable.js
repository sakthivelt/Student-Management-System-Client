import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function SemTable({UserData,SemesterN}) {

    
  function createData(SUBCODE, SUBNAME, Atmpt1, Atmpt2, Atmpt3,Atmpt4,Atmpt5,Atmpt6) {
    return {SUBCODE, SUBNAME, Atmpt1, Atmpt2, Atmpt3,Atmpt4,Atmpt5,Atmpt6};
  } 
  
  const [rows,setrows] =useState([])



//Main start 
useEffect(() => {
    if(UserData&&!(typeof(UserData)==="undefined")){
      switch (SemesterN) {
        case "Semester1":{
          let data=UserData.Semester1.map((item)=>{
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
          break;
          case "Semester2":{
            let data=UserData.Semester2.map((item)=>{
              return  createData(item.SubCode,item.SubName,
                (item.Attempt1.Mark===""&&item.Attempt1.Status===true)?" ":`${item.Attempt1.Mark} / ${item.Attempt1.Status===true?"P":"F"}`,
                (item.Attempt2.Mark===""&&item.Attempt2.Status===true)?" ":`${item.Attempt2.Mark} / ${item.Attempt2.Status===true?"P":"F"}`,
                (item.Attempt3.Mark===""&&item.Attempt3.Status===true)?" ":`${item.Attempt3.Mark} / ${item.Attempt3.Status===true?"P":"F"}`,
                (item.Attempt4.Mark===""&&item.Attempt4.Status===true)?" ":`${item.Attempt4.Mark} / ${item.Attempt4.Status===true?"P":"F"}`,
                (item.Attempt5.Mark===""&&item.Attempt5.Status===true)?" ":`${item.Attempt5.Mark} / ${item.Attempt5.Status===true?"P":"F"}`,
                (item.Attempt6.Mark===""&&item.Attempt6.Status===true)?" ":`${item.Attempt6.Mark} / ${item.Attempt6.Status===true?"P":"F"}`)
            })
            setrows(data)
          }
            break;
            case "Semester3":{
              let data=UserData.Semester3.map((item)=>{
                return  createData(item.SubCode,item.SubName,
                  (item.Attempt1.Mark===""&&item.Attempt1.Status===true)?" ":`${item.Attempt1.Mark} / ${item.Attempt1.Status===true?"P":"F"}`,
                  (item.Attempt2.Mark===""&&item.Attempt2.Status===true)?" ":`${item.Attempt2.Mark} / ${item.Attempt2.Status===true?"P":"F"}`,
                  (item.Attempt3.Mark===""&&item.Attempt3.Status===true)?" ":`${item.Attempt3.Mark} / ${item.Attempt3.Status===true?"P":"F"}`,
                  (item.Attempt4.Mark===""&&item.Attempt4.Status===true)?" ":`${item.Attempt4.Mark} / ${item.Attempt4.Status===true?"P":"F"}`,
                  (item.Attempt5.Mark===""&&item.Attempt5.Status===true)?" ":`${item.Attempt5.Mark} / ${item.Attempt5.Status===true?"P":"F"}`,
                  (item.Attempt6.Mark===""&&item.Attempt6.Status===true)?" ":`${item.Attempt6.Mark} / ${item.Attempt6.Status===true?"P":"F"}`)
              })
              setrows(data)
            }
              break;
              case "Semester4":{
                let data=UserData.Semester4.map((item)=>{
                  return  createData(item.SubCode,item.SubName,
                    (item.Attempt1.Mark===""&&item.Attempt1.Status===true)?" ":`${item.Attempt1.Mark} / ${item.Attempt1.Status===true?"P":"F"}`,
                    (item.Attempt2.Mark===""&&item.Attempt2.Status===true)?" ":`${item.Attempt2.Mark} / ${item.Attempt2.Status===true?"P":"F"}`,
                    (item.Attempt3.Mark===""&&item.Attempt3.Status===true)?" ":`${item.Attempt3.Mark} / ${item.Attempt3.Status===true?"P":"F"}`,
                    (item.Attempt4.Mark===""&&item.Attempt4.Status===true)?" ":`${item.Attempt4.Mark} / ${item.Attempt4.Status===true?"P":"F"}`,
                    (item.Attempt5.Mark===""&&item.Attempt5.Status===true)?" ":`${item.Attempt5.Mark} / ${item.Attempt5.Status===true?"P":"F"}`,
                    (item.Attempt6.Mark===""&&item.Attempt6.Status===true)?" ":`${item.Attempt6.Mark} / ${item.Attempt6.Status===true?"P":"F"}`)
                })
                setrows(data)
              }
                break;
                case "Semester5":{
                  let data=UserData.Semester5.map((item)=>{
                    return  createData(item.SubCode,item.SubName,
                      (item.Attempt1.Mark===""&&item.Attempt1.Status===true)?" ":`${item.Attempt1.Mark} / ${item.Attempt1.Status===true?"P":"F"}`,
                      (item.Attempt2.Mark===""&&item.Attempt2.Status===true)?" ":`${item.Attempt2.Mark} / ${item.Attempt2.Status===true?"P":"F"}`,
                      (item.Attempt3.Mark===""&&item.Attempt3.Status===true)?" ":`${item.Attempt3.Mark} / ${item.Attempt3.Status===true?"P":"F"}`,
                      (item.Attempt4.Mark===""&&item.Attempt4.Status===true)?" ":`${item.Attempt4.Mark} / ${item.Attempt4.Status===true?"P":"F"}`,
                      (item.Attempt5.Mark===""&&item.Attempt5.Status===true)?" ":`${item.Attempt5.Mark} / ${item.Attempt5.Status===true?"P":"F"}`,
                      (item.Attempt6.Mark===""&&item.Attempt6.Status===true)?" ":`${item.Attempt6.Mark} / ${item.Attempt6.Status===true?"P":"F"}`)
                  })
                  setrows(data)
                }
                  break;
                  case "Semester6":{
                    let data=UserData.Semester6.map((item)=>{
                      return  createData(item.SubCode,item.SubName,
                        (item.Attempt1.Mark===""&&item.Attempt1.Status===true)?" ":`${item.Attempt1.Mark} / ${item.Attempt1.Status===true?"P":"F"}`,
                        (item.Attempt2.Mark===""&&item.Attempt2.Status===true)?" ":`${item.Attempt2.Mark} / ${item.Attempt2.Status===true?"P":"F"}`,
                        (item.Attempt3.Mark===""&&item.Attempt3.Status===true)?" ":`${item.Attempt3.Mark} / ${item.Attempt3.Status===true?"P":"F"}`,
                        (item.Attempt4.Mark===""&&item.Attempt4.Status===true)?" ":`${item.Attempt4.Mark} / ${item.Attempt4.Status===true?"P":"F"}`,
                        (item.Attempt5.Mark===""&&item.Attempt5.Status===true)?" ":`${item.Attempt5.Mark} / ${item.Attempt5.Status===true?"P":"F"}`,
                        (item.Attempt6.Mark===""&&item.Attempt6.Status===true)?" ":`${item.Attempt6.Mark} / ${item.Attempt6.Status===true?"P":"F"}`)
                    })
                    setrows(data)
                  }
                    break;
                                    
        default:
          break;
      }
    }
    }, [UserData])
//Main end

// useEffect(()=>{
//     console.log(rows)
// },[rows])

    return (
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
  );
}