import { useEffect, useState } from "react"
import { obtenerFotosTodas, obtenerUnaFoto } from "../storage.js";
import { useParams } from "react-router-dom";

export const useCollage = (ref) => {

    const [loader, setLoader] = useState(true);
    const [items, setItems] = useState();
    //const [error, setError] = useState([]);

    useEffect(_ => { 
        console.log("Obteniendo una foto de", ref)
        obtenerUnaFoto(ref)
        .then(res => {
            const item = res.items[0]['fullPath'];
            setItems(item);
        })
        .catch(err => alert(err))
        .finally(_ => setLoader(!loader));
    }, [])


    return {loader, items};
}


export const useCollageAll = () => {
    const {ref} = useParams();
    const [loader, setLoader] = useState(true);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(_ => {
        setLoader(true)
        obtenerFotosTodas(ref, 100)
        .then(res => {
            const item = res.items.map(e=>e.fullPath);
            console.log(item);
            setItems(item);
        })
        .catch(err => setError({error :err}))
        .finally(_ => {
            setLoader(false)
        });
    }, [ref])


    return {loader, items, error, ref};
}