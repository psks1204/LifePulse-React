 
import  Table from '../../shared/Table/Table'
import { useState , useEffect} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; 
import axios from 'axios' ; 
import  columns from '../../shared/pateintcolumns/patient' 
import SearchBar from '../../shared/Search/Search';
import { useNavigate , useLocation} from 'react-router-dom';
import "./Patients.css"

function Patients(   ) {

     const [tableData , setTableData] = useState([])
     const navigate = useNavigate() ;
     const location = useLocation()
     console.log(location)
    useEffect( ()=>{
        axios.get('https://lifepulse-backend.herokuapp.com/patients')
                .then (res=> {                        
                setTableData(res.data)               
            })  
    } , [])
    return (
      <div>
        <div>
          <div>
            <>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    marginTop: "20px",
                    minHeight: "40px",
                    marginLeft: "18px",
                  }}
                >
                  <SearchBar placeholder="My Patients" />
                </div>
                <button
                  onClick={() => {
                    navigate("/addpatient");
                  }}
                  className="add"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span style={{ marginLeft: "10px" }}>
                    {" "}
                    {"  Add Patients "}{" "}
                  </span>
                </button>
              </div>

              <div
                style={{
                  margin: "6px",
                  border: "1px solid #ccc",
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Table columns={columns.columns} data={tableData} />
              </div>
            </>
          </div>
        </div>
      </div>
    );
}

export default Patients;
