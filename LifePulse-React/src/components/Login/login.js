import {useState} from 'react'; 
import "./Login.css"
import logo from "./../../assets/logo.svg"; 
import Card from '@material-ui/core/Card';
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faKey} from '@fortawesome/free-solid-svg-icons'
  

 const Login = () => {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const emailChange= (event)=>{
        setUsername(event.target.value)
    }
    const pwdChange= (event)=>{
        setPassword(event.target.value)
    }
    let navigate = useNavigate();
    const clickHandler =() =>{
        if ( username === 'Test@mmdtech.ci' && password === 'Welcome@123'){
            navigate('/patients')
        }
        return
    }

    return (
        <div className='container'>
            <div className='login'> 
                <Card className='box'>
                    <div className='text'> Login </div>
                    <div className='flex'>                           
                        <div class="wrapper">
                            <FontAwesomeIcon icon={faEnvelope} className="icon"  style={{width:'1rem'}}/>
                            <input placeholder='Email' className='email' type='email'  value={username} onChange={(event)=>emailChange(event)} />
                        </div>
                        <div  className="wrapper">                                                    
                        <FontAwesomeIcon icon={faKey} className='icon'  style={{width:'1rem'}} />
                            <input placeholder='Password' className='email' type='password' value={password} onChange={(event)=>pwdChange(event)} />
                        </div>
                        <div className='ftpswd'> Forgot Password?</div>
                        <button className='button' onClick={clickHandler} >Login</button>
                        <div style={{ display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                            < hr className='line' ></hr>
                            <span  style={{fontSize:'25px' ,  color:'#ccc'}}>Or</span>
                            < hr className='line' ></hr>
                        </div>
                         
                        
                        <button className='signup'>Sign Up</button>
                    </div>
                </Card>
            </div>
            <div className='logo'>
                <img src={logo} alt='' width='439' height ='371' />
            </div>
        </div>
    )
}


export default Login