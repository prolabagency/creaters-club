"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Man1 from "../../images/man1.jpg";
import Man2 from "../../images/man2.jpg";
import Man3 from "../../images/man3.jpg";
import Man4 from "../../images/man4.jpg";
import Image from "next/image";
import Link from 'next/link'

const Projects = () => {

  return (
    <div className="landing">
      <Header />
      <div className="main">
        <div className="main_inner bg4">
          <div className="container">
            <div className="main_left">
              <div className="main_text" style={{ color: "white", textAlign: 'center' }}>
                Our projects
              </div>
            </div>
            <div className="main_right">
              {/* <Image src={Main_Png} alt="" /> */}
            </div>
          </div>
        </div>

        <div style={{
          display:'flex',
          justifyContent: 'center',
          marginTop: '40px',
        }}>
          <div 
          style={{ color: "white",fontWeight: '600', textAlign: 'center',fontSize: '40px' }}>
            Projects list
          </div>
        </div>
        <div className="main_inner">
         
          <div className="container">
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              </tbody>
            </table>
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
export default Projects