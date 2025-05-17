import React, { useState, useEffect } from "react";
import "./style.css";
import avatar from "../../assets/avatar.png";

const CommunityStories = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update viewport check on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Star rating component
  const StarRating = () => {
    return (
      <div className="star-rating">
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
      </div>
    );
  };
  const UserAvatar = ({ name }) => {
    return (
      <div className="user-avatar">
        <div className="avatar-circle">
          <img src={avatar} alt={`${name} avatar`} />
        </div>
        <span className="user-name">{name}</span>
      </div>
    );
  };

  return (
    <div className="community-container">
      <h1 className="community-title">Stories from Our Community</h1>

      {isMobile ? (
        // Mobile Layout
        <div className="mobile-testimonials">
          {/* First testimonial */}
          <div className="testimonial-card">
            <StarRating />
            <p className="testimonial-text">
              I'm using Pretty Progress to track my travels and to remind me to
              appreciate the moment I'm in (because it doesn't last forever). I
              like seeing the widget whenever I'm on my iPad; it's unobtrusive
              and minimal. It doesn't push itself on you - just provides the
              countdown reminder that you set. Good work on this app!
            </p>
            <UserAvatar name="Ahmed R." />
          </div>

          {/* Second testimonial */}
          <div className="testimonial-card">
            <StarRating />
            <p className="testimonial-text">
              I love to remind myself of many things and the progress bar
              percentage looks great on my phone. My favourite is the gradient
              percentage and the retro windows styles.
            </p>
            <UserAvatar name="Ahmed R." />
          </div>

          {/* Third testimonial */}
          <div className="testimonial-card">
            <StarRating />
            <p className="testimonial-text">
              Beautiful countdown app ever created. Easy to use, so many great
              features such as countdown bars that you can choose from, you name
              your favourite bar this app has it.
            </p>
            <p className="testimonial-text">
              What I like most about this app is that it looks incredibly nice
              when I added it to my home screen. So many beautiful colors I can
              use to remind me of my goals and deadlines.
            </p>
            <p className="testimonial-text">
              I highly recommend this app to anyone who wants to keep things
              simple in life, if you are tired of writing things down on paper
              or your device to keep you on track look no further pretty
              progress is the best when comes down to countdown!
            </p>
            <UserAvatar name="Ahmed R." />
          </div>
        </div>
      ) : (
        // Desktop Layout
        <div className="desktop-testimonials">
          {/* Left column */}
          <div className="testimonial-column">
            {/* First testimonial */}
            <div className="testimonial-card">
              <StarRating />
              <p className="testimonial-text">
                I'm using Pretty Progress to track my travels and to remind me
                to appreciate the moment I'm in (because it doesn't last
                forever). I like seeing the widget whenever I'm on my iPad; it's
                unobtrusive and minimal. It doesn't push itself on you - just
                provides the countdown reminder that you set. Good work on this
                app!
              </p>
              <UserAvatar name="Ahmed R." />
            </div>

            {/* Fourth testimonial */}
            <div className="testimonial-card">
              <StarRating />
              <p className="testimonial-text">
                Been using it for months and want to give a review cause im
                happy to have this friendly reminder on my phone. Helping me on
                many deadlines and important dates. Design is pretty much my
                style, easy to use, features are constantly improved, no ads. Me
                like this 😊 👍
              </p>
              <UserAvatar name="Ahmed R." />
            </div>
          </div>

          {/* Middle column */}
          <div className="testimonial-column">
            {/* Second testimonial */}
            <div className="testimonial-card">
              <StarRating />
              <p className="testimonial-text">
                I love to remind myself of many things and the progress bar
                percentage looks great on my phone. My favourite is the gradient
                percentage and the retro windows styles.
              </p>
              <UserAvatar name="Ahmed R." />
            </div>

            {/* Fifth testimonial */}
            <div className="testimonial-card">
              <StarRating />
              <p className="testimonial-text">
                Was looking for a great app to add personal goals and deadlines.
                Really nice solution and great usability!
              </p>
              <UserAvatar name="Ahmed R." />
            </div>

            {/* Sixth testimonial */}
            <div className="testimonial-card">
              <StarRating />
              <p className="testimonial-text">
                Easily the most beautifully designed countdown widgets I could
                find on the App Store!
              </p>
              <UserAvatar name="Ahmed R." />
            </div>
          </div>

          {/* Right column */}
          <div className="testimonial-column">
            {/* Third testimonial */}
            <div className="testimonial-card">
              <StarRating />
              <p className="testimonial-text">
                Beautiful countdown app ever created. Easy to use, so many great
                features such as countdown bars that you can choose from, you
                name your favourite bar this app has it.
              </p>
              <p className="testimonial-text">
                What I like most about this app is that it looks incredibly nice
                when I added it to my home screen. So many beautiful colors I
                can use to remind me of my goals and deadlines.
              </p>
              <p className="testimonial-text">
                I highly recommend this app to anyone who wants to keep things
                simple in life, if you are tired of writing things down on paper
                or your device to keep you on track look no further pretty
                progress is the best when comes down to countdown!
              </p>
              <UserAvatar name="Ahmed R." />
            </div>

            <div className="testimonial-card">
              <StarRating />
              <p className="testimonial-text">
                It's definitely the prettiest countdown / progress app out there
              </p>
              <UserAvatar name="Ahmed R." />
            </div>
          </div>
        </div>
      )}
      <div className="button-container">
        <button className="see-all-button">See All Stories</button>
      </div>
    </div>
  );
};

export default CommunityStories;
