import { useState } from 'react';
import './index.css';
import profileImg from './assets/profile.jpg';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDMClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="layout-container">

      {/* CARD 1: HERO - The Hook */}
      <div className="story-card hero-card animate-enter delay-1">

        {/* Audience Pill */}
        <div className="pill-badge">
          For Roofers Tired of Chasing Leads
        </div>

        <h1 className="hero-title">
          Stop Chasing <br /> Roofing Leads.
        </h1>

        <p className="hero-lead">
          Talk only to homeowners <br className="hidden-sm" />
          who actually need work done.
        </p>

        <div style={{ marginTop: '1rem' }}>
          <a href="#" onClick={handleDMClick} className="btn-cta">
            👉 DM me “ROOF”
          </a>
        </div>
      </div>

      {/* CARD 2: THE SCENE - The Agitation */}
      <div className="story-card animate-enter delay-2">
        <p><strong>If you’re a roofer, this is familiar:</strong></p>

        <ul className="problem-list" style={{ marginBottom: '1.5rem' }}>
          <li>You pay for leads.</li>
          <li>You call fast.</li>
          <li>They don’t answer.</li>
        </ul>

        <p style={{ marginBottom: '0.5rem', fontWeight: 500 }}>Or they say:</p>
        <p style={{ fontStyle: 'italic', borderLeft: '3px solid #e5e7eb', paddingLeft: '1rem', color: '#111827' }}>
          “We’re just getting quotes.”
        </p>

        <p style={{ marginTop: '1.5rem', marginBottom: 0 }}>
          Meanwhile, the calendar still feels unstable.
        </p>
      </div>

      {/* CARD 3: THE CALL-OUT - The Reframe */}
      <div className="story-card animate-enter delay-3">
        <p><strong>The problem isn’t leads.</strong></p>
        <p style={{ fontSize: '1.25rem', marginBottom: 0, lineHeight: 1.4 }}>
          It’s how HomeAdvisor, Angi, and most agencies send you people who were never ready.
        </p>
      </div>

      {/* CARD 4: THE SHIFT & OUTCOME - The Solution */}
      <div className="story-card animate-enter delay-4">
        <p><strong>Roofers who stay booked don’t chase.</strong></p>
        <p>
          They only talk to homeowners <br className="hidden-sm" />
          who already made up their mind.
        </p>
        <p>That’s when calls turn into jobs.</p>

        <div style={{ height: '1px', background: '#e5e7eb', margin: '1.5rem 0' }}></div>

        <ul>
          <li>Fewer calls — better ones.</li>
          <li>Less wasted time.</li>
          <li>A steadier schedule.</li>
        </ul>
      </div>

      {/* CARD 5: FILTER + CTA */}
      <div className="story-card animate-enter delay-5">
        <p style={{ marginBottom: '1rem' }}>
          <strong>This is just for roofers who want to learn why their system is not working and what they can do to change it.</strong>
        </p>

        <a href="#" onClick={handleDMClick} className="btn-cta">
          👉 DM me “ROOF”
        </a>
        <p className="small-caption" style={{ marginTop: '1rem', textAlign: 'left' }}>
          I won’t be selling you something. It’ll be a simple chat about how I can help you discover the best way for you.
        </p>
      </div>

      {/* DM Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="btn-close" onClick={closeModal}>&times;</button>
            <img src={profileImg} alt="Gabriel Santos" className="modal-profile-img" />
            <h2 className="modal-title">Chat with Gabriel</h2>
            <p className="modal-sub">Choose where you want to talk:</p>

            {/* Instagram Button */}
            <a href="https://ig.me/m/itsgabriel.santos" target="_blank" rel="noopener noreferrer" className="btn-platform btn-ig">
              <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Chat on Instagram
            </a>

            {/* Messenger Button */}
            <a href="https://m.me/100091785668744" target="_blank" rel="noopener noreferrer" className="btn-platform btn-fb">
              <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.9 1.6 5.4 4.1 7V22l3.4-1.9c.8.2 1.6.4 2.5.4 5.5 0 10-4.1 10-9.2S17.5 2 12 2zm1.2 13-3.1-3.3-6 3.3 6.6-7 3.1 3.3 6-3.3-6.6 7z" />
              </svg>
              Chat on Messenger
            </a>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
