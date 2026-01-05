import React from 'react';

export const VideoSection: React.FC = () => {
    return (
        <section className="section text-center">
            <div className="container">
                <div className="content-constraint">
                    <div className="glass-panel animate-fade-in delay-200">
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&rel=0"
                                title="System Demonstration"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
