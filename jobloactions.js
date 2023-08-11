import logo from "./pabjobs-logo.png";
import { Link } from "react-router-dom";
import './App.css';
function Joblocations() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark shadow">
        <div class="container">
          <img
            src={logo}
            style={{ width: "200px", paddingleft: "100px", marginLeft: "30px" }}
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            style={{ backgroundcolor: "black" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="collapsibleNavbar"
            style={{ marginleft: "500px" }}
          >
            <ul class="navbar-nav" style={{ marginleft: "500px" }}>
              <li class="nav-item" style={{ marginLeft: "400px" }}>
                <Link to="/home" style={{ color: "white" }}>
                  <a class="nav-link " href="" style={{ color: "black" }}>
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/browesjobs" style={{ color: "white" }}>
                  {" "}
                  <a
                    class="nav-link dropdown-toggle"
                    href="/browsejobs"
                    style={{ color: "black" }}
                  >
                    Browse Jobs
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/jobs" style={{ color: "white" }}>
                  {" "}
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "black" }}
                  >
                    Jobs
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  style={{ color: "black" }}
                >
                  services
                </a>
              </li>
              <li class="nav-item">
                <Link to="/pay" style={{ color: "white" }}>
                  {" "}
                  <a
                    class="nav-link dropdown-toggle"
                    href="payment.html"
                    style={{ color: "black" }}
                  >
                    payments
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <i class="fa-solid fa-bell bellicon"></i>
              </li>
              <li class="nav-item">
                <a href="profile.html">
                  <i class=" user fa-sharp fa-solid fa-circle-user  dropdown-toggle bellicon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="text-center align-items-center justify-content-center secondContainer p-4">
        <span class="">Home Jobs</span>
        <div class="text-center align-items-center justify-content-center d-flex row m-2">
          <div class="d-flex p-1 align-items-center seacrhMainContainer m-2 col-md-4">
            <div class="">
              <i class="fa-solid fa-magnifying-glass p-3"></i>
              <input
                type="text"
                placeholder="Job title skills or company "
                class=" p-1 searchBox "
              />
            </div>
            <div>
              <i class="fa-solid fa-sort-down p-2 "></i>
            </div>
          </div>
          <div class="d-flex p-1 align-items-center seacrhMainContainer m-2 col-md-4">
            <div class="">
              <i class="fa-solid fa-location-dot p-3"></i>
              <input
                type="text"
                placeholder="City, Province or region "
                class=" p-1 searchBox "
              />
            </div>
            <div>
              <i class="fa-solid fa-sort-down p-2 "></i>
            </div>
          </div>
        </div>
        <button class=" registerButton">Search</button>
      </div>
      
      <div class="Container">
        <div className="row">
        <div class="col-2"></div>
        <div class="col-md-2  d-flex  parent-container">
          <div class="fixed-container d-flex flex-column p-3 col-3 categoryBtnContainer">
            <Link to="/jobs">
              {" "}
              <button class=" categoryButton m-1 ">All Jobs</button>
            </Link>
           <Link to="/joblocations"> <button class="categoryBtn m-1"> Jobs By location</button></Link>
           <Link to="/joblocompany"><button class="categoryBtn m-1"> Jobs By Company</button></Link> 
            <Link to="/jobcategory">
              <button class="categoryBtn m-1"> Jobs By Category</button>
            </Link>
         <Link to="/jobdesign">  <button class="categoryBtn m-1"> Jobs By Designation</button></Link> 
          <Link to="/jobskills">  <button class="categoryBtn m-1"> Jobs By Skills</button></Link>
          </div>
        </div>
     
      <div class="col-md-6 card p-4 allJobsContainer">
        <div class="d-flex flex row ">
          <div class="" style={{padding:"10px"}}>
            <button className="btn12">A</button>
            <button  className="btn12">B</button>
            <button  className="btn12">C</button>
            <button  className="btn12">D</button>
            <button  className="btn12">E</button>
            <button  className="btn12">F</button>
            <button  className="btn12">G</button>
            <button  className="btn12">H</button>
           
          </div>
          <div>
          <button  className="btn12">I</button>
          <button  className="btn12">J</button>
            <button  className="btn12">K</button>
            <button  className="btn12">L</button>
            <button  className="btn12">M</button>
            <button  className="btn12">N</button>
            <button  className="btn12">O</button>
            <button  className="btn12">P</button>
          
          </div>
          <div className="mt-2">
          <button  className="btn12">Q</button>
            <button  className="btn12">R</button>
          <button  className="btn12">S</button>
            <button  className="btn12">T</button>  
            <button  className="btn12">U</button>
            <button  className="btn12">V</button>  
            <button  className="btn12">W</button>
            <button  className="btn12">X</button>  
            <button  className="btn12">Y</button>
            <button  className="btn12">Z</button>
          </div>
          <div>
            <button className="btn14">America</button>
            <button  className="btn14">Ameerpet</button>
            <button  className="btn14">Anakapalli</button>
            <button  className="btn14">Bengaluru</button>
            <button  className="btn14">Bapatla</button>
            <button  className="btn14">Badradri</button>
            <button  className="btn14">Chennai</button>
            <button  className="btn14">Charlapalli</button>
            <button  className="btn14">Champapert</button>
            <button className="btn14">America</button>
            <button  className="btn14">Ameerpet</button>
            <button  className="btn14">Anakapalli</button>
            <button  className="btn14">Bengaluru</button>
            <button  className="btn14">Bapatla</button>
            <button  className="btn14">Badradri</button>
            <button  className="btn14">Chennai</button>
            <button  className="btn14">Charlapalli</button>
            <button  className="btn14">Champapert</button>
            <button className="btn14">America</button>
            <button  className="btn14">Ameerpet</button>
            <button  className="btn14">Anakapalli</button>
            <button  className="btn14">Bengaluru</button>
            <button  className="btn14">Bapatla</button>
            <button  className="btn14">Badradri</button>
            <button  className="btn14">Chennai</button>
            <button  className="btn14">Charlapalli</button>
            <button  className="btn14">Champapert</button>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
export default Joblocations;
