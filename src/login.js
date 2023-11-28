import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";
import './login.css'
import React,{useState} from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

export default function Login() {

    const navigate=useNavigate();
    const[password,setPassword]=useState("")
    // let isExist=false;
    const details=[
      {key:"1",firstName:"רחל",lastName:"כהן",grade:"א4"},
      {key:"2",firstName:"רבקה",lastName:"לוי",grade:"א5"},
      {key:"3",firstName:"שרה",lastName:"פרידמן",grade:"ב7"},
      {key:"4",firstName:"נחמה",lastName:"דרוק",grade:"ג3"},
      {key:"5",firstName:"טובה",lastName:"כץ",grade:"ד9"},
    ]
    const login=()=>
    {
      debugger
      let i=0;
      const index = details.findIndex((element) => element.key === password);
      console.log("tzivi",details[index])
      if(index!=-1)
       {
        alert(`שלום ל${details[index].firstName} ${details[index].lastName} ${details[index].grade}`);
        navigate("/form")
      }
      else
       alert("הסיסמא שהקשת אינה נמצאת במערכת. הקישי סיסמא שונה.")
    }
    // const rocketId = password;
   
  return (
    <>
    <div className="field col-12 md:col-4"  id="divLogin">
      <div id="form">
        <label>לכניסה הקישי קוד אישי</label><br/>
        {/* אם יהיה זמן לעשות שעובר דף בלחיצה על אנטר */}
        <InputText type="password"  id="password" toggleMask onChange={(e)=>setPassword(e.target.value)}/><br/>
       {/* <Password  id="password" toggleMask onChange={(e)=>setPassword(e.target.value)}/><br/> */}
       <Button label="כניסה" className="p-button-raised p-button-secondary" onClick={()=>login()} /><br/>
       {/* <Link to={`/fillout/${rocketId}`}>Go to FILLOUT Form</Link> */}
      </div>  
    </div>
    </>
  );
}
// 

// const Login = () => {
//   const rocketId = 'YOUR_ROCKET_ID'; // Replace with the actual rocket ID

//   return (
//     <Link to={`/fillout/${rocketId}`}>Go to FILLOUT Form</Link>
//   );
// };