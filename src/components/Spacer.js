const Spacer = ({ vertical = true, space = 0 }) => {
  return vertical ? (
    <div style={{ marginTop: space }}></div>
  ) : (
    <span style={{ marginLeft: space }}></span>
  )
}

export default Spacer
