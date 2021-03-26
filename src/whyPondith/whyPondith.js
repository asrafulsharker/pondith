import React,{useEffect,useRef} from 'react'
import lottie from 'lottie-web';
import WhyWatch from '../images/whyWatch.png';
import WhyLearn from '../images/whyLearn.png';
import WhyPondithImg from '../images/whyPondith.png';

import './whyPondith.css';
function WhyPondith() {
    const container = useRef(null)

    useEffect(()=>{
        lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData: require('./ani3.json')
        })
    },[])
    return (
        <div style={{ padding:"80px 0px 0px 0px"}}>
            <div className="container">
                <div className="row">
                <div className="col-md-6" style={{marginTop:"-55px"}}>
                    {/* <img src={WhyPondithImg} style={{width:"95%"}}/> */}
                    <div className=" m-auto" ref={container}></div>
                </div>
                <div className="col-md-5 ml-auto">
                    <p className="why-top-p"><span style={{color:"black"}}>Why</span> Pondith - Online Learners?</p>
                    <p className="why-bg-p">Pondith - Online Learners’ sets  itself 
                    apart from others.</p>

                    <div className="row" style={{marginTop:"15px"}}>
                        <img className="why-sm-img" src={WhyWatch}/>
                        <div style={{marginLeft:"25px"}}>
                        <p className="why-bg-img-p">Video Playlist to fit your busy life</p>
                        <p className="why-sm-img-p">Lifetime accessible. <br/>Customizable courses.<br/>Live & Video Playlist courses.</p>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"15px"}}>
                        <img className="why-sm-img" src={WhyLearn}/>
                        <div style={{marginLeft:"25px"}}>
                        <p className="why-bg-img-p">Video Playlist to fit your busy life</p>
                        <p className="why-sm-img-p">We teach with real case studies. <br/>Yearly recertification of our experts.<br/>We mentor & Support Trainees.<br/>Extensive multi-industy working Experience.<br/>We teach practically.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default WhyPondith;
