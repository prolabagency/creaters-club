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
      
      <Footer />
    </div>
  );
}
export default Contact