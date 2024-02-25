import { useContext } from "react"
import { PageContext } from "./Main";
import CollageContainer from "./CollageContainer";

const Albums = () => {
    const {directorios, loader, error} = useContext(PageContext);

    return (
        <div className="album">
        {(!loader && !error) &&
            directorios.map((item, index) => (
                <div className="presentation" key={index}>
                    <div>
                        <CollageContainer key={index} reference={item} >
                            <h3>{item.replaceAll("_", " ")}</h3>
                        </CollageContainer>
                    </div>
                </div>
            ))
        }

        {error &&
            <div>
                <h2>Error: {error}</h2>
            </div>
        }
    </div>
    )
}

export default Albums;