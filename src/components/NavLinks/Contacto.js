import React from "react";
import '../NavLinks/Contacto.css'


const Contacto= () => {

    return(
        <div className="container">
            <form className="container"> 
                <div class="mb-3">
                  <label className="form-label">Email </label>
                  <br></br>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label className="form-label">Contaseña</label>
                  <br></br>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label">No soy un robot</label>
                </div>
                <button type="submit" class="Button btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto