import './../Home/Home.css';
 
import  Table from '../../shared/Table/Table'
import { useState , useEffect} from 'react';
import AddIcon from '@mui/icons-material/Add';
 
import axios from 'axios' ; 
 
import devicecolumn from '../../shared/devicecolumns/device';
import SearchBar from '../../shared/Search/Search';

function Devices(  ) {

     const [tableData , setTableData] = useState([])
    //  const [columns, setColumns] = useState([])
//   const [headerData , setHeaderData] = useState("HomePage")
  
     
//   const clickHandler =(key) => {
//     if (key === "patients"){
//       setHeaderData('My Patients')
//       axios.get('https://lifepulse-backend.herokuapp.com/patients')
//         .then (res=> {
//                console.log(res.data)
//           setTableData(res.data)
//           setColumns(patientcolumn)
//           console.log(tableData)
//         })

//     }else  if (key === "devices"){
//       setHeaderData('My Devices');
//       axios.get('https://lifepulse-backend.herokuapp.com/devices')
//       .then (res=> {

//         setColumns(devicecolumn)
//         setTableData(res.data)
//         console.log('devicecolumn' ,devicecolumn)
//         console.log('device data',res.data)
//       })
//     }else  if (key === "help"){
//       setHeaderData('Help');
       
//     }

//   }

useEffect( ()=>{
    axios.get('https://lifepulse-backend.herokuapp.com/devices')
            .then (res=> {
                    
              setTableData(res.data)
               
              console.log(tableData)
            })  
} , [])
  return (
    <div className="App">   
      <div className='header'>
         
          <div style={{width:'100%'}} >
          
          
            <>
              <div style={{ display:'flex' ,   justifyContent:'flex-start'}} >
                <div style={{marginTop:'20px' , minHeight:'40px' ,   }} >
                <SearchBar placeholder= 'Search Devices'   />
                  
                </div>
                
                <button className='add' style={{display: 'flex', alignItems: 'center'}}><AddIcon /> 
                 {'Add Devices'}
                </button>
              </div>
               
              <div style={{ margin:'20px' , marginLeft:0, border:'1px solid #ccc' , boxShadow:'0px 0px 20px rgba(0, 0, 0, 0.25)'}}>
                <Table columns ={  devicecolumn } data={tableData}     /> 
              </div>
            </>
          
      </div>
      </div>
      


    </div>
  );
}

export default Devices;
