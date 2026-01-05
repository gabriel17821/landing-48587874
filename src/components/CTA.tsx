import React from 'react';

export const CTA: React.FC = () => {
    return (
        <section className="section text-center">
            <div className="container">
                <div className="content-constraint d-flex-center">
                    <button className="btn-primary animate-fade-in delay-300">
                        See How It Works
                    </button>
                    <p style={{ marginTop: '1rem' }} className="text-sm animate-fade-in delay-300">
                        Limited spots available for this month.
                    </p>
                </div>
            </div>
        </section>
    );
};
