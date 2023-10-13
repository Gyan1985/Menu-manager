import React from "react"

export const NavBar = ({ searchValue, setSearch, setCurrentPage, sortValue, setSortValue }: any) => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark bg-light justify-content-between">
                <div className="container-fluid justify-content-between">
                    <a className="navbar-brand" style={{ color: "white" }}>Menu Card</a>
                    <div className="d-flex justify-content-end w-md-75">
                        <div className="form-inline mr-3" style={{ minWidth: '100px' }}>
                            <input className="form-control mr-sm-2"
                                value={searchValue}
                                type="search"
                                placeholder="Search by name"
                                aria-label="Search"
                                onChange={(e) => {
                                    setCurrentPage()
                                    setSearch(e.target.value)
                                }}
                            />
                        </div>
                        <div className="form-inline ml-4" style={{ minWidth: '100px' }}>
                            <select
                                value={sortValue}
                                onChange={(e) => {
                                    setSortValue(e.target.value)
                                    setCurrentPage()
                                }}
                                className="form-control" aria-label="Search" >
                                <option>Sort by price</option>
                                <option value={"desc"}>Price hign to low</option>
                                <option value={"asc"}>Price low to high</option>
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}