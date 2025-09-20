import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container mt-18">
      <h1 className="contact-title">Contact Us</h1>

     

      {/* Map  */}
      <div className="map">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.843085019893!2d90.39945261536388!3d23.750876894605167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894b2c8c4cd%3A0x40d16e2f0d68fceb!2sDhaka!5e0!3m2!1sen!2sbd!4v1634376000000!5m2!1sen!2sbd"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
  
      <div className=" flex ">
     
      <div className="contact-info">
        <div>
          <h3>Our Location</h3>
          <p>Dhaka, Bangladesh</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>info@furns.com</p>
        </div>
        <div>
          <h3>Phone</h3>
          <p>+880 1234 567 890</p>
        </div>
      </div>

 
      <div className="form-container">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      </div>
    </div>
  );
}
