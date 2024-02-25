import { useCollageAll } from "../hooks/useCollage"
import Picture from "./Picture";
import PlaceholderComponent from "./PlaceholderComponent";

const Collage = () => {

    
    const {items, error, loader, ref} = useCollageAll();

    return (
        <> 
            <h2 className="collage-title">{ref.replaceAll("_"," ")}</h2>
            <div className="row">
            {(loader) &&
            <>
                <PlaceholderComponent />
                <PlaceholderComponent />
                <PlaceholderComponent />
                <PlaceholderComponent />
            </>
            }
            {(!loader) && 
                items.map((item,index) => (
                    <Picture photo={item} key={index}/>
                )
                )
            }
            </div>
        </>
    )
}

export default Collage;