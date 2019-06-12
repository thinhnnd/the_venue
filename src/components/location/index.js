import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2115499163992!2d106.7197178147491!3d10.795103192308828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a18fa325fd%3A0x25f815f86c6d39c1!2sVincom+Center+Landmark+81!5e0!3m2!1svi!2s!4v1560352551298!5m2!1svi!2s" 
                width="100%" 
                height="500px"
                frameBorder="0" 
                allowFullScreen
            >
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;