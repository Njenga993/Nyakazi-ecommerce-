import * as React from 'react';
import { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaSyncAlt, FaDirections, FaPaperPlane, FaShareAlt, FaMapMarkedAlt, FaUser, FaTag, FaComment } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import '../styles/ContactSection.css';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  backContent: React.ReactNode;
}

const ContactSection = () => {
  useEffect(() => {
    const contactCards = document.querySelectorAll('.contact-card');
    
    const handleCardClick = (card: Element) => {
      const cardInner = card.querySelector('.card-inner');
      if (cardInner) {
        cardInner.setAttribute(
          'style',
          cardInner.getAttribute('style') === 'transform: rotateY(180deg)' 
            ? 'transform: rotateY(0deg)' 
            : 'transform: rotateY(180deg)'
        );
      }
    };
    
    const handleCardLeave = (card: Element) => {
      const cardInner = card.querySelector('.card-inner');
      if (cardInner) {
        cardInner.setAttribute('style', 'transform: rotateY(0deg)');
      }
    };

    contactCards.forEach(card => {
      card.addEventListener('click', () => handleCardClick(card));
      card.addEventListener('mouseleave', () => handleCardLeave(card));
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      contactCards.forEach(card => {
        card.removeEventListener('click', () => handleCardClick(card));
        card.removeEventListener('mouseleave', () => handleCardLeave(card));
      });
      observer.disconnect();
    };
  }, []);

  const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description, backContent }) => (
    <div className="contact-card">
      <div className="card-inner">
        <div className="card-front">
          <div className="card-icon">
            {icon}
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="flip-prompt">
            <span>Tap for details</span>
            <FaSyncAlt className="flip-icon" />
          </div>
        </div>
        <div className="card-back">
          {backContent}
        </div>
      </div>
    </div>
  );

  return (
    <section id="contact" className="nyakazi-contact-section">
      <div className="contact-decor">
        <div className="floating-leaf leaf-1"></div>
        <div className="floating-leaf leaf-2"></div>
        <div className="floating-leaf leaf-3"></div>
      </div>

      <div className="container-fluid px-lg-5">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contact-header animate-on-scroll fade-in-up">
              <h2 className="section-title">Contact <span className="highlight-text">Us</span></h2>
              <div className="title-underline">
                <span className="underline-dot"></span>
                <span className="underline-line"></span>
                <span className="underline-dot"></span>
              </div>
              <p className="section-subtitle">We're always here to help with your organic vegetable needs</p>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-3">
          <div className="col-lg-4 col-md-6">
            <div className="animate-on-scroll slide-in-bottom" style={{ animationDelay: '0.2s' }}>
              <ContactCard
                icon={<FaMapMarkerAlt />}
                title="Visit Us"
                description="Come see our organic farm and processing facility"
                backContent={
                  <>
                    <h4>Our Location</h4>
                    <p>Along Nakuru - Nairobi Highway<br />
                      Gilgil Near Kariandusi<br />
                      Nakuru County, Kenya</p>
                    <p>P.O Box 264-20116 Gilgil</p>
                    <a href="https://maps.app.goo.gl/ZRmNXBfRNBc6xGPW7" className="location-btn" target="_blank" rel="noopener noreferrer">
                      <FaDirections /> Get Directions
                    </a>
                  </>
                }
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="animate-on-scroll slide-in-right" style={{ animationDelay: '0.4s' }}>
              <ContactCard
                icon={<FaPhoneAlt />}
                title="Call Us"
                description="Speak directly with our organic experts"
                backContent={
                  <>
                    <h4>Our Phone</h4>
                    <p>Customer Service:</p>
                    <a href="tel:+254792940014" className="phone-link">+254 792 940 014</a>
                    <p className="mt-3">Business Hours:</p>
                    <p>Monday - Friday: 8am - 5pm<br />
                      Saturday: 9am - 2pm</p>
                    <div className="pulse-button-wrapper">
                      <a href="tel:+254792940014" className="call-now-btn">
                        <FaPhoneAlt />
                      </a>
                      <span className="pulse-effect"></span>
                    </div>
                  </>
                }
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="animate-on-scroll slide-in-bottom" style={{ animationDelay: '0.6s' }}>
              <ContactCard
                icon={<FaEnvelope />}
                title="Email Us"
                description="Send us your questions or bulk order requests"
                backContent={
                  <>
                    <h4>Our Email</h4>
                    <p>General Inquiries:</p>
                    <a href="mailto:nyakaziorganics@gmail.com" className="email-link">nyakaziorganics@gmail.com</a>
                    <p className="mt-2">Business & Partnerships:</p>
                    <a href="mailto:info@nyakazi.org" className="email-link">info@nyakazi.org</a>
                    <a href="mailto:nyakaziorganics@gmail.com" className="email-now-btn">
                      <FaPaperPlane /> Send Email
                    </a>
                  </>
                }
              />
            </div>
          </div>
        </div>

        <div className="row g-4 mt-4">
          <div className="col-lg-6">
            <div className="animate-on-scroll slide-in-left" style={{ animationDelay: '0.8s' }}>
              <div className="contact-form-wrapper">
                <div className="form-header">
                  <h3>Send Us a Message</h3>
                  <p>We'll get back to you as soon as possible</p>
                </div>
               <form 
  className="contact-form"
  action="https://formsubmit.co/kamaukelvin077@gmail.com"  // Replace this with your actual email
  method="POST"
>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" name="name" id="nameInput" required />
    <label htmlFor="nameInput"><FaUser className="input-icon" /> Your Name</label>
  </div>

  <div className="form-floating mb-3">
    <input type="email" className="form-control" name="email" id="emailInput" required />
    <label htmlFor="emailInput"><FaEnvelope className="input-icon" /> Your Email</label>
  </div>

  <div className="form-floating mb-3">
    <input type="text" className="form-control" name="subject" id="subjectInput" />
    <label htmlFor="subjectInput"><FaTag className="input-icon" /> Subject</label>
  </div>

  <div className="form-floating mb-3">
    <textarea className="form-control" name="message" id="messageInput" style={{ height: '150px' }} required></textarea>
    <label htmlFor="messageInput"><FaComment className="input-icon" /> Your Message</label>
  </div>

  <div className="text-center">
    <button type="submit" className="submit-btn">
      <span className="btn-text">Send Message</span>
      <span className="btn-icon"><FaPaperPlane /></span>
    </button>
  </div>
</form>

              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="animate-on-scroll slide-in-right" style={{ animationDelay: '1s' }}>
              <div className="map-container">
                <div className="map-header">
                  <h3><FaMapMarkedAlt /> Find Us Here</h3>
                </div>
                <div className="map-wrapper">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.78194845268!2d36.2704537!3d-0.4495936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829a1002587de81%3A0xd268cf741a6a377d!2sNyakazi%20Organics%20Kenya!5e0!3m2!1sen!2ske!4v1724694973194!5m2!1sen!2ske" 
                    width="100%" 
                    height="350" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nyakazi Organics Location"
                  ></iframe>
                  <div className="map-overlay">
                    <div className="marker-pin"></div>
                    <div className="location-pulse"></div>
                  </div>
                </div>

                <div className="social-media-container">
                  <h3><FaShareAlt /> Connect With Us</h3>
                  <p>Follow us on social media for updates, tips, and special offers</p>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100092610791806&mibextid=ZbWKwL" target="_blank" className="social-icon facebook" title="Facebook" rel="noopener noreferrer">
                      <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/nyakaziorganics?igsh=bmVzdGxnMTJianY4" target="_blank" className="social-icon instagram" title="Instagram" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/nyakazi-organics-115534285" target="_blank" className="social-icon linkedin" title="LinkedIn" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                    <a href="https://youtube.com/@nyakaziorganics?feature=shared" target="_blank" className="social-icon youtube" title="YouTube" rel="noopener noreferrer">
                      <FaYoutube />
                    </a>
                    <a href="https://vm.tiktok.com/ZMrVEm5V7/" target="_blank" className="social-icon tiktok" title="TikTok" rel="noopener noreferrer">
                      <FaTiktok />
                    </a>
                    <a href="https://wa.me/+254792940014" target="_blank" className="social-icon whatsapp" title="WhatsApp" rel="noopener noreferrer">
                      <FaWhatsapp />
                    </a>
                    <a href="#" className="social-icon twitter" title="Twitter (coming soon)">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;