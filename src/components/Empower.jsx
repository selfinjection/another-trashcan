import React from 'react'
import styles from '../styles/Empower.module.css'
import ui from '../styles/UI-components.module.css'

const Empower = () => {
  return (
    <div className={styles.empower_wrapper}>
      <div className={`${styles.empower} container`}>

        <div className={styles.empower__intro}>
          <h1>Who we empower</h1>
          <div className={styles.empower__intro_buttons}>
            <p className={styles.empower__intro_buttons_button}>BUYER'S AGENTS</p>
            <p className={styles.empower__intro_buttons_button}>BUYERS</p>
            <p className={styles.empower__intro_buttons_button}>LISTING AGENTS</p>
            <p className={styles.empower__intro_buttons_button}>SELLERS</p>
            <p className={styles.empower__intro_buttons_button}>LOAN OFFICERS</p>
          </div>
        </div>

        <div className={styles.empower__soltuions}>
          <div className={`${styles.empower__solutions_card} card_container`}>
            <div className={styles.empower__solutions_card_container}>
              <div className={styles.empower__solutions_card_image}>
                <img src='/src/assets/card-1.png' alt='card-1' />
              </div>
              <div className={styles.empower__solutions_card_content_wrapper}>
                <div className={styles.empower__solutions_card_content}>
                  <h2>BUYER'S AGENTS</h2>
                  <h1>Give your buyers the certainty of cash</h1>
                  <p>Waive common contingencies, including the home-sale contingency, to allow your buyers to make their strongest offer in any market.</p>
                  <a href='/' className={ui.button}>Get Certified Today</a>
                </div>
              </div>
            </div>
            <div className={styles.empower__solutions_card_icons}>
              <div className={styles.empower__solutions_card_icons_item}>
                <div className={styles.empower__solutions_card_icons_item_img}>
                  <img src='/src/assets/icon-1.png' />
                </div>
                <p>Keep Your Commission</p>
              </div>
              <div className={styles.empower__solutions_card_icons_item}>
                <div className={styles.empower__solutions_card_icons_item_img}>
                  <img src='/src/assets/icon-2.png' />
                </div>
                <p>Write More Winning Offers</p>
              </div>
              <div className={styles.empower__solutions_card_icons_item}>
                <div className={styles.empower__solutions_card_icons_item_img}>
                  <img src='/src/assets/icon-3.png' />
                </div>
                <p>Guaranteed to Close</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Empower