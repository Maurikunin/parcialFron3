import { useState } from "react";
import "../App.css";

// eslint-disable-next-line react/prop-types
const Form=({onSubmit}) => {

    const [nombre, setNombre] = useState("");

    const [club, setClub] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (e) => {

    e.preventDefault();

    if (nombre.trim().length < 3 || /^\s/.test(nombre)) {
      setError('El nombre no puede ser menor a 3 caracteres o tener espacios en blanco');
      return;
    }

    if (club.length < 6) {
      setError('El club no puede ser menor de 6 caracteres');
      return;
    }

    onSubmit({ nombre, club });
    setError('');
    setNombre('');
    setClub('');
  };

    return (


    <div>
        <form className = "form-container" onSubmit={handleSubmit}>
            <div>

                <h1>Tu club favorito</h1>
                <label>Tu nombre</label>
                <input type="text" placeholder="" value={nombre} onChange={(x) => {
                    setNombre(x.target.value);
                    }}/>


                <label>Tu club favorito</label>
                <input type="text" value={club} placeholder="" onChange={(x) => {
                  setClub(x.target.value)
                }}/>


                <button type="submit">Enviar</button>
            </div>
            {error && <p>{error}</p>}
        </form>
                
    </div>
    )
            }
    
    
    


export default Form;