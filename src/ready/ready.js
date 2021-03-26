import React from 'react'
import PondithBg from '../images/pondith-bg.png';
import './ready.css';
function ready() {
    return (
        <div style={{margin:"80px"}}>
            <div className="ready-bg-main" style={{margin:"100px",backgroundColor:"",borderRadius:"81px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                <div className="container" style={{padding:"0px"}}>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="r-p1">Ready to Join.....?</p>
                            <p className="r-p2">We aim to provide best Academic and skill courses that helps learners, 
                            the teachers also can become an instructor in Pondith - Online Learners’ 
                            and can share their knowledge.</p>
                        </div>
                        <div className="col-md-6 ready-bg-img">
                       <div className="mr-auto" style={{marginTop:"115px"}}>
                       <p className="" style={{textAlign:"center"}}><a  href="#" style={{color:"white",marginLeft: "80px",textDecoration:"none",background:"#FF290C",textAlign:"center",padding:"18px 30px",fontWeight:"bold",fontSize:"24px",lineHeight:"28px",borderRadius:"20px"}}>Register Now</a></p>
                       </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ready
