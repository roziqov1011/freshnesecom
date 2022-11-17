import React, { createContext, useState } from 'react'
const Context = createContext()
function Provider({children}) {
    const [category, setCategory] = useState(0)
    const [itemId, setItemId] = useState(0)
    const [order, setOrder] = useState([])
    const [mysearch, setMysearch] = useState(false)
   

    return (
        <>
            <Context.Provider value={{category, setCategory, itemId, setItemId, order, setOrder, mysearch, setMysearch}}>{children}</Context.Provider>
        </>
    )
}

export  {Provider, Context}