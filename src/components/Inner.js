const Inner = ({ children, maxWidth = 1100 }) => {
  return (
    <div
      style={{
        maxWidth,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100%',
      }}
    >
      {children}
    </div>
  )
}

export default Inner
