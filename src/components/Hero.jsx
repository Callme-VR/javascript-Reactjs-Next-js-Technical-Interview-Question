/* Hero.js */
export default function Hero() {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="hero-btn">
            <button className="primary-btn">Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>
        </div>
        <div className="shop">
          <p>Also Available on Flipkart and Amazon</p>
          <div className="icons">
            <img src="/flipkart.png" alt="flipkart" />
            <img src="/amazon.png" alt="amazon" />
          </div>
        </div>
        <div className="hero-image">
          <img src="/shoe_image.png" alt="shoes" />
        </div>
      </main>
    );
  }