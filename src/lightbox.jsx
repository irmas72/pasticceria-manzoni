import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const LightboxContext = createContext(() => {})

// Hook: restituisce open(items, index) — items = [{ src, caption }]
export function useLightbox() {
  return useContext(LightboxContext)
}

export function LightboxProvider({ children }) {
  const [state, setState] = useState(null) // { items, index }

  const open = useCallback((items, index = 0) => setState({ items, index }), [])
  const close = useCallback(() => setState(null), [])
  const prev = useCallback(
    () => setState((s) => (s ? { ...s, index: (s.index - 1 + s.items.length) % s.items.length } : s)),
    [],
  )
  const next = useCallback(
    () => setState((s) => (s ? { ...s, index: (s.index + 1) % s.items.length } : s)),
    [],
  )

  useEffect(() => {
    if (!state) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [state, close, prev, next])

  const cur = state ? state.items[state.index] : null
  const many = state && state.items.length > 1

  return (
    <LightboxContext.Provider value={open}>
      {children}
      {state && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox__close" aria-label="Chiudi" onClick={close}>×</button>
          {many && (
            <button
              className="lightbox__nav lightbox__nav--prev"
              aria-label="Precedente"
              onClick={(e) => { e.stopPropagation(); prev() }}
            >‹</button>
          )}
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={cur.src} alt={cur.caption || ''} />
            {cur.caption && <figcaption>{cur.caption}</figcaption>}
          </figure>
          {many && (
            <button
              className="lightbox__nav lightbox__nav--next"
              aria-label="Successiva"
              onClick={(e) => { e.stopPropagation(); next() }}
            >›</button>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  )
}
