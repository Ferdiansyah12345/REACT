import React, {useEffect, useState} from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";


export default function List() {
    //state fakultas
    const [fakultas, setFakultas] = useState([]);

    useEffect( () => {
        axios
        .get("https://academic-mi5a.vercel.app/api/api/fakultas")
        .then( (response) => {
            console.log(response);
            setFakultas(response.data.result)
        })
    }, [])

    return (
        <>
            <h2>List Fakultas</h2>
            <NavLink> to="/fakultas/create" className="btn btn-primary mb-3"
                create
            </NavLink>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nama</th>
                    </tr>
                </thead>
                <tbody>
                    {fakultas.map( (data) => (
                        <tr key={data.id}>
                            <td>{data.nama}</td>
                        </tr>
                    ) )}
                </tbody>
            </table>
        </>
    )
}