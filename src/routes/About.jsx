import '../Styles/About.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {MdOutlineLocationOn, MdOutlineEmail, MdPhone} from 'react-icons/md'
import {FiClock} from 'react-icons/fi'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About = ({cartItems, wishItems}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kzdxi1t', 'template_nlvpg2s', form.current, 'sJYfdO-AY49sTRP9S')
      .then((result) => {
          console.log(result.text);
          alert("message sent")
          form.current.reset();

      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <>
        <Navbar  size={cartItems.length} wish={wishItems.length}/>
       <div className='aboutUs'>
      <img className='backImg1' src='https://image.benq.com/is/image/benqco/monitor-all-series-kv-m?$ResponsivePreset$&fmt=png-alpha'/>
  <div className='about'>
    <div className='left'>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi natus distinctio iusto omnis excepturi officiis blanditiis, delectus aspernatur quia libero, ullam fugiat voluptas, maiores possimus ipsam provident veritatis tempora.</p>
        
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio molestias nostrum eveniet. Est dolorum temporibus magni? Ab at accusantium quibusdam sapiente. Suscipit obcaecati labore iure, velit cum in quidem. Officia magni nihil illo blanditiis exercitationem ipsum inventore esse itaque temporibus, eos beatae alias dignissimos dolore voluptatem velit quidem recusandae!</p><br/>

       <div className='info'>
        <h1>Get in touch</h1>
        <h3>Head Office</h3>
        <p ><MdOutlineLocationOn  size="1.2rem"/> 83 Rivonia Rd, Sandton, 2196 JHB, South Africa</p>
        <p><MdOutlineEmail size="1.2rem"/><a href="mailto:ardlightg@gmail.com"> ardlightg@gmail.com</a></p>
        <p><MdPhone size="1.2rem"/> +27 813 399 459</p>
        <p><FiClock size="1.2rem"/> Monday to Sartuday 8am to 5pm</p>
      </div>
      </div>
     
     <div className='right'>
     <div className="form">
            <h1 className="contact-heading">Leave a message
              </h1>
              <h4> WE LOVE TO HEAR FROM YOU</h4>
            <form className='contactForm' ref={form} onSubmit={sendEmail} >
                <label>Your Name</label>
                <input type="text" name="user_name" />

                <label>Email</label>
                <input type="email" name="user_email" />

                <label>Message</label>
                <textarea name="message" rows="4" placeholder="Type your message here"/>
                <button className="btn">Send</button>
            </form> 

        </div>

        </div>
     </div>

     {/* <div className='brandNames'>
        <img className='backImg' src='https://images.samsung.com/is/image/samsung/assets/za/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$'/>
        <img className='backImg' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png'/>
        <img className='backImg' src='https://cdn.worldvectorlogo.com/logos/huawei-2.svg'/>
        <img className='backImg' src='https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg'/>
        <img className='backImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png'/>
        <img className='backImg' src='https://logos-world.net/wp-content/uploads/2022/07/Lenovo-Logo.jpg'/>
        <img className='backImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/800px-Dell_logo_2016.svg.png'/>
        <img className='backImg' src='https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png'/>
        <img className='backImg' src='https://www.citypng.com/public/uploads/preview/canon-white-logo-png-image-11661715542ajwiw3tgfx.png'/>
        </div> */}
     </div>
     <Footer />
     </>
  )
}



export default About