import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="hero-section text-center">
            <div className="container">
                <div className="content-constraint">
                    <div className="pill">
                        <span className="text-sm text-uppercase tracking-wide text-secondary">
                            For Roofers Who Want Results
                        </span>
                    </div>

                    <h1>
                        <span className="gradient-text">Tired of chasing leads</span>{' '}
                        <br />
                        <span className="gold-text">that go nowhere?</span>
                    </h1>

                    <div className="content-constraint text-left-md">
                        <p className="mb-8">
                            I know how frustrating it is to invest thousands and get little to no results.
                            You put in the work, spend your money, and still feel stuck.
                            <br /><br />
                            I’ve studied how roofers actually get consistent calls from homeowners — no selling,
                            no hype, just practical steps that work.
                        </p>

                        <ul className="value-points">
                            <li>Stop wasting money on leads that never convert</li>
                            <li>Get calls from homeowners who are ready to hire</li>
                            <li>Build a flow of jobs you can actually rely on</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
