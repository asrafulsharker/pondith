import React from 'react'
import SupportImg from '../images/support.png';
import lani1 from '../images/lani1.png';
import lani2 from '../images/lani2.png';
import lani3 from '../images/lani3.png';
import './support.css';
function support() {
    return (
        <div className="support " style={{margin:"80px 180px",background:"#FFF3F3",borderRadius:"81px"}}>
            <div className="container" style={{background:"#FFF3F3",borderRadius:"81px"}}>
                <div  className="container">
                <img className="lani1" src={lani1}/>
                <img className="lani2" src={lani2}/>
                <img className="lani3" src={lani3}/>
                <div className="lani4"></div>
                <div className="lani5"></div>
                <div className="row">
                    <div className="col-md-6">
                        <img style={{width:"340px",height:"335px",marginTop:"140px"}} src={SupportImg}/>
                    </div>
                    <div className="col-md-6">
                        <p style={{textAlign:"right",fontWeight:"300",fontSize:"24px",lineHeight:"28px",color:"#454545",paddingTop:"75px"}}>Looking for support?</p>
                        <p style={{textAlign:"right",fontWeight:"700",fontSize:"36px",lineHeight:"43px",color:"#272727",fontFamily:"Open Sans"}}>Lifetime Free Support</p>
                        <p style={{textAlign:"right",fontSize:"18px",lineHeight:"21px",color:"#242424",paddingTop:"30px"}}>We aim to provide best Academic and skill courses that helps learners, 
                            the teachers also can become an instructor in Pondith - Online Learners’ 
                            and can share their knowledges.</p>
                            <p style={{textAlign:"right",background:"#FF290C",height:"52px",width:"159px",marginTop:"60px",padding:"12px 27px",marginLeft:"340px",color:"white",fontSize:"18px",fontWeight:"bold",lineHight:"21px",cursor:"pointer"}}>Get Support</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default support;
