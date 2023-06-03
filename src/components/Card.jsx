
const Card = (data) => {
  return (
    <div className="card">
                <h2>Hola {data.nombre}</h2>
                <h5>Tu club de futbol favorito es:</h5>
                <button>{data.club}</button>         

    </div>
  )
}

export default Card