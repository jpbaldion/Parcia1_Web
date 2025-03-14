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
        <div className="container">
            <h1 style={{textAlign: "center"}}>Inicio sesion</h1>

            <Form>
                <Form.Group className="mb-6" controlId="formBasicText">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control type="text" placeholder="" onChange={handleNameChange} value={formValues.login}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="" onChange={handlePasswordChange} value={formValues.password} />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
                Ingresar
                </Button>
                <Button variant="danger">
                Cancelar
                </Button>
                {/* Mensaje de contrase;a incorrecta */}
                {inicioIncorrecto ? (
                    <Alert variant="danger">
                        <Alert.Heading>Verifica tus Credenciales</Alert.Heading>
                    </Alert>
                ): <></>}
                
            </Form>
            
        </div>
    )
}
export default Autentificacion;