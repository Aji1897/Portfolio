import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Mail, MapPin, Send, CheckCircle2, Phone, Clock, Sparkles } from 'lucide-react'
import { Github, Linkedin } from '../components/SocialIcons.jsx'
import confetti from 'canvas-confetti'
import Reveal from '../components/Reveal.jsx'
import { profile, socials } from '../data/portfolio.js'
import styles from './Contact.module.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const githubUrl = socials.find((s) => s.label.toLowerCase() === 'github')?.href || 'https://github.com/Aji1897'
  const linkedinUrl = socials.find((s) => s.label.toLowerCase() === 'linkedin')?.href || 'https://www.linkedin.com/in/ajith-kumaran-v-a5a745400'

  const validateForm = () => {
    const tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Name is required'
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message cannot be empty'
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setErrors({})

    fetch(`https://formsubmit.co/ajax/${profile.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `New Portfolio Message from ${formData.name}`,
        _captcha: 'false'
      })
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitting(false)
          setSubmitSuccess(true)
          
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          })

          setFormData({ name: '', email: '', message: '' })
          setTimeout(() => setSubmitSuccess(false), 5000)
        } else {
          throw new Error('Server returned an error status')
        }
      })
      .catch(() => {
        setIsSubmitting(false)
        setErrors((prev) => ({ 
          ...prev, 
          submit: 'Could not send message. Please try again or email me directly at ' + profile.email 
        }))
      })
  }

  return (
    <section id="contact" className={styles.contactSection}>
      <Container>
        <Reveal className={styles.heading}>
          <span className={styles.eyebrow}>GET IN TOUCH</span>
          <h2 className={styles.title}>Let's Build Something Great Together</h2>
        </Reveal>

        <Row className="g-5">
          {/* Left Column: Info list and socials */}
          <Col lg={5} md={12}>
            <div className={styles.infoCard}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge bg-success bg-opacity-20 text-success border border-success border-opacity-30 px-3 py-2 rounded-pill font-medium">
                  🟢 Immediate Joiner
                </span>
              </div>

              <h3 className={styles.infoTitle}>Contact & Connect</h3>
              <p className={styles.infoText}>
                I am actively seeking Full Stack, MERN Stack, and React Developer opportunities. Feel free to connect for job openings, project collaborations, or technical discussions.
              </p>

              <ul className={styles.contactList} aria-label="Contact options">
                <li className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className={styles.itemLabel}>Email</div>
                    <div className={styles.itemValue}>
                      <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    </div>
                  </div>
                </li>

                <li className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className={styles.itemLabel}>Phone</div>
                    <div className={styles.itemValue}>
                      <a href={`tel:${profile.phoneRaw}`}>{profile.phone}</a>
                    </div>
                  </div>
                </li>

                <li className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className={styles.itemLabel}>Location</div>
                    <div className={styles.itemValue}>{profile.location}</div>
                  </div>
                </li>
              </ul>

              <h4 className="h6 fw-bold text-strong mb-3 text-uppercase tracking-wider">Social Channels</h4>
              <div className={styles.socials}>
                <a href={githubUrl} target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="GitHub Profile">
                  <Github size={20} />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="LinkedIn Profile">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${profile.email}`} className={styles.socialIcon} aria-label="Email Ajith">
                  <Mail size={20} />
                </a>
                <a href={`tel:${profile.phoneRaw}`} className={styles.socialIcon} aria-label="Call Ajith">
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </Col>

          {/* Right Column: Contact Form */}
          <Col lg={7} md={12}>
            <div className={styles.formCard}>
              {submitSuccess && (
                <div className={styles.successMsg} role="alert">
                  <CheckCircle2 size={18} className="me-2 d-inline" /> 
                  Message sent successfully! I will reach out shortly.
                </div>
              )}

              {errors.submit && (
                <div className={styles.errorMsg} role="alert">
                  {errors.submit}
                </div>
              )}

              <Form onSubmit={handleSubmit} noValidate>
                <div className={styles.formGroup}>
                  <Form.Label htmlFor="contact-name" className={styles.floatingLabel}>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <Form.Label htmlFor="contact-email" className={styles.floatingLabel}>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="name@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                  <Form.Label htmlFor="contact-message" className={styles.floatingLabel}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    placeholder="How can I help you?"
                    disabled={isSubmitting}
                  />
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={styles.btnSubmit}
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? 'Sending your message' : 'Send message'}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner}>⌛</span> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
