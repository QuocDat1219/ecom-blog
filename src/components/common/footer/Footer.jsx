import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/contact');
  };
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Nếu bạn cần</h1>
              <p>Đừng ngần ngại liên hệ với chúng tôi để biết thêm thông tin về công ty hoặc dịch vụ </p>
            </div>
            <button className='btn5' onClick={handleClick}>Liên hệ</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2021 RentUP. Designd By GorkCoder.</span>
      </div>
    </>
  )
}

export default Footer
