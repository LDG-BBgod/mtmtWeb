const MoPadding = ({ children, padding = 15 }) => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        padding: `0 ${padding}px`,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  )
}

export default MoPadding
