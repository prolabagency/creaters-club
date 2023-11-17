"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import Image from "next/image";
import Link from 'next/link'
import { Soon } from "@/components/Soon";
import { Mentors } from "@/components/Mentors";

import Partner1 from '../images/partner2.jpg'
import Partner2 from '../images/partner1.jpg'
import Partner3 from '../images/partner3.jpeg'
import Partner4 from '../images/partner4.png'
import Partner5 from '../images/partner5.png'
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wecreatorsapp</title>
        <meta name="description" content="Your page description dsadsadadsa dsadsa dsadsa " />
      </Head>
      <div className="landing">
      <Header />
      <div className="main">
        <div className="main_inner bg">
          <div className="container">
            <div className="main_left">
              <div className="main_title">WELCOME to the</div>
              <div className="main_text" style={{ color: "white" }}>
                WEC hackathon
              </div>
              <Link href='/login' className="main_btn">
                <button>Login</button>
              </Link>
            </div>
            <div className="main_right">
              {/* <Image src={Main_Png} alt="" /> */}
            </div>
          </div>
        </div>

        <div
          className="main_inner"
          style={{
            marginTop: "60px",
            display: "flex",
            borderBottom: "1px solid #6E6E6E",
            paddingBottom: "80px",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div className="container">
            <div className="main_left">
              <div className="main_left_title">
                What is <span style={{ color: "#ED1C24" }}>WEC Hackathon?</span>
              </div>
              <div className="main_right">
                <div className="main_right_img">
                  <div className="main_left_text">
                  The WeCreaters Hackathon is a dynamic two-day event that provides high school students with the opportunity to demonstrate their skills, gain valuable experience, and collaborate with other teams. Participants will work on interesting projects, network with industry professionals, and showcase their abilities to potential employers. Join us for an exciting journey of innovation, learning, and growth at the WECreaters Hackathon.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_inner">
          <div className="container">
            <div
              className="main_left_title"
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "60px",
              }}
            >
              Our events
            </div>
            <div
              className="main_inner"
              style={{ marginTop: "60px", alignItems: "start" }}
            >
              {" "}
              <div
                className="main_left"
                style={{
                  width: "100%",
                }}
              >
                <div className="main_left_title">Upcoming</div>
                <div
                  className="forms"
                  style={{
                    paddingTop: '20px'
                  }}
                >
                  <div
                    className='soon'
                  >
                    <Soon start={'November 18'} end={'November 19'} title={'1'} name={'Хакатон 1'} place={'ОшТУ главный корпус'}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="main_inner"
          style={{
            paddingTop: "30px",
            paddingBottom: "39px",
            borderBottom: "1px solid #6E6E6E",
          }}
        ></div>
        <div className='main_inner'>
          <div className="container">
            <div
              className="main_left_title"
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "60px",
              }}
            >
              Our partners
            </div>
            <div
              className="main_inner"
              style={{ marginTop: "60px", alignItems: "start" }}
            >
              <div className="partner_items">
                <div className="partner_item">
                  <Image src={Partner1} alt="" />
                </div>
               
                <div className="partner_item">
                  <div style={{
                    width: '200px',
                    height: '200px',
                    background: '#F7F7F7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '100px'
                  }}>
                    <Image style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '0px'
                    }} src={Partner3} alt="" />
                  </div>
                </div>
                <div className="partner_item">
                  <div style={{
                    width: '200px',
                    height: '200px',
                    background: '#F7F7F7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '100px'
                  }}>
                    <Image style={{
                      width: '170px',
                      height: '170px',
                      borderRadius: '0px',
                      objectFit: 'contain'
                    }} src={Partner4} alt="" />
                  </div>
                </div>
                <div className="partner_item">
                  <Image src={Partner2} alt="" />
                </div>
                {/* <div className="partner_item">
                  <div style={{
                    width: '200px',
                    height: '200px',
                    background: '#F7F7F7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '100px'
                  }}>
                    <Image style={{
                      width: '170px',
                      height: '170px',
                      borderRadius: '0px',
                      objectFit: 'contain'

                    }} src={Partner5} alt="" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            paddingTop: "30px",
            paddingBottom: "39px",
            borderBottom: "1px solid #6E6E6E",
          }}
        ></div>
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
    </div>
    
  );
}
