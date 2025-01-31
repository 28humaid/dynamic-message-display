import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

export default function DynamicDisplay(){

    const [inputValue,setInputValue]=useState('Type Something to Display here')

    return(
        <>
            <TextField id="filled-basic" label="Filled" variant="filled" onChange={(e)=>setInputValue(e.target.value)}/>
            <Typography variant='h2'>{inputValue}</Typography>
        </>
    )
}