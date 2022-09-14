import React from 'react'
import "./Frs.css"
import image1 from "../components/assets/image 34.png"
import image2 from "../components/assets/image 35.png"
import image3 from "../components/assets/image 36.png"
import image4 from "../components/assets/image 37.png"
import image5 from "../components/assets/image 38.png"
import image6 from "../components/assets/image 39.png"
const Frs = () => {
    return (
        <>
            <div className="parent">
                <div className='row'>

                    <div className="col-lg-12">
                        <div className="container_cl">
                            <div className="mantain_container">
                                
                            {/* Conetnt 1  */}
                                <div className="content1">
                                    <h1 className='heading_content'>FRS Management</h1>
                                    <button className='btn'>Add new subject</button>
                                </div>

                                {/* Conetnt 2  */}

                                <div className="content2">
                                    <input className="form" placeholder="Search name, title" />
                                    <button className='search_btn' >Search</button>

                                </div>
                                {/* Conetnt 3  */}
                                <div className="content3">
                                    <table class="table">
                                        <thead className='table_head'>
                                                <tr>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Camera</th>
                                                    <th scope="col">Match</th>
                                                    <th scope="col">Access</th>
                                                </tr>
                                        </thead>
                                        
                                        <tbody>
                                            <tr>
                                                <td><img src={image1 }/></td>
                                                <td className='set_text'>Crime case 101</td>
                                                <td className='set_text'>Junaid khan</td>
                                                <td className='set_text'>CPSD960</td>
                                                <td className='set_text color_text1'>found(88%)</td>
                                                <td className='set_text color_text2'>Denied</td>
                                            </tr>
                                       
                                            <tr>
                                            <td><img src={image2 }/></td>
                                                <td className='set_text'>Burglary X651</td>
                                                <td className='set_text'>Waqas Ahmed</td>
                                                <td className='set_text'>GAZA45C</td>
                                                <td className='set_text'>Not found</td>
                                                <td className='set_text color_text2'>Denied</td>
                                            </tr>
                                            <tr>
                                            <td><img src={image3 }/></td>

                                                <td className='set_text'>Drugs Import Case</td>
                                                <td className='set_text'>Leo Niman</td>
                                                <td className='set_text'>G4ZAA5C</td>
                                                <td className='set_text'>Not found</td>
                                                <td className='set_text color_text1'>Approved</td>
                                            </tr>

                                            <tr>
                                            <td><img src={image4 }/></td>
                                                <td className='set_text'>Crime Case 101</td>
                                                <td className='set_text'>Ayesha Khan</td>
                                                <td className='set_text'>CDGH554</td>
                                                <td className='set_text color_text1'>Found(98%)</td>
                                                <td className='set_text color_text2'>Denied</td>
                                            </tr>
                                          

                                            <tr>
                                            <td><img src={image5 }/></td>
                                                <td className='set_text'>Crime Case 101</td>
                                                <td className='set_text'>Feng Hu</td>
                                                <td className='set_text'>CK69792</td>
                                                <td className='set_text'>Not found</td>
                                                <td className='set_text color_text2'>Denied</td>
                                            </tr>


                                            <tr>
                                            <td><img src={image6 }/></td>
                                                <td className='set_text'>Crime Case 101</td>
                                                <td className='set_text'>Kamran Javed</td>
                                                <td className='set_text'>GHD2134</td>
                                                <td className='set_text color_text1'>Found(88%)</td>
                                                <td className='set_text color_text2'>Denied</td>
                                            </tr>
                                        </tbody>
                                    </table>



                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Frs
