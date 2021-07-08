const Square = ({marker, onclick}) => (
    <div className="square" onClick={() => onclick()}>{marker}</div>
  )

export default Square