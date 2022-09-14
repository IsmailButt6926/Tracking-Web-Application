import React from 'react'
import "./Management.css"
import image12 from "../components/assets/image 47.png"
const Management = () => {
    return (
        <>
            <div className="parent">
                <div className='row'>
                    <div className="col-lg-12">
                        <div className="container_cl">
                            <div className="mantain_container">
                                <h1 className='heading_content'>Add New Target</h1>
                                <div className='form_img'>
                                    <div className='image_box'><img className='image_set' src={image12} />
                                        {/* <h2 className='heading_content2'>Upload Image</h2> */}
                                        <button className='upload_btn'>Upload mage</button>
                                    </div>
                                        <div>
                                    
                                        <h6 className=' name'>Name</h6>
                                        <h6 className='heading id'>ID Number</h6>
                                        <h6 className='heading day'>Birthday</h6>
                                        <h6 className='heading city'>City</h6>
                                        <h6 className='heading title'>Title</h6>
                                        <h6 className='heading address'>Address</h6>
                                        <h6 className='heading gender'>Gender</h6>
                                        <h6 className='heading notes'>Notes</h6>
                                        </div>

                                            <div>

                                        <div><input className="input_box input_box1" placeholder='Ayesha Umer' ></input></div>
                                        <div><input className="input_box input_box2" placeholder="35200-3412044-1" ></input></div>
                                        <div><input className="input_box input_box3" placeholder= "12/02/1990 "></input></div>
                                        <div><input className="input_box input_box4" placeholder="Lahore" ></input></div>
                                        <div><input className="input_box input_box5" placeholder="Money laundering Case 143"></input></div>
                                        <div><input className="input_box input_box6" placeholder="Iqbal Town, Lahore"></input></div>
                                        <div><input className="input_box input_box7" placeholder="Female"></input></div>
                                        <div> <textarea className="text_area" > </textarea></div>
                                        
                                        <div className='add_btn'><button className='set_btn'>Add Target</button></div>
                                        </div>


                                    {/* <div className="col-md-1">
                                        <div>Name</div>
                                        <div>ID Number</div>
                                        <div>Birthday</div>
                                        <div>City</div>
                                        <div>Title</div>
                                        <div>Address</div>
                                        <div>Gender</div>
                                        <div>Notes</div>
                                        </div>

                                    <div className="col-md-4">
                                        <div className="hi"></div>
                                        <div className="hi"></div>
                                        <div className="hi"></div>
                                        <div className="hi"></div>
                                        <div className="hi"></div>
                                        <div className="hi"></div>
                                        <div className="hi"></div>
                                        <div className="hi"></div>

                                        
                                        </div> */}


                                    
                                  
                                    
                                   
                                  
                         
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
               
            </div>
        </>
    )
}

export default Management