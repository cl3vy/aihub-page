'use client';

import { useState } from 'react';

const INTENTS = ['General', 'Partnership', 'Incubator application', 'Press'];

export default function ContactForm() {
  const [intent, setIntent] = useState('General');

  return (
    <div className="card" style={{ padding: 'clamp(26px,3vw,42px)' }}>
      <div className="eyebrow no-rule">What&apos;s this about?</div>
      <div className="intent-row">
        {INTENTS.map((it) => (
          <button
            key={it}
            type="button"
            className={`intent-btn${intent === it ? ' on' : ''}`}
            onClick={() => setIntent(it)}
          >
            {it}
          </button>
        ))}
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid g-2" style={{ gap: '0 18px' }}>
          <div className="form-field">
            <label htmlFor="cf-name">Name</label>
            <input id="cf-name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-field">
            <label htmlFor="cf-email">Email</label>
            <input id="cf-email" type="email" placeholder="you@email.com" required />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="cf-org">Organisation</label>
          <input id="cf-org" type="text" placeholder="Company, university, NGO (optional)" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-interest">Interest</label>
          <select id="cf-interest" defaultValue={intent} key={intent}>
            <option>Joining the community</option>
            <option>Research collaboration</option>
            <option>Partnership</option>
            <option>Incubator / Accelerator</option>
            <option>Education programs</option>
            <option>Press / media</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="cf-msg">Message</label>
          <textarea id="cf-msg" placeholder="Tell us a little more…" required />
        </div>
        <button className="btn btn-ink" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
          Send message <span className="arrow">→</span>
        </button>
        <p className="caption" style={{ justifyContent: 'center', marginTop: 14 }}>
          [ Connected to contact inbox, slot ]
        </p>
      </form>
    </div>
  );
}
