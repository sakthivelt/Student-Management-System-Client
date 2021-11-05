 import React,{useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import UpdateSem from '../UpdateSem/UpdateSem'


export default function BasicTable({Degree,RegNo,SemesterN,callGetData,setSemesterN}) {
  // DialogStatus,setDialogStatus,SemesterN,Degree,RegNo,getData
  const [DialogStatus,setDialogStatus]=useState(false)
  const [Maindata, setMaindata] = useState('')
  const [ID, setID] = useState('')

  function createData(Edite,SUBCODE, SUBNAME, Atmpt1, Atmpt2, Atmpt3,Atmpt4,Atmpt5,Atmpt6) {
    return {Edite,SUBCODE, SUBNAME, Atmpt1, Atmpt2, Atmpt3,Atmpt4,Atmpt5,Atmpt6};
  } 
  
  const [rows,setrows] =useState([])
  // [
  //   createData("FTAM","Tamil","28 P","28 P","28 P","28 P","28 P","28 P"),
  //   createData("FTAM","Tamil","28 P","28 P","28 P","28 P","28 P","28 P"),
  //   createData("FTAM","Tamil","28 P","28 P","28 P","28 P","28 P","28 P"),
  //   createData("FTAM","Tamil","28 P","28 P","28 P","28 P","28 P","28 P"),
  
  // ];

  function getData(){
    axios.get(`${process.env.REACT_APP_UNSPLASH_URL}/getinfo/`+RegNo.toUpperCase()
    ).then((data)=>{
      console.log(data)
      setMaindata(data)
    }).catch((error)=>{console.log(error)})

  }

  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    getData()
  }, [callGetData])

  
  useEffect(() => {
  if(Maindata&&!(typeof(Maindata.data[0])==="undefined")){
    switch (SemesterN) {
      case "Semester1":{
        let data=Maindata.data[0].Semester1.map((item)=>{
          return  createData(item._id,item.SubCode,item.SubName,
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
        case "Semester2":{
          let data=Maindata.data[0].Semester2.map((item)=>{
            return  createData(item._id,item.SubCode,item.SubName,
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
            let data=Maindata.data[0].Semester3.map((item)=>{
              return  createData(item._id,item.SubCode,item.SubName,
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
              let data=Maindata.data[0].Semester4.map((item)=>{
                return  createData(item._id,item.SubCode,item.SubName,
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
                let data=Maindata.data[0].Semester5.map((item)=>{
                  return  createData(item._id,item.SubCode,item.SubName,
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
                  let data=Maindata.data[0].Semester6.map((item)=>{
                    return  createData(item._id,item.SubCode,item.SubName,
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

  }, [Maindata])

  // let data=Maindata.data[0].Semester1.map((item)=>{
  //   return  createData(item.SubCode,item.SubName,
  //     (item.Attempt1.Mark===""&&item.Attempt1.Status===true)?" ":`${item.Attempt1.Mark} / ${item.Attempt1.Status===true?"P":"F"}`,
  //     (item.Attempt2.Mark===""&&item.Attempt2.Status===true)?" ":`${item.Attempt2.Mark} / ${item.Attempt2.Status===true?"P":"F"}`,
  //     (item.Attempt3.Mark===""&&item.Attempt3.Status===true)?" ":`${item.Attempt3.Mark} / ${item.Attempt3.Status===true?"P":"F"}`,
  //     (item.Attempt4.Mark===""&&item.Attempt4.Status===true)?" ":`${item.Attempt4.Mark} / ${item.Attempt4.Status===true?"P":"F"}`,
  //     (item.Attempt5.Mark===""&&item.Attempt5.Status===true)?" ":`${item.Attempt5.Mark} / ${item.Attempt5.Status===true?"P":"F"}`,
  //     (item.Attempt6.Mark===""&&item.Attempt6.Status===true)?" ":`${item.Attempt6.Mark} / ${item.Attempt6.Status===true?"P":"F"}`)
  // })
  // setrows(data)


  function Update(_id){
    setDialogStatus(true);
    setID(_id)
  }

  return (
    <>
    <div> <UpdateSem setSemesterN={setSemesterN} getData={getData} Maindata={Maindata} ID={ID} DialogStatus={DialogStatus} setDialogStatus={setDialogStatus} SemesterN={SemesterN} Degree={Degree} RegNo={RegNo}/></div>      
    <TableContainer component={Paper} style={{margin:"20px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >S.NO</TableCell>
            <TableCell align="center">SUB CODE</TableCell>
            <TableCell align="center">SUB NAME</TableCell>
            <TableCell align="center">Attempt 1</TableCell>
            <TableCell align="center">Attempt 2</TableCell>
            <TableCell align="center">Attempt 3</TableCell>
            <TableCell align="center">Attempt 4</TableCell>
            {Degree==="UG"&&<TableCell align="center">Attempt 5</TableCell>}
            {Degree==="UG"&&<TableCell align="center">Attempt 6</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={()=>{Update(row.Edite)}}
              style={{cursor:'pointer'}}
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
              {Degree==="UG"&&<TableCell align="center">{row.Atmpt5}</TableCell>}
              {Degree==="UG"&&<TableCell align="center">{row.Atmpt6}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
}
