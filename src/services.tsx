export const getUrl = (searchValue:string,sortValue: string,price: string,currentPage: number) => {
     if(searchValue && sortValue){
     return `${process.env.REACT_APP_API_URL}?page=${currentPage}&order=${sortValue}&sort_by=price&name=${searchValue}`
     }else if(searchValue){
    return `${process.env.REACT_APP_API_URL}?page=${currentPage}&name=${searchValue}`
   }else if(sortValue){
    return `${process.env.REACT_APP_API_URL}?page=${currentPage}&order=${sortValue}&sort_by=price`
   }
   return `${process.env.REACT_APP_API_URL}?page=${currentPage}`
}