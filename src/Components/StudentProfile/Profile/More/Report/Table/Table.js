import React,{useState} from 'react'

function Table() {

    const [headlist]=useState([
        "Date","SEM","Year","Marksheet No","Student Sign","Staff Sign"
    ])
    const columns=[1,2,3,4,5,6];
    const rows=[1,2,3,4,5,6,7,8];

    return (
        <div>
            {/* <table style={{border:'1px solid black',width:'100%'}}>
                <tr  style={{border:'1px solid black',width:'100%',display:'flex',justifyContent:'space-around'}}>
                    {headlist.map((item,index)=>{
                        return <th style={{padding:'10px 10px',borderRight:'1px solid black',textAlign:'center'}}>{item}</th>
                    })}
                </tr>
            </table> */}
             <table style={{width:'100%'}} border='1' cellSpacing={0}>
                <tr>
                    {headlist.map((item,index)=>{
                        return <th>{item}</th>
                    })}
                </tr>
                {
                    rows.map((i,index)=>{
                        return  <tr>
                        {
                            columns.map((item,index)=>{
                                return <td style={{height:'30px',textAlign:'center'}}>
                                    {item===2&&i!==7&&i!==8&&i}    
                                </td>
                            })
                        }
                    </tr>
                    })
                }
                <tr>
                    <th style={{height:'30px',textAlign:'center'}} colSpan={2}>
                        PROVISIONAL
                    </th>
                    <td style={{height:'30px',textAlign:'center'}} colSpan={4}>
                    
                    </td>
                </tr>
                <tr>
                    <th style={{height:'30px',textAlign:'center'}} colSpan={2}>
                        CONSOLIDATE
                    </th>
                    <td style={{height:'30px',textAlign:'center'}} colSpan={4}>
                    
                    </td>
                </tr>
                <tr>
                    <th style={{height:'30px',textAlign:'center'}} colSpan={2}>
                        DEGREE CERTIFICATE
                    </th>
                    <td style={{height:'30px',textAlign:'center'}} colSpan={4}>
                    
                    </td>
                </tr>
                <tr>
                    <th style={{height:'30px',textAlign:'center'}} colSpan={2}>
                        DEGREE PERCENTAGE
                    </th>
                    <td style={{height:'30px',textAlign:'center'}} colSpan={0}>
                    
                    </td>
                    <th style={{height:'30px',textAlign:'center'}} colSpan={0}>
                        YEAR OF DEGREE COMPLETE
                    </th>
                    <td style={{height:'30px',textAlign:'center'}} colSpan={2}>
                    
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Table
