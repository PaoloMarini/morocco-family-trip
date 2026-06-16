import PwaStatus from '../components/PwaStatus'
import { usefulItems } from '../data/trip'

function UsefulPage() {
  return (
    <section className="page-section page-section--top">
      <div className="section-heading">
        <p className="eyebrow">Keep this close</p>
        <h1 className="page-title">Useful information</h1>
        <p>
          Essential details for money, language, accommodation and getting
          around.
        </p>
      </div>

      <div className="quick-facts">
        {usefulItems.map((item) => (
          <div className="quick-fact" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <PwaStatus />

      <section className="install-card" aria-labelledby="install-title">
        <div>
          <p className="detail-label">Install</p>
          <h2 id="install-title">Save it before we fly</h2>
        </div>

        <div className="install-card__steps">
          <div>
            <h3>Android Chrome</h3>
            <ol>
              <li>Open this page in Chrome.</li>
              <li>Open the Chrome menu.</li>
              <li>Tap Install app or Add to Home screen.</li>
              <li>Open the installed app once before the flight.</li>
            </ol>
          </div>

          <div>
            <h3>iPhone Safari</h3>
            <ol>
              <li>Open this page in Safari.</li>
              <li>Tap Share.</li>
              <li>Tap Add to Home Screen.</li>
              <li>Open the saved app once before the flight.</li>
            </ol>
          </div>
        </div>
      </section>

      <div className="notice-card">
        <strong>Important</strong>
        <p>
          We will verify and complete emergency numbers, addresses, transfer
          details and map links before treating this section as authoritative.
        </p>
      </div>
    </section>
  )
}

export default UsefulPage
