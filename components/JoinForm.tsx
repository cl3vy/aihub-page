'use client';

export default function JoinForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-field">
        <label htmlFor="jf-name">Full name</label>
        <input id="jf-name" type="text" placeholder="Your name" required />
      </div>
      <div className="form-field">
        <label htmlFor="jf-email">Email</label>
        <input id="jf-email" type="email" placeholder="you@email.com" required />
      </div>
      <div className="form-field">
        <label htmlFor="jf-role">I am a…</label>
        <select id="jf-role">
          <option>Student</option>
          <option>Researcher</option>
          <option>Professional</option>
          <option>Policymaker</option>
          <option>Founder</option>
          <option>Educator</option>
          <option>Just curious</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="jf-interest">What interests you?</label>
        <textarea
          id="jf-interest"
          placeholder="Events, research, the incubator, education…"
          style={{ minHeight: 90 }}
        />
      </div>
      <button className="btn btn-ink" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
        Request to join <span className="arrow">→</span>
      </button>
      <p className="caption" style={{ justifyContent: 'center', marginTop: 14 }}>
        [ Connected to membership intake — slot ]
      </p>
    </form>
  );
}
