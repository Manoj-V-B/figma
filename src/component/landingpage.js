import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../component/landing.css'
import dogday1 from './dogday1.jpg';
import husky from './husky.jpg';
import germen from './image/germanshepherd.jpg';
import StarRatings from 'react-star-ratings';
import golden from './image/goldenretriever.jpg'
import blacklab from './image/blacklab.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAppleAlt, faC, faCalendar, faCalendarCheck, faCalendarDays, faCircle, faCopyright, faDog, faFemale, faGlobe, faLocation, faMale,  faPaw,  faShieldDog,  faUsers} from '@fortawesome/free-solid-svg-icons'
import {faCircleDollarToSlot} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faBookBookmark} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {faCopyRight} from '@fortawesome/free-brands-svg-icons'
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import isimg from '../component/image/isimg.jpg'
import visa from './image/visa.jpg'
import master from './image/master.jpg'
import paypal from './image/paypal.webp'
import { Link } from 'react-router-dom';


export function Landing() {


    return(
        <>
       
       <nav className="navbar sticky-top navbar-expand-lg navbar-light text-dark bg-light">
  {/* <a className="navbar-brand" href="#">Navbar</a> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse text-primar" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item activ">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">setting</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disable" href="#">Deals</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disable" href="#">Adoption</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disable" href="#">Adotion</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disable" href="#">About</a>
      </li>
        <li className="nav-item">
        <a className="nav-link disable" href="#">Get Inspired</a>
      </li>
    </ul>
    <form className="form-inline ">
      <input className="form-control mr-sm-2" type="text" placeholder="Find your adventure" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
       <h4>time</h4>
      </li>
    </ul>

  </div>
</nav>

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active coimage text-center">
        <h1 className='text-center textcolo mt-5'>FIND BEST PETS TO BUY OR ADOPT</h1>
          <Link to='/secondpage' >

        <button type='button' className=' btn btn-warning b '>See Pets</button>
          </Link>
        <div className=' container   bg-light text-dark p-2  b1'>
        <div className='row co trxt-left text-center mt-3'>
            <div className='col-lg-2 '>
                <button type='button' className='btn btn-light'>Where Do Live?</button>
                
            </div>
            <div className='col-lg-3 '>
                <button type='button' className='btn btn-light'>What pet do you want?</button>
                
            </div>
            <div className='col-lg-3 '>
                <button type='button' className='btn btn-light'>Which age do you want?</button>
                
            </div>
            <div className='col-lg-4  '>
                <button type='button' className='btn btn-warning rounded-pill float-righ pl-5 pr-5'><h3>Search</h3></button>
                
            </div>
        </div>
      </div>
    </div>
    <div className="carousel-item text-center coimage1">      
      <h1 className='text-center textcolo mt-5'>FIND BEST PETS TO BUY OR ADOPT</h1>
      <button type='button' className=' btn btn-warning b'>See Pets</button>
      <div className=' container   bg-light text-dark p-2  b1'>
        <div className='row co trxt-left text-center mt-3'>
            <div className='col-lg-2 '>
                <button type='button' className='btn btn-light'>Where Do Live?</button>
                
            </div>
            <div className='col-lg-3 '>
                <button type='button' className='btn btn-light'>What pet do you want?</button>
                
            </div>
            <div className='col-lg-3 '>
                <button type='button' className='btn btn-light'>Which age do you want?</button>
                
            </div>
            <div className='col-lg-4  '>
                <button type='button' className='btn btn-warning rounded-pill float-righ pl-5 pr-5'><h3>Search</h3></button>
                
            </div>
        </div>
      </div>
      <div className='text-center'>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>

</div>

      <div className="container-fluid ">
        <h2 className="text-center p-5 ">Recently added pets</h2>
          <div className=" container-fluid row">
            <div className="col-lg-4">
                <div className="card">
                 <img src={germen} alt="no image" className="card-img-top cardrounded"/>
                 <button type="button" className="btn btn-warning col-lg- float-right">21000</button>
                  <div className="card-body">
                    <h2>German Shepered</h2>
                    <StarRatings rating={4}  starRatedColor="gold" numberOfStars={5} starDimension="35px"  starSpacing="2px"/><br/><br/>

                    <FontAwesomeIcon icon={faCalendarDays} style={{height:"25px",opacity:"50%"}}/>1 Months
                    <FontAwesomeIcon icon={faLocationDot} style={{height:"25px",opacity:"50%"}}/> Ooty
                    <FontAwesomeIcon icon={faGlobe} style={{height:"25px",opacity:"50%"}}/>Male<br/><br/>

                    <p>Lorem lpsum is simply dummy text of the printing and typesetting industry. </p><br/>
                    <hr/>
                    <div className='text-center'>

                    <button type='button' className='btn btn-warning pl-5 pr-5 btncenter'>View details</button>
                    </div>

                  
                  </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                 <img src={golden} alt="no image" className="card-img-top cardrounded"/>
                 <button type="button" className="btn btn-warning col-lg- float-right">21000</button>
                  <div className="card-body">
                    <h2>Golden retriever</h2>
                    <StarRatings rating={4}  starRatedColor="gold" numberOfStars={5} starDimension="35px"  starSpacing="2px"/><br/><br/>

                    <FontAwesomeIcon icon={faCalendarDays} style={{height:"25px",opacity:"50%"}}/>3 Months
                    <FontAwesomeIcon icon={faLocationDot} style={{height:"25px",opacity:"50%"}}/> coimbatiore
                    <FontAwesomeIcon icon={faGlobe} style={{height:"25px",opacity:"50%"}}/>Female<br/><br/>

                    <p>Lorem lpsum is simply dummy text of the printing and typesetting industry. </p><br/>
                    <hr className=''/>
                    <div className='text-center'>

                    <button type='button' className='btn btn-warning pl-5 pr-5 btncenter'>View details</button>
                    </div>

                  
                  </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                 <img src={blacklab} alt="no image" className="card-img-top col-lg-9 cardrounded"/>
                 <button type="button" className="btn btn-warning col-lg- float-right">21000</button>
                  <div className="card-body">
                    <h2>Labrador</h2>
                    <StarRatings rating={4}  starRatedColor="gold" numberOfStars={5} starDimension="35px"   starSpacing="2px"/><br/><br/>

                    <FontAwesomeIcon icon={faCalendarDays} style={{height:"25px",opacity:"50%"}}/>13 days
                    <FontAwesomeIcon icon={faLocationDot} style={{height:"25px",opacity:"50%"}}/> coimbatiore
                    <FontAwesomeIcon icon={faGlobe} style={{height:"25px",opacity:"50%"}}/>Female<br/><br/>

                    <p>The Labrador Retriever or simply Labrador is a British breed of retriever gun dog.</p><br/>
                    <hr className=''/>
                    <div className='text-center'>

                    <button type='button' className='btn btn-warning pl-5 pr-5 btncenter'>View details</button>
                    </div>

                  
                  </div>
                </div>
            </div>
          </div>
      </div>


      <div className='container-fluid text-center p-5'>
        <h2 >Why choose Pets in home!</h2>
        <div className='row mt-5'>
        <div className='col-lg-4  ' >
          <div className="card bg-warning "  style={{borderRadius:"50px"}}>
            <div className="card-body">
              <FontAwesomeIcon icon={faGlobe} style={{height:"80px"}}/>
           
              <h5>Diverse destination </h5>
              <p>Lorem lpsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
       
        <div className='col-lg-4 '>
          <div className="card" style={{borderRadius:"50px"}}>
            <div className="card-body">
              <FontAwesomeIcon icon={faCircleDollarToSlot} style={{height:"80px"}}/>
           
            <h5>Value of Money </h5>
            <p>Lorem lpsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>

        <div className='col-lg-4'>
          <div className="card" style={{borderRadius:"50px"}}>
            <div className="card-body">
              <FontAwesomeIcon icon={faLocationDot} style={{height:"80px"}}/>
           
            <h5>All locations delivery</h5>
            <p>Lorem lpsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
         
         <div className='container-fluid mt-5'>
        <div className='row'>

        <div className='col-lg-4 '>
          <div className="card" style={{borderRadius:"50px"}}>
            <div className="card-body">
              <FontAwesomeIcon icon={faBookBookmark} style={{height:"80px"}}/>
           
            <h5>Fast Booking</h5>
            <p>Lorem lpsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
        
        <div className='col-lg-4 '>
          <div className="card" style={{borderRadius:"50px"}}>
            <div className="card-body">
              <FontAwesomeIcon icon={faHeart} style={{height:"80px"}}/>
           
            <h5>Best pets</h5>
            <p>Lorem lpsum is simply dummy text of the printing and typesetting industry.</p>
          
            </div>
          </div>
        </div>

        <div className='col-lg-4 '>
          <div className="card" style={{borderRadius:"50px"}}>
            <div className="card-body">
              <FontAwesomeIcon icon={faUsers} style={{height:"80px",color:"blue"}}/>
           
            <h5>Support Team</h5>
            <p>Lorem lpsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>


      <div className='container bg-warning  mb-5'  style={{borderRadius:"25px"}}>
          <h1>Try our Pets At Home app</h1>
        <div className='row pb-5 container'>
          <div className='col-lg-6' style={{order:"sm-2"}}>
            <p>A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal. Popular pets are often considered to have attractive/cute appearances, intelligence, and relatable personalities, but some pets may be taken in on an altruistic basis (such as a stray animal) and accepted by the owner regardless of these characteristics.</p>

            <br/>
          <div className='row'>
            
          <div className='bg-dark text-white  col-lg-5 d-flex'>
              <FontAwesomeIcon icon={faAppleAlt} className="pt-2 pr-2" style={{height:"30px"}}/>
              <p>
              Download on the<br/> App Store
              </p>
            </div>
            <div className='col-lg-1'>&nbsp;</div>
            <div className='bg-dark text-white  col-lg-5 d-flex'>
              <FontAwesomeIcon icon={faPlay} className="pt-2 pr-2" style={{height:"30px"}}/>
              <p>
              GET IT NO
              <h4>Google Play</h4>
              </p>
            </div>
          </div>

          </div>
          
          <div className='col-lg-6' style={{order:"sm-1"}}>
            <img src={isimg} className="col-lg-12 "  />
          </div>
        </div>
      </div>

      <div className=' pt-5 text-light ' style={{backgroundColor:"black"}}>
        <div className='container pb-5 mt-5'>
          <div className='row'>
            <div className='col-lg-3 text-center '>
              <div className=''>
               <button type='button' className='btn-warning p-3' style={{borderRadius:"15px"}}>
               <sup>                
                <FontAwesomeIcon icon={faPaw} style={{rotate:""}}/>
                </sup> 
                pets
                <sup>
                  <FontAwesomeIcon icon={faDog}/>
                </sup>
                <br/> at home</button>
              </div>
            </div>
            <div className='col-lg-3'>
              <h1>About us</h1>
              <p style={{color:"darkgray"}}>About Pets at Home</p>
              <p style={{color:"darkgray"}}>Contect us</p>
              <p style={{color:"darkgray"}}>Features</p>
              <p style={{color:"darkgray"}}>Careers</p>
            </div>
            <div className='col-lg-3'>
            <h1>Resources</h1>
              <p style={{color:"darkgray"}}>Help center</p>
              <p style={{color:"darkgray"}}>Blog</p>
              <p style={{color:"darkgray"}}>Partnership</p>
              
            </div>
            <div className='col-lg-3'>
              <h1 
              >Get in touch</h1>
              <p style={{color:"darkgray"}}>Question or Feedback?</p>
              <p style={{color:"darkgray"}}>We'd Love to hear from you</p>
              <br/><br/>
              
              <FontAwesomeIcon icon={faInstagram} style={{height:"40px"}}/>
              <FontAwesomeIcon icon={faFacebook} style={{height:"40px",marginLeft:"20px",marginRight:"20px"}}/>
              <FontAwesomeIcon icon={faTwitter} style={{height:"40px"}}/>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-lg-4'>&nbsp;</div>
            <div className='col-lg-6'>
             

             <p className='footer' style={{color:"darkgray"}}>
              <FontAwesomeIcon icon={faCopyright} style={{color:"darkgray"}}/> CopyRight 2022 Adopt pets & Travel Together. All Rights Reserverd
             </p>
            </div>
            <div className='col-lg-2'>&nbsp;</div>          
          </div>


        </div>

      </div>
      

        </>
    );
}