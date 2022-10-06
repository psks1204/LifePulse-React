import Login from "../components/Login/login";
import Layout from "../components/Layout/layout"; 
 
import Patients from "./../components/patients/patients";
import Devices from "../components/devices/devices";
import landingpage from "../components/landingPage/landinpage";
 
import Singlepatient from "../components/singlePatient/singlepatient";
import PatientDetail from "../components/patientDetail/patientDetail";

export const homepath = "/home"
export const helppath='/info'
export const loginpath="/"
export const patientspath="/patients"
export const devicespath="/devices"
export const addpatientpath="/addpatient"
export const patientDetail="/patientDetail"

export const routeConfig =[
    {
        path: addpatientpath,
        component: Singlepatient,
        layout :  Layout,
    },
    {
        path: patientDetail,
        component: PatientDetail,
        layout :  Layout,
    },
    {
        path: homepath,
        component: landingpage,
        layout :  Layout,
    },
    {
        path: helppath,
        component: landingpage,
        layout :  Layout,
    },
    {
        path: patientspath,
        component: Patients,
        layout :  Layout,
    },
    {
        path: devicespath,
        component: Devices,
        layout :  Layout,
    },
    {
        path: loginpath,
        component: Login
    },
]


 