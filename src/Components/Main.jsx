import { Outlet } from "react-router-dom";
import { useDir } from "../hooks/useDir"
import Banner from "./Banner";
import { createContext } from "react";

export const PageContext = createContext();
const Main = () => {

    const { directorios, error, loader } = useDir();

    return (
        <PageContext.Provider value={{ directorios, loader, error }}>
            <Banner />

            <div className="content">

                <p>Aquí les presentamos algunas de las actividades que hemos hecho, entre ellas excursiones y más actividades como talleres de risoterapia y charlas. En las cuales nos hemos unido más como familia, aumentando el compañerismo y la asertividad entre los alumnos, no solo del segundo año del Ciclo Superior de Asistencia a la Dirección, sino también, con el resto de los estudiantes que aquí se encuentran.
                </p>
                <h2 style={{ textAlign: "center" }} id="excursiones">Excursiones</h2>

                <Outlet />
            </div>

        </PageContext.Provider>
    )
}

export default Main;