import Typography from './Typography'

const Button1 = ({
  fontSize = 16,
  width = 100,
  height = 10,
  backgroundColor = '#000',
  color = '#fff',
  text = '',
  onClick = null,
}) => {
  return (
    <button
      style={{
        width,
        height,
        backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: height / 2,
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <Typography fontSize={fontSize} fontWeight="bold" color={color}>
        {text}
      </Typography>
    </button>
  )
}

export default Button1
