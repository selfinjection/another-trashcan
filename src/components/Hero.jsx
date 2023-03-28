const Hero = () => {
  return (
    <section className="hero-section content-padding">
        <div className="hero">
            <div className="hero-content">
                <div className="hero-content_description">
                    <h1>Providing certainty on the journey to homeownership.</h1>
                    <p>Guarantee your home closes with cash-backed, contingency-free offers for buyers, sellers, their agents, and loan officers.</p>
                    <div className="hero-content_buttons">
                        <a href="javascript:void(0)" className="button">Sign up now</a>
                        <a href="javascript:void(0)" className="button-ext">Learn more</a>
                    </div>
                </div>
                <div className="hero-content_icons">
                    <img src="/src/assets/icons/atc_logo.png" />
                    <img src="/src/assets/icons/atc_logo.png" />
                    <img src="/src/assets/icons/atc_logo.png" />
                    <img src="/src/assets/icons/atc_logo.png" />
                    <img src="/src/assets/icons/atc_logo.png" />
                </div>
            </div>
            <div className="hero-content_image">
                <img src="/src/assets/imgs/bg-image.png" />
            </div>
        </div>
    </section>
  )
}

export default Hero