import { usefulItems } from '../data/trip'

const lookingPrompts = [
  'A door, tile or pattern you would photograph again',
  'A sound that tells you where you are',
  'A colour that feels very Marrakesh',
  'A mountain or desert view that looks unreal',
]

const emergencyItems = [
  { label: 'Police', value: '19' },
  { label: 'Ambulance / fire', value: '15' },
  { label: 'Gendarmerie', value: '177' },
  { label: 'European mobile emergency', value: '112' },
]

const stays = [
  'Riad Sultan Suleiman - Marrakesh arrival stay',
  'Ouirgane Ecolodge - High Atlas stay',
  'Agafay Pearl Camp - desert camp',
  'Riad Salman - final Marrakesh stay',
]

function UsefulPage() {
  return (
    <section className="page-section page-section--top">
      <div className="section-heading">
        <p className="eyebrow">Notes and safety</p>
        <h1 className="page-title">Trip notes</h1>
        <p>
          Quick reference for the trip: emergency numbers first, then small
          clues, words and observation ideas for understanding the places we are
          visiting.
        </p>
      </div>

      <section className="install-card" aria-labelledby="emergency-title">
        <div>
          <p className="detail-label">Emergency</p>
          <h2 id="emergency-title">Numbers to know in Morocco</h2>
        </div>

        <div className="quick-facts">
          {emergencyItems.map((item) => (
            <div className="quick-fact" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <p className="emergency-note">
          In a real emergency, call first, then contact the accommodation or a
          parent. Keep this page available offline where possible.
        </p>
      </section>

      <div className="quick-facts">
        {usefulItems.map((item) => (
          <div className="quick-fact" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <section className="install-card" aria-labelledby="stays-title">
        <div>
          <p className="detail-label">Where we are staying</p>
          <h2 id="stays-title">Four bases</h2>
        </div>
        <ol>
          {stays.map((stay) => (
            <li key={stay}>{stay}</li>
          ))}
        </ol>
      </section>

      <section className="install-card" aria-labelledby="noticing-title">
        <div>
          <p className="detail-label">Photo mission</p>
          <h2 id="noticing-title">Four things to look for</h2>
        </div>

        <div className="install-card__steps">
          <div>
            <h3>In Marrakesh</h3>
            <ol>
              <li>Find a favourite door.</li>
              <li>Spot a tile pattern that repeats perfectly.</li>
              <li>Look up at painted wood ceilings.</li>
              <li>Compare the riad courtyard with the street outside.</li>
            </ol>
          </div>

          <div>
            <h3>In the mountains and desert</h3>
            <ol>
              <li>Notice the colour of the earth.</li>
              <li>Look for olive trees and terraced fields.</li>
              <li>Watch how shadows change at sunset.</li>
              <li>Try to photograph the biggest sky.</li>
            </ol>
          </div>
        </div>
      </section>

      <div className="notice-card">
        <strong>Choose one each day</strong>
        <p>{lookingPrompts.join(' - ')}</p>
      </div>
    </section>
  )
}

export default UsefulPage
