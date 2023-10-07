import { useEffect, useState } from "react"

const Contact = () => {
  const [userData, setUserData] = useState({})
  const [msg, setMsg] = useState('')
  const callAboutPage = async () => {
    try {
      const res = await fetch('http://localhost:3300/getdetails', {
        method: 'GET',
        credentials: 'include'
      })
      const data = await res.json()
      const { name, email, phone } = data
      setUserData({ name, email, phone })
      if (!res.status === 200) {
        const err = new Error(res.error)
        throw err
      }
    } catch (err) {
      console.log(err);
    }
  }
  const handleMsg = (e) => {
    setMsg(e.target.value)
  }
  // send data to backend
  const sendMsg = async (e) => {
    e.preventDefault()
    const { name, email, phone } = userData
    const res = await fetch('http://localhost:3300/contact', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, msg })
    })
    const data = await res.json()
    if (!data) console.log('error');
    else {
      console.log('success');
      setUserData('')
    }
  }
  useEffect(() => {
    callAboutPage()
  }, [])
  return (
    <>
      <div className="contactInfo">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content=between">
              {/* phone no. */}
              <div className="contactInfoItem d-flex justify-content-start align-items-center">
                <img src="" alt="phone" />
                <div className="contactInfoContent">
                  <div className="contactInfoTitle">
                    Phone
                  </div>
                  <div className="contactInfoText">
                    +91 9876 765 321
                  </div>
                </div>
              </div>
              {/* email */}
              <div className="contactInfoItem d-flex justify-content-start align-items-center">
                <img src="" alt="email" />
                <div className="contactInfoContent">
                  <div className="contactInfoTitle">
                    Email
                  </div>
                  <div className="contactInfoText">
                    thapa@technical.com
                  </div>
                </div>
              </div>
              {/* address */}
              <div className="contactInfoItem d-flex justify-content-start align-items-center">
                <img src="" alt="address" />
                <div className="contactInfoContent">
                  <div className="contactInfoTitle">
                    Address
                  </div>
                  <div className="contactInfoText">
                    Midnapore, WB, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="contactForm">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="py-5 contactFormContainer">
                <div className="contactFormTitle">
                  Get in Touch
                </div>
                <form method="PUT" id='contactForm' action="">
                  <div className="justify-content-between align-items-between d-flex contactFormName">
                    <input type="text" id="contactFormName" className='contactFormName inputField' value={userData.name} placeholder='Your Name' required />
                    <input type="email" id="contactFormEmail" className='contactFormEmail inputField' value={userData.email} placeholder='Your Email' required />
                    <input type="number" id="contactFormPhone" className='contactFormPhone inputField' value={userData.phone} placeholder='Your Phone No.' />
                  </div>
                  <div className="contactFormText mt-5">
                    <textarea className="textField contactFormMsg" placeholder='Type your Message/Enquiry' cols="30" rows="10" value={msg} onChange={handleMsg}></textarea>
                  </div>
                  <div className="contactFormButton">
                    <button type='submit' className='button contactSubmitButton' onClick={sendMsg}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact