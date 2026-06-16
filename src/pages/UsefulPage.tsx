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
