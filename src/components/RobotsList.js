import './RobotList.css';

const { useState, useEffect, use } = require("react");
function RobotsList() {
    const apiURL = "http://localhost:3001";
    const [robots, setRobots] = useState([]);
    const [detalle, setDetalle] = useState(false);
    const [robotSeleccionado, setRobotSeleccionado] = useState({});



    useEffect(() => {
        fetch(`${apiURL}/robots`)
            .then(response => response.json())
            .then(data => setRobots(data));
    }, []);

    const handleClickedRobot = (robot) => {
        fetch(`${apiURL}/robots/${robot.id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setRobotSeleccionado(data);
                setDetalle(true);
            });
    }

    return (
        <div className="container">
            <div className='row'>
                <div className='col-8'>
                <table className="table">
                            <thead>
                                <tr className="table-dark">
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Empresa Fabricante</th>
                                </tr>
                            </thead>
                            <tbody>
                                {robots.map((robot, index) => (
                                    <tr key={robot.id} onClick={() => handleClickedRobot(robot)}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{robot.nombre}</td>
                                        <td>{robot.modelo}</td>
                                        <td>{robot.empresaFabricante}</td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                </div>

                <div className="col-4">
                {detalle ? (
                        <div className="card" style={{padding: "0 1em", backgroundColor: '#D9D9D980', borderRadius: '0', border:  '1px solid black'}}>
                            <h5 className="card-title" style={{fontWeight: 'bold', textAlign: 'center', marginTop: "1em"}}>{robotSeleccionado.nombre}</h5>
                            <img src={robotSeleccionado.imagen + "?raw=true"} style={{width: '50%', margin: '0 auto', border: '1px solid black', borderRadius: '0'}} className="card-img-top" alt={"Imagen de " + robotSeleccionado.nombre} />
                            <div className="card-body">
                                <p className="card-text"><strong>-> Año de Fabricación:</strong> {robotSeleccionado.añoFabricacion}</p>
                                <p className="card-text"><strong>-> Capacidad de Procesamiento:</strong> {robotSeleccionado.capacidadProcesamiento}</p>
                                <p className="card-text"><strong>-> Humor:</strong> {robotSeleccionado.humor}</p>
                            </div>
                        
                    </div>
                ) : (<></>)}
                </div>
            </div>
        </div>
    );
}
export default RobotsList;