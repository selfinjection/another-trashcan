import React from 'react'
import styles from '../styles/Empower.module.css'
import ui from '../styles/UI-components.module.css'

const Empower = () => {
  return (
    <div className={styles.empower_wrapper}>
      <div className={`${styles.empower} container`}>
        <section className={styles.empower__intro_section}>
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
        </section>
        <section className={styles.empower__company}>
          <div className={styles.empower__company_intro}>
            <h1>You're in good company</h1>
            <div className={styles.empower__company_intro_wrapper}>
              <div className={styles.empower__company_content}>
                <div style={{marginBottom: '45px', paddingBottom: '45px', borderBottom: '1px #C9C9C9 solid'}}>
                  <h1>“Ribbon is a huge advantage for you as the buyer's agent - and definitely gives you the extra edge needed to have your buyer's offer accepted."</h1>
                  <div className={styles.empower__company_content_author}>
                    <img src='src/assets/author.png' alt='author' />
                    <div className={styles.empower__company_content_author_description}>
                      <p className={styles.emopwer__company_author_name}>Edgar Gonzalez</p>
                      <p className={styles.empower__company_author_company}>eXp Realty</p>
                    </div>
                  </div>
                </div>
                <div className={styles.empower__company_content_description}>
                <p>Agents love us because we empower their buyers with cash and don't compete for their commissions.</p>
                  <div className={styles.empower__company_button}>
                    <a href="#">Learn More</a>
                  </div>
                </div>      
              </div>
              <div className={styles.empower__company_image}>
                <img src='src/assets/company_image.png' alt='company image' />
              </div>
            </div>
          </div>
          <div className={styles.empower__company_stats}>
            <div className={styles.empower__company_stats_item}>
              <h1>
                7,000+
              </h1>
              <p>HOMES PURCHASED</p>
            </div>
            <div className={styles.empower__company_stats_item}>
              <h1>
                30,000+
              </h1>
              <p>AGENTS</p>
            </div>
            <div className={styles.empower__company_stats_item}>
              <h1>
              $5 B+
              </h1>
              <p>Buying Power</p>
            </div>
          </div>
        </section>

        <section className={styles.company__solutions}>
          <h1>Our solutions</h1>
          <div className={styles.company__solutions_buttons}>
            <p>Turn an offer to all cash</p>
            <p>Buy before you sell</p>
            <p>Save an existing deal</p>
          </div>
          <div className={styles.company__solutions_content}>
            <div className={styles.company__solutions_content_card}>
              <div className={styles.company__solution_content_card_info}>
                <div className={styles.company__solutions_content_card_img}>
                  <div className={styles.company__solutions_content_card_img_container}>
                    <p className={styles.company__solutions_content_card_img_country}>ORLANDO, FL</p>
                  </div>
                </div>
                <div className={styles.company__solutions_another_content}>
                  <div className={styles.company__solution_another_content_lines}>
                    <div className={styles.company__solutions_line}></div>
                    <h1>home won with</h1>
                    <div className={styles.company__solutions_line}></div>
                  </div>
                  <div className={styles.company__solutions_icons}>
                    <img src='src/assets/logo/123_logo.png' alt='prot logo'/>
                  </div>
                </div>
                <div className={styles.company__solutions_buyers}>
                  <div className={styles.company__solutions_buyer}>
                    <p>The buyer</p>
                    <p className={styles.company__solution_desc}>won her dream house in multiple-offers situation.</p>
                  </div>
                  <div className={styles.company__solutions_seller}>
                    <p>The seller</p>
                    <p className={styles.company__solution_desc}>got a guaranteed closing with no contingencies.</p>
                  </div>
                </div>
              </div>
              <div className={styles.company__solutions_description_card}>
                description
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Empower