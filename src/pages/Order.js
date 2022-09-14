import React from "react";
import "./Order.css";

import Livepic from "../components/assets/Vector.png";
import Alarmpic from "../components/assets/alarm.png";
import Subjectpic from "../components/assets/Subject.png";
import image1 from "../components/assets/image 67.png";
import image2 from "../components/assets/Rectangle 5864.png";
import image3 from "../components/assets/Rectangle 5867.png";
import image4 from "../components/assets/Rectangle 5868.png";
import image5 from "../components/assets/Rectangle 5869.png";
import image6 from "../components/assets/Rectangle 5870.png";
import image7 from "../components/assets/Rectangle 5871.png";
import image8 from "../components/assets/Rectangle 5872.png";
import image9 from "../components/assets/Rectangle 5873.png";
import image10 from "../components/assets/Rectangle 5874.png";
import image11 from "../components/assets/Rectangle 5875.png";
import image12 from "../components/assets/Rectangle 5876.png";
import image13 from "../components/assets/Rectangle 5877.png";


const Order = () => {
  return (
    <>
      {/* Buttons  */}
      <div className="row">

        <div className="main_div">

          <div className="col-lg-12">

            <div className="All_btn">

              <button type="button" className="btnitem btn_item1">
                <img className="img_item " src={Livepic} /> LIVE
              </button>
              <button type="button" className=" btnitem  btn_item2">
                <img className="img_item" src={Alarmpic} /> ALARMS
              </button>
              <button type="button" className="btnitem  btn_item3">
                <img className="img_item " src={Subjectpic} />
                Subjects
              </button>
            </div>

          </div>

          {/* Pictures  */}
          <div className="set">
            <div className="row">
              <div className="col-lg-6">
                <div className="set_pics">
                  <div ><img className="pictures" src={image1} /></div>
                  <div ><img className="pictures" src={image1} /></div>
                  <div ><img className="pictures" src={image1} /></div>
                  <div ><img className="pictures" src={image1} /></div>
                  <div ><img className="pictures" src={image1} /></div>
                  <div ><img className="pictures" src={image1} /></div>

                </div>


              </div>

              <div className="col-lg-6">


                <div className="row">
                  <div className="col-md-4">
                    <div className="set_detection">
                      DETECTION
                    </div>

                    <div className="parent_image">
                      <div className="child_img"><img src={image2} /></div>
                      <div className="child_img"><img src={image3} /></div>
                      <div className="child_img"><img src={image4} /></div>
                      <div className="child_img"><img src={image5} /></div>
                      <div className="child_img"><img src={image6} /></div>
                      <div className="child_img"><img src={image7} /></div>
                      <div className="child_img"><img src={image8} /></div>
                      <div className="child_img"><img src={image9} /></div>
                      <div className="child_img"><img src={image10} /></div>
                      <div className="child_img"><img src={image11} /></div>
                      <div className="child_img"><img src={image12} /></div>
                      <div className="child_img"><img src={image13} /></div>
                    </div>

                  </div>



                  <div className="col-md-6">
                    {/* identificatio heading  */}
                    <div className="set_identification">
                      IDENTIFICATION
                    </div>
                    {/* Parent border identification  */}
                    <div className="parent_identification">

                      {/* Child  border identification1 ---part-1 */}
                      <div className= "child_identification1" >
                        <div className="img_flex1">


                        <img className="set_img" src={image2} />
                        <div><img className="set_img" src={image2} />
                        </div>
                        <div className="match_found1">Match Found 98%</div>

                        </div>

                        <div className="set_text1">
                        <div >Name:</div>
                        <div>James basher</div>
                        </div>

                          <div className="set_text2">
                        <div >Match Time: </div>
                        <div>03/05/2022 03:12:14</div>
                        </div>

                      </div>

                      {/* Child  border identification1  ---part-2*/}
                      <div className= "child_identification1" >
                        <div className="img_flex1">


                        <img className="set_img" src={image2} />
                        <div><img className="set_img" src={image2} />
                        </div>
                        <div className="match_found2">Match Found 22%</div>

                        </div>

                        <div className="set_text1">
                        <div >Name:</div>
                        <div>James basher</div>
                        </div>

                          <div className="set_text2">
                        <div >Match Time: </div>
                        <div>03/05/2022 03:12:14</div>
                        </div>

                      </div>
                  
                      {/* Child  border identification1 ---part-3 */}
                      
                      <div className= "child_identification1" >
                        <div className="img_flex1">


                        <img className="set_img" src={image2} />
                        <div><img className="set_img" src={image2} />
                        </div>
                        <div className="match_found1">Match Found 98%</div>

                        </div>

                        <div className="set_text1">
                        <div >Name:</div>
                        <div>James basher</div>
                        </div>

                          <div className="set_text2">
                        <div >Match Time: </div>
                        <div>03/05/2022 03:12:14</div>
                        </div>

                      </div>


                      {/* Child  border identification1 ---part-4 */}

                      <div className= "child_identification1" >
                        <div className="img_flex1">


                        <img className="set_img" src={image2} />
                        <div><img className="set_img" src={image2} />
                        </div>
                        <div className="match_found1">Match Found 98%</div>

                        </div>

                        <div className="set_text1">
                        <div >Name:</div>
                        <div>James basher</div>
                        </div>

                          <div className="set_text2">
                        <div >Match Time: </div>
                        <div>03/05/2022 03:12:14</div>
                        </div>

                      </div>

                      


                      


                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
