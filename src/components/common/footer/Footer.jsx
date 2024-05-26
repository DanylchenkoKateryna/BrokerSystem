import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Потрібна допомога?</h1>
            </div>
            <button className='btn5'>Зв'яжіться з нами сьогодні</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='BrokerSystem/logo-light.png' alt='' />
              <h2>Потрібна допомога?</h2>
              <p>Щомісяця отримуйте оновлення, гарячі пропозиції, навчальні посібники та знижки</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Підписка</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 Broker System.</span>
      </div>
    </>
  )
}

export default Footer
