const TestimonialCard = () => {
    return (
      <div
        className="testimonial-card"
        style={{
          WebkitFontSmoothing: 'antialiased',
          color: '#181B31',
          fontSize: '0.875rem',
          fontWeight: 400,
          lineHeight: 1.43,
          boxSizing: 'inherit',
          fontFamily: 'inherit',
          flex: '0 0 auto',
          margin: '80px auto 40px',
        }}
      >
        <div className="testimonial-image">
          {/* ... */}
        </div>
        <div className="testimonial-text">
          I was a finance major many moons ago, but your analysis just makes it very easy to make quick informative decisions...good job!!
        </div>
        <div className="testimonial-user">
          <div className="user-image">
            {/* ... */}
          </div>
          <div className="user-info">
            <div className="user-name">Jake Wood</div>
            <div className="user-subscription">WallStreetZen Premium Subscriber</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialCard;