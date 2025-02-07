import './App.css'
import CourseStaff from "./components/course-staff"; 
function App() {
  return (
    <div>
      <h2> Welcome to my first React application! </h2>
      <div>
        <h4> Look at my custom content! </h4>
        <CourseStaff name = "Jeffrey" role = "TA" rating = {100}/>
        <CourseStaff name = "Taymaz" role = "Prof" rating = {100}/>
        <CourseStaff name = "Ana" role = "CA" rating = {100}/>
      </div>
    </div>

  )
}

export default App
