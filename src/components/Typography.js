const Typography = ({
  children = '',
  color = '#000',
  fontSize = 16,
  fontWeight = 'regular',
  addStyle = {},
  onClick = null,
}) => {
  return (
    <div style={{ fontSize, fontWeight, color, ...addStyle }} onClick={onClick}>
      {children}
    </div>
  )
}

export default Typography
