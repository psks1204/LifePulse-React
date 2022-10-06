import './Home.css';
import Header from "../header/Header"
import logo from "./../../assets/logo.svg"; 
import Card from '@material-ui/core/Card'
import { Typography } from '@material-ui/core'; 
import { useState} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeAlt, faInfoCircle , faPaw , faLaptopMedical} from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from "react-router-dom";

function Home() {
 
  const [headerData , setHeaderData] = useState("HomePage")
  let navigate = useNavigate();
  
  const setHeaderDatad = (key) =>{
    setHeaderData(key)
  }
  const clickHandler =(key) => {
    if (key === "patients"){
      setHeaderData('My Patients')
      
        navigate('/patients' )

    }else  if (key === "devices"){
      setHeaderData('My Devices')
      
        navigate('/devices')
      
    }else  if (key === "info"){
      setHeaderData('Info');
      navigate('/info')
       
    }
    else{
      setHeaderData('HomePage')
      navigate('/home')
    }

  }
  return (
    <div className="App">   
      <div className='header'>
        <div style={{minWidth:'200px'}}>
             <img src={logo}  alt='logo' />
             <div>
           
          <Card className={`card ${headerData === "HomePage"  && `change`}`} onClick={ ()=>{clickHandler('HomePage')  } }      >
            <Typography color={`${headerData === "HomePage" ? 'white' : `primary`}`}>
                <div style={{display:'flex'}}  >
                  <FontAwesomeIcon icon={faHomeAlt} style={{marginRight:'10px' , marginTop:'6px'}}  />
                  <span  >Home</span>   
                </div>
              </Typography>
          </Card>
          <Card className={`card ${headerData === "My Patients"  && 'change'}`}  onClick={ ()=> clickHandler('patients') }      >
            <Typography color={`${headerData === "My Patients" ? '#FFFFFF' : 'primary'}`}>
                <div style={{display:'flex'}}  >
                  <FontAwesomeIcon icon={faPaw} style={{marginRight:'10px' , marginTop:'6px'}}  />
                    Patients
                </div>
              </Typography>
          </Card>
          <Card className={`card ${headerData === "My Devices"  && 'change'}`}  onClick={ ()=> clickHandler('devices') }      >
              <Typography color={`${headerData === "My Devices" ? '#FFFFFF' : 'primary'}`}>
                <div style={{display:'flex'}}>
                  <FontAwesomeIcon icon={faLaptopMedical} style={{marginRight:'10px' , marginTop:'6px'}} />
                    Devices
                </div>
              </Typography>
            
          </Card>
          <Card className={`card ${headerData === "Info"  && 'change'}`}  onClick={ ()=> clickHandler('info') }      >
          <Typography color={`${headerData === "Info" ? '#FFFFFF' : 'primary'}`}>
                <div style={{display:'flex'}}>
                  <FontAwesomeIcon icon={faInfoCircle} style={{marginRight:'10px' , marginTop:'6px'}} />
                    Info
                </div>
              </Typography>
            
          </Card>
        </div> 
        </div>
          <div style={{width:'100%'}} >
          <Header name= {headerData} />
          {/* { headerData !== "HomePage" && headerData !== "Help" &&
            <>
              <div style={{ display:'flex' ,   justifyContent:'flex-start'}} >
                <div style={{marginTop:'20px' , minHeight:'40px' ,   marginLeft:'18px'}} >
                <SearchBar placeholder={headerData==='My Patients' ? 'Search Patients' : 'Search Devices'}   />
                  
                </div>
                
                <button style={{backgroundColor:'#21AAE1', borderRadius:'4px', margin :'10px 40px', height:'30px' , marginTop:'22px',color:'#FFFFFF' , display:'flex' , justifyContent:'center' , alignItems:'center'}}><AddIcon /> 
                {headerData==='My Patients' ? 'Add Patients' : 'Add Devices'} 
                </button>
              </div>
               
              <div style={{ margin:'20px' , border:'1px solid #ccc' , boxShadow:'0px 0px 20px rgba(0, 0, 0, 0.25)'}}>
                <Table columns ={ columns } data={tableData}     /> 
              </div>
            </>
          } */}
      </div>
      </div>
      


    </div>
  );
}

export default Home;
