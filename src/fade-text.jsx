import React, { useEffect, useRef } from 'react';
import "./FadeInText.css"
const FadeInText = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementPosition = elementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
          elementRef.current.classList.add('fade-in');
        }
        else{
          elementRef.current.style.opacity=0;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef} className="fade-in-text">
   
      <p>Lorem ipsum dolor sit amet, culla in interdum nce a erat luctus lorem lto quis, rutrum aliquet dolor. Maecenas nisi orci, posuere eu lacus sed, placerat auctor sapien. Quisque nec placerat leo. Integer id sollicitudin lorem, quis finibus mi. Quisque vulputate congue vestibulum. Proin pellentesque tellus a pellentesque fermentum. Praesent iaculis sem a nibh elementum, eu laoreet ante vestibulum. Phasellus rhoncus eros sit amet augue posuere tincidunt. Donec sodales lacus a laoreet eleifend. Aenean tempor sodales nunc, nec auctor erat tincidunt in.
 Class aptentm vel non ante.
</p>
    </div>
  );
};

export default FadeInText;
