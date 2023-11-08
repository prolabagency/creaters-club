"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import Link from 'next/link'
import { useForm } from "react-hook-form";

const Contact = () => {

  const {register, handleSubmit, formState: {
    errors
  }} = useForm()

  const onSubmit = (data: any) => {
    const mailtoLink = `mailto:${data.email}?subject=${data.themename}&body=Name: ${data.name}%0APhone: ${data.phone}%0A${data.message}`;
    window.location.replace(mailtoLink);
  }


  return (
    <div className="landing">
      <Header />
      <div className="main">
        <div className="main_inner bg7">
          <div className="container">
            <div className="contact">
              <div className="contact_inner">
                <div className="contact_title">
                  Fuel Your Brand’s Goals with <span>Beyond</span>
                </div>
                <div className="contact_text">You will get a response within 24 hours. We will explain in details how we can help you fuel and grow your brand within the stated budget.</div>
                <div className="contact_form">
                  <div className="contact_item">
                    <input {...register('name', {required: true})} type="text" placeholder="Name Surname" />
                  </div>
                  <div className="contact_item">
                    <input {...register('email', {required: true, pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address (@gmail.com)",
                        },})} type="text" placeholder="Email address" />
                        <div style={{ color: "red" }}>
                    {errors?.email && `${errors?.email.message}`}
                  </div>
                  </div>
                  <div className="contact_item">
                    <input {...register('themename', {required: true})} type="text" placeholder="Theme name" />
                  </div>
                  
                  
                  <div className="contact_item">
                    <input {...register('message', {required: true})} type="text" placeholder="Message " />
                  </div>
                  <div className="contact_item">
                    <input {...register('phone', {required: true})} type="text" placeholder="Phone number" />
                  </div>
                </div>
                <div className="contact_btn" onClick={handleSubmit(onSubmit)}>
                  <div>Send Enquiry</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 151 151" fill="none">
                    <path d="M134.936 73.84C134.936 75.3656 134.265 76.7694 133.044 77.9294L92.5166 118.456C91.2348 119.616 89.9531 120.104 88.5493 120.104C85.4975 120.104 83.1781 117.908 83.1781 114.856C83.1781 113.452 83.7275 111.987 84.7044 111.01L98.3149 97.0944L118.945 78.3563L104.113 79.3331H26.965C23.7912 79.3331 21.5937 77.0138 21.5937 73.84C21.5937 70.6663 23.7912 68.4075 26.965 68.4075H104.113L118.884 69.3231L98.3149 50.5854L84.7044 36.7305C83.6662 35.6929 83.1781 34.2891 83.1781 32.8243C83.1781 29.8335 85.4975 27.5752 88.5493 27.5752C89.9531 27.5752 91.2959 28.1245 92.6387 29.4063L133.044 69.7506C134.265 70.9713 134.936 72.375 134.936 73.84Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='main_inner'>
        <div className='container'>
          <div className='mycontact'>Our contacts: +996 555 55 55 55</div>
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
export default Contact