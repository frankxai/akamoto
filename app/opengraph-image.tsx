import { ImageResponse } from 'next/og'

export const alt = 'Akamoto — The forgotten Prophecies of Darkness and Light'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Colours from app/globals.css: --ink, --paper, --paper-faint, --violet, --jade.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 96px',
          background: 'radial-gradient(1200px 700px at 50% -200px, rgba(201, 182, 255, 0.12), #0b0714 60%)',
          backgroundColor: '#0b0714',
          color: '#ece6f2',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(236, 230, 242, 0.5)',
          }}
        >
          Akamoto
        </div>
        <div style={{ display: 'flex', marginTop: 40, fontSize: 76, lineHeight: 1.08 }}>The forgotten Prophecies</div>
        <div style={{ display: 'flex', fontSize: 76, lineHeight: 1.08, fontStyle: 'italic', color: '#c9b6ff' }}>
          of Darkness and Light.
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 56,
            width: 420,
            height: 2,
            background: 'linear-gradient(90deg, rgba(201, 182, 255, 0.5), transparent)',
          }}
        />
        <div style={{ display: 'flex', marginTop: 28, fontSize: 26, color: '#36d399' }}>
          A work of fiction, in the world of Arcanea
        </div>
      </div>
    ),
    size,
  )
}
