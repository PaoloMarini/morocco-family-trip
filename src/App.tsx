import { useEffect, useState } from 'react'
import { navigation } from './data/trip'
import DiscoverPage from './pages/DiscoverPage'
import HomePage from './pages/HomePage'
import JourneyPage from './pages/JourneyPage'
import PlayPage from './pages/PlayPage'
import UsefulPage from './pages/UsefulPage'
import type { Section } from './types/trip'
import './App.css'
import './pages/HomePage.css'
import './pages/HomePageFixes.css'
import './styles/theme.css'

type Theme = 'light' | 'dark'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const getInitialTheme = (): Theme => {
  const storedTheme = window.localStorage.getItem('morocco-theme')

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home')
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('morocco-theme', theme)
  }, [theme])

  const renderPage = () => {
    switch (activeSection) {
      case 'journey':
        return <JourneyPage />
      case 'discover':
        return <DiscoverPage />
      case 'play':
        return <PlayPage />
      case 'useful':
        return <UsefulPage />
      default:
        return <HomePage onExplore={() => setActiveSection('journey')} />
    }
  }

  return (
    <div className="app">
      <header className="top-bar">
        <button
          className="brand"
          type="button"
          onClick={() => setActiveSection('home')}
          aria-label="Return to home"
        >
          <span className="brand__mark">M</span>
          <span>
            Morocco
            <small>Family journey</small>
          </span>
        </button>

        <div className="top-bar__actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <span className="trip-length">9 days</span>
        </div>
      </header>

      <main>{renderPage()}</main>

      <nav className="bottom-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <button
            key={item.id}
            type="button"
            className={activeSection === item.id ? 'active' : ''}
            aria-current={activeSection === item.id ? 'page' : undefined}
            onClick={() => {
              setActiveSection(item.id)
              window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion() ? 'instant' : 'smooth',
              })
            }}
          >
            <span className="bottom-nav__icon" aria-hidden="true">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
