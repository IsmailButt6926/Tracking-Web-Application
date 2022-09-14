import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import PeopleIcon from '@mui/icons-material/People';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import React from 'react'
import "./Home.css"



const Home = () => {
  return (
    <>
      <div className="row" style={{marginRight:"60px"}}>
        <div className="col-lg-3">

        <div class="card">
      <div class="card-body">
        <h5 class="card-title">34,218 <TwoWheelerIcon/></h5>
        <p class="card-text">Total Bikes In City</p>
      </div>
    </div>
        </div>


        <div className="col-lg-3">
        <div class="card">
      <div class="card-body">
        <h5 class="card-title">12,253 <NoCrashIcon/></h5>
        <p class="card-text">Total Cars In Islamabad City</p>
      </div>
    </div>


        </div>

        <div className="col-lg-3">
        <div class="card">
      <div class="card-body">
        <h5 class="card-title">52,271 <PeopleIcon/></h5>
        <p class="card-text">Total Peoples In Society</p>
      </div>
    </div>


        </div>


        <div className="col-lg-3">
        <div class="card">
      <div class="card-body">
        <h5 class="card-title">4,211 <HighlightOffIcon/></h5>
        <p class="card-text">Total Targets</p>
      </div>
    </div>


        </div>
      </div>

    </>
  )
}

export default Home