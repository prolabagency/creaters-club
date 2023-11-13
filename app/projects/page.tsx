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
      <div className='main_inner'>
        <div className='container'>
          <div className='mycontact'>Our contacts: +996(552)57-75-77</div>
          <div className='mylogo'><Link href='/'>
            <svg width="152" height="49" viewBox="0 0 152 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M65.64 0.739996L51.632 48H42.86L32.932 12.232L22.392 48L13.688 48.068L0.292 0.739996H8.52L18.312 39.228L28.92 0.739996H37.624L47.484 39.024L57.344 0.739996H65.64ZM79.7856 6.996V20.868H96.1056V27.192H79.7856V41.676H98.1456V48H72.0336V0.671997H98.1456V6.996H79.7856Z" fill="#FFF4F4" />
              <path d="M105.11 24.268C105.11 19.644 106.175 15.496 108.306 11.824C110.482 8.152 113.406 5.296 117.078 3.256C120.795 1.17066 124.852 0.127996 129.25 0.127996C134.282 0.127996 138.747 1.37466 142.646 3.868C146.59 6.316 149.446 9.80666 151.214 14.34H141.898C140.674 11.8467 138.974 9.988 136.798 8.764C134.622 7.54 132.106 6.928 129.25 6.928C126.122 6.928 123.334 7.63066 120.886 9.036C118.438 10.4413 116.511 12.4587 115.106 15.088C113.746 17.7173 113.066 20.7773 113.066 24.268C113.066 27.7587 113.746 30.8187 115.106 33.448C116.511 36.0773 118.438 38.1173 120.886 39.568C123.334 40.9733 126.122 41.676 129.25 41.676C132.106 41.676 134.622 41.064 136.798 39.84C138.974 38.616 140.674 36.7573 141.898 34.264H151.214C149.446 38.7973 146.59 42.288 142.646 44.736C138.747 47.184 134.282 48.408 129.25 48.408C124.807 48.408 120.75 47.388 117.078 45.348C113.406 43.2627 110.482 40.384 108.306 36.712C106.175 33.04 105.11 28.892 105.11 24.268Z" fill="#ED1C24" />
            </svg></Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default Projects