import React from 'react'
import styles from '../styles/Hero.module.css'
import ui from '../styles/UI-components.module.css'

const Hero = () => {
  return (
    <div className={styles.hero_wrapper}>
        <div className={`${styles.hero} container`}>
            <div className={styles.hero__info}>
                <div className={styles.hero__info_content}>
                    <h1>Providing certainty on the journey to homeownership.</h1>
                    <p>Guarantee your home closes with cash-backed, contingency-free offers for buyers, sellers, their agents, and loan officers.</p>
                    <div className={styles.hero__info_buttons}>
                        <a href='#' className={ui.button}>Sign Up Now</a>
                        <a href='#' className={styles.hero__info_learn_more}>Learn more</a>
                    </div>
                </div>
                <div className={styles.hero__info_icons}>
                    <p>FEATURED IN</p>
                    <div className={styles.hero__info_icons_list}>
                        <img src='src/assets/logo/tc_logo.png' alt='logo' />
                        <img src='src/assets/logo/inman_logo.png' alt='logo' />
                        <img src='src/assets/logo/atc_logo.png' alt='logo' />
                        <img src='src/assets/logo/ut_logo.png' alt='logo' />
                        <img src='src/assets/logo/wsj_logo.png' alt='logo' />
                    </div>
                </div>
            </div>
            <div className={styles.hero__image}>
                <img src='/src/assets/bg-image.png' alt='123'/>
            </div>
        </div>
    </div>
  )
}

export default Hero