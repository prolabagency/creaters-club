import Image from 'next/image'
import React from 'react'

import Man1 from "../../images/man1.png";
import Man2 from "../../images/man2.png";
import Man3 from "../../images/man3.png";
import Man4 from "../../images/man4.png";
import NoPhoto from "../../images/no-profile.jpeg";

export const Mentors = () => {
  return (
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
              Our mentors
            </div>
            <div
              className="main_inner"
              style={{ marginTop: "60px", alignItems: "start" }}
            >
              <div className="partner_items">
                <div className="mentor_item">
                  <Image width={183} height={180} style={{borderRadius: '10px'}} src={Man1} alt="" />
                  <div className='mentor_person'>
                    <div>Абдыкадыров Сыймык</div>
                    <div>Stack: Backend</div>
                  </div>
                </div>
                <div className="mentor_item">
                  <Image width={183} height={180} style={{borderRadius: '10px'}} src={NoPhoto} alt="" />
                  <div className='mentor_person'>
                    <div>Сыдыков Тариел</div>
                    <div>Stack: UX/UI Дизайн</div>
                  </div>
                </div>
                <div className="mentor_item">
                  <Image width={183} height={180} style={{borderRadius: '10px'}} src={NoPhoto} alt="" />
                  <div className='mentor_person'>
                    <div>Асаналиев Урмат</div>
                    <div>Stack: Android</div>
                  </div>
                </div>
                <div className="mentor_item">
                  <Image width={183} height={180} style={{borderRadius: '10px'}} src={NoPhoto} alt="" />
                  <div className='mentor_person'>
                    <div>Кенешбек уулу Актан</div>
                    <div>Stack: Frontend</div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          </div>
  )
}
