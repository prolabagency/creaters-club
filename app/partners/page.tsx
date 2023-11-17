"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Man1 from "../../images/man1.png";
import Man2 from "../../images/man2.png";
import Man3 from "../../images/man3.png";
import Man4 from "../../images/man4.png";
import Image from "next/image";
import Link from 'next/link'


import Partner1 from '../../images/partner2.jpg'
import Partner2 from '../../images/partner1.jpg'
import Partner3 from '../../images/partner3.jpeg'
import Partner4 from '../../images/partner4.png'
import Partner5 from '../../images/partner5.png'

const Partners = () => {

  return (
    <div className="landing">
      <Header />
      <div className="main">
        <div className="main_inner bg6">
          <div className="container">
            <div className="main_left">
              <div className="main_text" style={{ color: "white", textAlign: 'center' }}>
                Our partners
              </div>
            </div>
            <div className="main_right">
              {/* <Image src={Main_Png} alt="" /> */}
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
              Our partners
            </div>
            <div
              className="main_inner"
              style={{ marginTop: "60px", alignItems: "start" }}
            >
              <div className="partner_items">
                <div className="partner_item_second">
                  <Image width={183} height={180} src={Partner1} style={{ borderRadius: '10px' }} alt="" />
                  <div className='mentor_person' style={{
                    // width: '63%',
                    textAlign: 'start',
                    paddingTop: '0px',

                  }}>
                    <div style={{ padding: '20px' }}>PROlab Agency  is an IT company specializing in providing a wide range of services, including web design, custom development, and e-commerce solutions tailored to meet the unique needs of clients. Comprising an experienced team of developers, designers, and project managers, we leverage the latest tools and technologies to create beautiful and functional websites.</div>
                  </div>
                </div>
                <div className="partner_item_second">
                  <div style={{
                    width: '183px',
                    height: '180px',
                    background: '#F7F7F7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px'
                  }}>
                    <Image style={{
                      width: '180px',

                      height: '160px',
                      borderRadius: '0px',
                      objectFit: 'contain'

                    }} src={Partner3} alt="" />
                  </div>                   <div className='mentor_person' style={{
                    // width: '63%',
                    textAlign: 'start',
                    paddingTop: '0px',
                  }}>
                    <div style={{ padding: '20px' }}>Our partnersGeeks IT School is one of the largest IT schools in Kyrgyzstan. Founded in 2018, over the course of 5 years, our courses have graduated over 1000 students, many of whom are now employed in over 50 IT companies both within Kyrgyzstan and internationally. Currently, we have over 1000 students enrolled in courses such as Mobile Development, Website Creation, Database Development, and UX/UI Design.</div>

                  </div>
                </div>

                {/* <div className="partner_item_second">
                <div style={{
                    width: '183px',
                    height: '180px',
                    background: '#F7F7F7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px'
                  }}>
                    <Image style={{
                      width: '160px',
                      height: '160px',
                      borderRadius: '0px',
                      objectFit: 'contain'

                    }} src={Partner5} alt="" />
                  </div>                  
                  <div className='mentor_person' style={{
                    width: '63%',
                    textAlign: 'start',
                  }}>
                  <div style={{padding: '10px'}}>Name Surnamde dsadsadsads dsadsadasds dsadsadsad sadsadsadsa ddsadsadsad sadsadsad sadsadsad sadsadasd sad sa dsa sa dsadsadsa</div>

                  </div>
                </div> */}
                <div className="partner_item_second">
                  <Image width={183} height={180} src={Partner2} style={{ borderRadius: '10px' }} alt="" />
                  <div className='mentor_person' style={{
                    // width: '63%',
                    textAlign: 'start',
                    paddingTop: '0px',

                  }}>
                    <div style={{ padding: '20px' }}>PROlab Media is a marketing agency specializing in business promotion. It provides the services of a marketer, mobile photographer, and SMM specialist. At PROlab Media, we help boost sales through Instagram by creating individualized marketing strategies.</div>

                  </div>
                </div>

                <div className="partner_item_second">
                  <div style={{
                    width: '183px',
                    height: '180px',
                    background: '#F7F7F7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px'
                  }}>
                    <Image style={{
                      width: '180px',
                      height: '160px',
                      borderRadius: '0px',
                      objectFit: 'contain'

                    }} src={Partner4} alt="" />
                  </div>                   <div className='mentor_person' style={{
                    // width: '63%',
                    textAlign: 'start',
                    paddingTop: '0px',

                  }}>
                    <div style={{ padding: '20px' }}>The Red Crescent of Kyrgyzstan is a humanitarian organization operating in all regions of the country, providing assistance to the population in various sectors. The Kyrgyz Red Crescent has 7 regional, 1 city, and 38 district branches, making it the oldest humanitarian organization in the country.
                      About the partner: Red Crescent</div>

                  </div>
                </div>
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
      </div>
     
      <Footer />
    </div>
  );
}
export default Partners