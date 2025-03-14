
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
                <div className='col-7'>
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

                <div className="col-5">
                {detalle ? (
                        <div className="card">
                            <img src={robotSeleccionado.imagen + "?raw=true"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{robotSeleccionado.nombre}</h5>
                                <p className="card-text">Modelo: {robotSeleccionado.modelo}</p>
                                <p className="card-text">Empresa Fabricante: {robotSeleccionado.empresaFabricante}</p>
                                <p className="card-text">Año de Fabricación: {robotSeleccionado.añoFabricacion}</p>
                                <p className="card-text">Capacidad de Procesamiento: {robotSeleccionado.capacidadProcesamiento}</p>
                                <p className="card-text">Humor: {robotSeleccionado.humor}</p>
                            </div>
                    </div>
                ) : (<></>)}
                </div>
            </div>
        </div>
    );
}
export default RobotsList;