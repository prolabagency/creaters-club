"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Main_Png from "../images/main_png.png";
import Bond from "../images/bond.jpg";

import { motion } from "framer-motion";

import Image from "next/image";

export default function Home() {
  return (
    <div className="landing">
      <Header />
      <motion.div className="main">
        <div className="container">
          <div className="main_inner" style={{ paddingTop: "100px" }}>
            <div className="main_left">
              <div className="main_title">WELCOME</div>
              <div className="main_text">to the WEC hackathon</div>
              <div className="main_btn">
                <button>Participate</button>
              </div>
            </div>
            <div className="main_right">
              <Image src={Main_Png} alt="" />
            </div>
          </div>
          <div className="main_inner" style={{ marginTop: "143px" }}>
            <div className="main_left">
              <div className="main_left_title">What is WEC Hackathon?</div>
              <div className="main_left_text">
                WEC Hackathon is the first hackathon for scholars in Osh. During
                two days you will code, brainstorm and create real projects to
                demonstrate your skill.
              </div>
            </div>
            <div className="main_right">
              <div className="main_right_img"></div>
            </div>
          </div>
          <div className="container">
            <div
              className="main_inner"
              style={{ marginTop: "170px", alignItems: "start" }}
            >
              <div className="main_left">
                <div className="main_left_title">Dates</div>
                <div className="main_left_minitext">Start: November 11th</div>
                <div className="main_left_minitext">End: November 12th</div>
                <div className="main_left_title" style={{ paddingTop: "30px" }}>
                  Place
                </div>
              </div>
              <div className="main_right">
                <div className="main_right_img2"></div>
              </div>
            </div>
          </div>

          <div className="partner">
            <div className="partner_inner">
              <div className="partner_title">Our partners</div>
              <div className="partner_items">
                <div className="partner_item">
                  <Image
                    className="img"
                    width={350}
                    height={300}
                    src={Bond}
                    alt=""
                  />
                </div>
                <div className="partner_item">
                  <Image
                    className="img"
                    width={350}
                    height={300}
                    src={Bond}
                    alt=""
                  />
                </div>
                <div className="partner_item">
                  <Image
                    className="img"
                    width={350}
                    height={300}
                    src={Bond}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="partner">
            <div className="partner_inner">
              <div className="partner_title">Meet Judges!</div>
              <div className="partner_items">
                <div className="partner_item">
                  <Image width={270} height={300} src={Bond} alt="" />
                </div>
                <div className="partner_item">
                  <Image width={270} height={300} src={Bond} alt="" />
                </div>
                <div className="partner_item">
                  <Image width={270} height={300} src={Bond} alt="" />
                </div>
                <div className="partner_item">
                  <Image width={270} height={300} src={Bond} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="partner">
            <div className="partner_inner">
              <div className="partner_title">Meet our mentors!</div>
              <div className="partner_items">
                <div className="partner_item">
                  <Image width={270} height={300} src={Bond} alt="" />
                </div>
                <div className="partner_item">
                  <Image width={270} height={300} src={Bond} alt="" />
                </div>
                <div className="partner_item">
                  <Image width={270} height={300} src={Bond} alt="" />
                </div>
                <div className="partner_item">
                  <Image width={270} height={300} src={Bond} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
