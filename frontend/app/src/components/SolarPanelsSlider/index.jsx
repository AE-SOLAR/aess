import React from 'react';
import { useNavigate } from 'react-router-dom';

const DownSlider = [
    {
        url: '/static/images/homepage/DownSlider/shadestar/shadestar.mp4',
        route: '/product/panels?type=ShadeStar',
        buttonText: 'solar=panels=ShadeStar',
    },
    {
        url: '/static/images/homepage/DownSlider/terra/terra.mp4',
        route: '/product/panels?type=Terra',
        buttonText: 'solar=panels=Terra',
    },
];

const SolarPanelsSlider = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {DownSlider.map((slide, index) => (
                <div key={index} style={{ position: 'relative', flex: 1 }}>
                    <video
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        autoPlay
                        muted
                        loop
                        onError={(e) => {
                            const target = e.target;
                            // Ensure the target is an HTMLVideoElement
                            if (target instanceof HTMLVideoElement) {
                                console.error(`Error loading video: ${slide.url}`);
                                target.src = '/path/to/fallback-video.mp4'; // Replace with your fallback video path
                                target.load(); // Refresh the video element with the new source
                            }
                        }}
                    >
                        <source src={slide.url} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <button
                            style={{
                                padding: '10px 20px',
                                backgroundColor: 'red',
                                color: 'white',
                                borderRadius: '5px',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                            onClick={() => navigate(slide.route)}
                            aria-label={`Navigate to ${slide.buttonText}`}
                        >
                            {slide.buttonText}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SolarPanelsSlider;
