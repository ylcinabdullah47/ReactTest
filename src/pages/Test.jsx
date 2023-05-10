import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import dizi from "../data";

const Test = () => {
    const { id } = useParams();
    const { data, setData } = useState;
    useEffect(() => {
        setData(dizi)
    }, [id])

    console.log("data", data);


    const redirectFunc = () => {
        window.location = '/'
    }
    return (
        <>
            <button onClick={redirectFunc}>yönlendir</button>
            {
                data.filter(dt => dt.id === id).map((dat, i) =>
                    <div key={i}>{dat.name} </div>
                )
            }




        </>
    )
}

export default Test