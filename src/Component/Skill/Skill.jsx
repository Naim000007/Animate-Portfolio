import React, {useState} from 'react'
import './Skill.css'
import Portfolio1 from '../../assets/ui.jpg'

function Skill() {
    const [isopen, setIsopen] = useState(false) 
  return (
    <div>
   
    <div>
      <section className="" id="works">
        <h2 className="workstitle" id="title">My Portfolio</h2>
        <span className="workDesc">
        </span>
        <div className="worksImgs">
          <button className="project-btn">
            <img src={Portfolio1} alt="" className="worksImg" />
          </button>
          <button className="project-btn">
            <img src={Portfolio1} alt="" className="worksImg" />
          </button>
          <button className="project-btn">
            {" "}
            <img src={Portfolio1} alt="" className="worksImg" />
          </button>
          <button className="project-btn">
            <img src={Portfolio1} alt="" className="worksImg" />
          </button>
          <button className="project-btn">
            <img src={Portfolio1} alt="" className="worksImg" />
          </button>
          <button className="project-btn">
            <img src={Portfolio1} alt="" className="worksImg" />
          </button>
        </div>
        <button  className={` ${isopen ? 'see-more' : 'hidden'} projectbutton`}>
        <div className="see-more ">
            <h2> More Standout Projects</h2>
            <img src={Portfolio1} alt="" className="worksImg" />
         
            <img src={Portfolio1} alt="" className="worksImg" />
           
            <img src={Portfolio1} alt="" className="worksImg" />
         
            <img src={Portfolio1} alt="" className="worksImg" />
       
            <img src={Portfolio1} alt="" className="worksImg" />

            <img src={Portfolio1} alt="" className="worksImg" />
         
        </div>
          </button>
           
     

        <button className="protfolio-btn" onClick={()=> setIsopen(!isopen)}>{isopen ? 'See Less' : 'See More'}</button>

      </section>
      <div className="line"></div>
    </div>
    </div>
  )
}

export default Skill
