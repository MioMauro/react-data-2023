import { useState } from "react"

export const AutoComplete = () => {
    const [search, setSearch] = useState("")

    return <div className="w-50 p-5 rounded mx-auto">
        <div className="form-floating dropdown">

            <input style={{backgroundColor: "rgba(145, 158, 171, 0.04"}}
                id="search" type="text" autoComplete="off"
                className="form-control" placeholder="Search"
                value={search} onChange={(e) => 
                setSearch(e.target.value)}>
            </input>
            <label htmlFor="search">Search</label>
            <ul className="dropdown-menu">
                <li>stock1</li>
                <li>stock2</li>
                <li>stock3</li>
            </ul>
        </div>
    </div>
}