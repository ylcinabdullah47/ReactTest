import React from "react";
import dizi from "../data";

const Home = () => {



    const redirectFunc = (id) => {
        window.location = `/test/${id}`
    }
    return (
        <div>
            {/* {
                dizi.map((ar, i) => (
                    <div style={{ margin: "15px", cursor: "pointer", border: "2px", backgroundColor: "blue", width: "50px" }}> {ar.name} </div>
                ))
            } */}

            {
                dizi.map((ar, i) => (
                    <div onClick={() => redirectFunc(ar.id)} style={{ margin: "15px", cursor: "pointer", border: "1px solid black", padding: "5px" }}> {ar.name} </div>
                ))
            }
        </div>
    )
}
export default Home