"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from 'next/link'
import { Mentors } from "@/components/Mentors";


const Aboute = () => {
  return (
    <div className="landing">
      <Header />
      <div className="main">
        <div className="main_inner bg2">
          <div className="container">
            <div className="main_left">
              <div className="main_text" style={{ color: "white", textAlign: 'center' }}>
              Our team
              </div>
            </div>
            <div className="main_right">
              {/* <Image src={Main_Png} alt="" /> */}
            </div>
          </div>  
        </div>
       
          <div
            className="main_inner"
            style={{
              paddingTop: "60px",
              display: "flex",
              borderBottom: "1px solid #6E6E6E",
              paddingBottom: "80px",
              justifyContent: "start",
              textAlign: "center",
              background: '#242424',
            }}
          >
            <div className='container'>
            <div className="main_left">
              <div className="main_left_title">
              About the organization
              </div>
              <div className="main_right">
                <div className="main_right_img" style={{
                    margin: '0px',
                    marginTop: '80px'
                }}>
                  <div className="main_left_text">
                  WeCreaters is a community of high school students who love to create and learn. We offer them various opportunities to showcase their talents and passions in different fields, such as science, technology, arts, and more. We also connect them with mentors and experts who can help them grow and explore their career paths. WeCreaters is a place where young creators can discover their potential, express their ideas, and make a positive impact on the world.                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="main_inner bg3">
          <div className="container">
            <div className="main_left">
            <div className="main_left_title" style={{
                textAlign: 'center'
            }}>
              Our mission
              </div>
              <div className="main_right">
                <div className="main_right_img" style={{
                     margin: '0px 0px 0px auto',
                    marginTop: '80px'
                }}>
                  <div className="main_left_text">
                  WEC Hackathon is the first hackathon for scholars in Osh. During two days you will code, brainstorm and create real projects to demonstrate your skill.  During two days you will code, brainstorm and create real projects to demonstrate your skill. WEC Hackathon is the first hackathon for scholars in Osh. During two days you will code, brainstorm and create real projects to demonstrate your skill.  During two days you will code, brainstorm and create real projects to demonstrate your skill. 
                  </div>
                </div>
              </div>
            </div>
            <div className="main_right">
              {/* <Image src={Main_Png} alt="" /> */}
            </div>
          </div>  
        </div>
        <Mentors />

          <div
            style={{
              paddingTop: "30px",
              paddingBottom: "39px",
              borderBottom: "1px solid #6E6E6E",
            }}
          ></div>
      </div>
     
      <Footer />
    </div>
  );
}
export default Aboute