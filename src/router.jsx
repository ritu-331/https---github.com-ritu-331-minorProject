import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import StudentLoginPage from "./Online-Course-Registration/studentLogin/StudentLoginPage";
import TeacherLoginPage from "./Online-Course-Registration/teacherLogin/TeacherLoginPage";
import Profile from "./Online-Course-Registration/studentLogin/Profile";
import Session from "./Online-Course-Registration/teacherLogin/Session";
import TeacherHomePage from "./Online-Course-Registration/teacherLogin/TeacherHomePage";
import StudentHomePage from "./Online-Course-Registration/studentLogin/StudentHomePage";
import SMain from "./Online-Course-Registration/studentLogin/SMain";
import TMain from "./Online-Course-Registration/teacherLogin/tMain";
import Password from "./Online-Course-Registration/studentLogin/Password";
import EnrollHistory from "./Online-Course-Registration/studentLogin/EnrollHistory";
import Semester from "./Online-Course-Registration/teacherLogin/Semester";
import Department from "./Online-Course-Registration/teacherLogin/Department";
import TCourses from "./Online-Course-Registration/teacherLogin/TCourses";
import Action from "./Online-Course-Registration/teacherLogin/Action";
import RegistrationCourse from "./Online-Course-Registration/studentLogin/RegistrationCourse";


const myRoutes= createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/studentLogin",
        element:<StudentLoginPage/>
    },
    {
        path:"/teacherLogin",
        element:<TeacherLoginPage/>
    
    },
    {
        path:"studentHomePage",
        element:<StudentHomePage/>,
        children:[
           
            {
                path:"",
                element:<Profile/>
            },
            {
                path:"profile",
                element:<Profile/>
            },
            {
                path:"registeredCourse",
                element:<RegistrationCourse/>
            },
            {
                path:"password",
                element:<Password/>
            
            },
            {
                path:"enrollHistory",
                element:<EnrollHistory/>
            }
        ]
    },
    
    {
        path:"teacherHomePage",
        element:<TeacherHomePage/>,
        children:[
            {
                path:"",
                element:<TMain/>
            },
            {
                path:"session",
                element:<Session/>
            },
            {
                path:"semester",
                element:<Semester/>
            },
            {
                path:"department",
                element:<Department/>
            },
            {
                path:"tCourses",
                element:<TCourses/>
            },
            {
                path:"action",
                element:<Action/>
            }
        ]

    }
  
    
])
   
   

   



export default myRoutes