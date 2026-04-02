import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#042C5C',
          borderRadius: '4px',
        }}
      >
        <span
          style={{
            color: '#CC4C04',
            fontSize: 18,
            fontWeight: 900,
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}
        >
          SB
        </span>
      </div>
    ),
    { ...size }
  )
}
