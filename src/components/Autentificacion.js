import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Alert } from "react-bootstrap";

function Autentificacion(){
    const apiURL = "http://localhost:3001"

    const [inicioIncorrecto, setInicioIncorrecto] = useState(false);

    const [formValues, setFormValues] = useState({login:"", password:""})

    const handleNameChange = (event) => {
        setFormValues({...formValues, login: event.target.value})
        setInicioIncorrecto(false)

    }
    const handlePasswordChange = (event) => {
        setFormValues({...formValues, password: event.target.value})
        setInicioIncorrecto(false)

    }

    const handleSubmit = (event) => {
        const dataJSON = JSON.stringify(formValues)
        console.log(dataJSON)
        fetch(`${apiURL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValues)
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.status === "success"){
                // Redirigir a la pagina de robots
                console.log("Inicio de sesion correcto")
                window.location.href = "/robots"
            }else{
                setInicioIncorrecto(true)
                console.log("Inicio de sesion incorrecto")
            }
        })

    }

    return(
        <div className="container" style={{maxWidth: "500px", margin: "auto", padding: "2em"}}>
            <h3 style={{textAlign: "center", marginBottom: "1em", fontWeight: '700'}}>Inicio de sesión</h3>

            <Form>
                <Form.Group className="mb-6" controlId="formBasicText">
                <Form.Label style={{fontWeight: 'bold'}}>Nombre de Usuario</Form.Label>
                <Form.Control style={{borderRadius: '0', backgroundColor: '#D9D9D9'}} type="text" placeholder="" onChange={handleNameChange} value={formValues.login}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{fontWeight: 'bold'}}>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="" onChange={handlePasswordChange} value={formValues.password} style={{borderRadius: '0', backgroundColor: '#D9D9D9'}} />
                </Form.Group>
                <div display="flex" style={{display: "flex", justifyContent: "space-between", gap: "2em"}}>
                    <Button style={{width: '100%', borderRadius:'0', backgroundColor: '#003B93', fontWeight: 'bold'}} variant="primary" onClick={handleSubmit}>
                    Ingresar
                    </Button>
                    <Button style={{width: '100%', borderRadius:'0', backgroundColor: "#E75D5D", fontWeight: 'bold', color: 'black'}} variant="danger">
                    Cancelar
                    </Button>
                </div>
                {/* Mensaje de contrase;a incorrecta */}
                {inicioIncorrecto ? (
                    <p style={{color: '#E75D5D', fontWeight: 'bold', marginTop: '1em'}}>
                        Error de autenticación. Revise sus credenciales
                    </p>
                ): <></>}
                
            </Form>
            
        </div>
    )
}
export default Autentificacion;