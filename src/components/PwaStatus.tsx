import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

type Status = 'preparing' | 'ready' | 'update' | 'offline' | 'online-uncached'

type ServiceWorkerState = 'unsupported' | 'preparing' | 'ready'

type PwaContextValue = {
  status: Status
}

const statusLabels: Record<Status, string> = {
  preparing: 'Preparing offline access',
  ready: 'Ready offline',
  update: 'Update available',
  offline: 'Offline',
  'online-uncached': 'Online but not yet cached',
}

function getInitialOnlineState() {
  return typeof navigator === 'undefined' ? true : navigator.onLine
}

function getInitialWorkerState(): ServiceWorkerState {
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) {
    return 'unsupported'
  }

  return navigator.serviceWorker.controller ? 'ready' : 'preparing'
}

const PwaContext = createContext<PwaContextValue>({
  status: 'online-uncached',
})

type PwaProviderProps = {
  children: ReactNode
}

export function PwaProvider({ children }: PwaProviderProps) {
  const [isOnline, setIsOnline] = useState(getInitialOnlineState)
  const [workerState, setWorkerState] = useState<ServiceWorkerState>(
    getInitialWorkerState,
  )
  const [reloadPending, setReloadPending] = useState(false)

  const {
    needRefresh: [needRefresh],
    offlineReady: [offlineReady],
  } = useRegisterSW({
    immediate: true,
    onNeedReload() {
      setReloadPending(true)
    },
    onOfflineReady() {
      setWorkerState('ready')
    },
    onRegisteredSW(_swScriptUrl, registration) {
      if (!registration) {
        setWorkerState('preparing')
        return
      }

      if (navigator.serviceWorker.controller) {
        setWorkerState('ready')
        return
      }

      setWorkerState('preparing')
      registration.installing?.addEventListener('statechange', (event) => {
        const worker = event.target

        if (
          worker instanceof ServiceWorker &&
          worker.state === 'activated' &&
          navigator.serviceWorker.controller
        ) {
          setWorkerState('ready')
        }
      })
    },
  })

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      return
    }

    const markControlled = () => setWorkerState('ready')

    navigator.serviceWorker.addEventListener('controllerchange', markControlled)

    return () => {
      navigator.serviceWorker.removeEventListener(
        'controllerchange',
        markControlled,
      )
    }
  }, [])

  const status: Status = !isOnline
    ? 'offline'
    : needRefresh || reloadPending
      ? 'update'
      : offlineReady || workerState === 'ready'
        ? 'ready'
        : workerState === 'preparing'
          ? 'preparing'
          : 'online-uncached'

  const value = useMemo(() => ({ status }), [status])

  return <PwaContext.Provider value={value}>{children}</PwaContext.Provider>
}

function PwaStatus() {
  const { status } = useContext(PwaContext)

  return (
    <section className={`pwa-status pwa-status--${status}`} aria-live="polite">
      <div>
        <p className="detail-label">Offline access</p>
        <h2>{statusLabels[status]}</h2>
      </div>
      <p>
        {status === 'ready' &&
          'This device has the app shell and local assets cached for the trip.'}
        {status === 'preparing' &&
          'Keep this page open briefly while the offline copy is prepared.'}
        {status === 'update' &&
          'A fresh version has been cached. Close and reopen the app when convenient.'}
        {status === 'offline' &&
          'You are offline now. Cached trip content should stay available here.'}
        {status === 'online-uncached' &&
          'You are online, but this browser has not finished caching the app yet.'}
      </p>
    </section>
  )
}

export default PwaStatus
