import { Grid, Typography } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import { getUrl } from "../services";
import { Card } from "./Card"
import { NavBar } from "./NavBar";

export const MainComponent = () => {
  const [menu, setMenu] = useState<any>([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [order, setOrder] = useState("asc")
  const [totalPage, settotalPage] = useState(1);
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState("");
  const [endMsg, setEndMsg] = useState("");
 
  const currentPage = useRef(1)
 
  useEffect(() => {
    if (currentPage.current === 1) {
      fetchData(1)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, searchValue, sortValue]);


  const fetchData = async (page:number) => {
    try {
      if(page > totalPage){
        return
      }
      currentPage.current = page;
      const data = await fetch(getUrl(searchValue, sortValue, order, page), {
        headers: {
          ['ngrok-skip-browser-warning']: 'true'
        }
      });
      const response = await data.json();
      if (response.menu) {
        const { menu: { menu_list, pagination: { total_pages } } } = response;
        if (page === 1) {
          setMenu(menu_list)
        } else {
          setMenu((prev:any)=> [...prev, ...menu_list])
        }
        settotalPage(total_pages);
        setLoading(false);
      }
    } catch (error:any) {
      setErr(error)
      setLoading(false)
    }
  }


  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }
    fetchData(currentPage.current+1);
  }

  if(loading) return <h2 style={{textAlign: "center"}}>Loading ..............</h2>

  if(err) return <h2 style={{textAlign: "center"}}>Error Occoured</h2>

  return (
    <>
      <NavBar searchValue={searchValue} sortValue={sortValue} setSortValue={setSortValue} setSearch={setSearchValue} setCurrentPage={()=> currentPage.current = 1} />
      <Grid container spacing={2}>
        {menu.map(
          ({ price, name }: {price : number,name: string}, index: number) => {
            return (
              <Grid style={{ width: "100%" }} key={index} item md={3} sm={4} xs={6}>
                <Card name={name} price={price} />
              </Grid>
            );
          }
        )}
      </Grid>
      <Typography>{endMsg}</Typography>
      {currentPage.current === totalPage ? <h2 style={{textAlign: "center"}}>No More Data</h2> : <h2 style={{textAlign: "center"}}>Loading..........</h2>}
    </>
  )
}