import { ImageResponse } from 'next/og'

export const alt = 'Mohamed Omar Farook - Senior Software Engineer'
export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#f7f9fc',
          color: '#0f3361',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Arial, sans-serif',
          height: '100%',
          justifyContent: 'space-between',
          padding: '70px 84px',
          width: '100%'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: '#1f7a6d',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 0,
              marginBottom: 34,
              textTransform: 'uppercase'
            }}
          >
            Frontend Architecture · React · Next.js · TypeScript
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: 0,
              lineHeight: 1.08,
              maxWidth: 930
            }}
          >
            Mohamed Omar Farook
          </div>
          <div
            style={{
              color: '#26364d',
              fontSize: 42,
              fontWeight: 500,
              lineHeight: 1.25,
              marginTop: 26,
              maxWidth: 960
            }}
          >
            Senior Software Engineer building scalable enterprise frontend systems.
          </div>
        </div>
        <div
          style={{
            alignItems: 'center',
            borderTop: '2px solid rgba(15, 51, 97, 0.16)',
            color: '#42526b',
            display: 'flex',
            fontSize: 28,
            justifyContent: 'space-between',
            paddingTop: 28
          }}
        >
          <span>omarfarook.com</span>
          <span>Singapore</span>
        </div>
      </div>
    ),
    {
      ...size
    }
  )
}
