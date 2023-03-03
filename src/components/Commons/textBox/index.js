import React from 'react';
import { Box,TextField,InputAdornment } from "@mui/material"
import useStyles from "./styles/textBoxStyle"
const TextBox=({
    fullWidth=false,
    error=false,
    size="small",
    onBlur,
    name="",
    title='',
    value='',
    required=false,
    onChange,
    autoFocus=false,
    multiline=false,
    endAdornmentString='',
    inputpropvalue={},
    isDecimal=false,
    minimum='',
    maximum='',
    ...rest
})=>{
const classes = useStyles();
// const [current,setCurrent]= React.useState(0);
// React.useEffect(() => {
// minimum && maximum && setCurrent(value.length)
// },[value])
    return (
        <>
        <Box display="flex" flexDirection="column">
            {title && <Box className={classes.titleStyle}>{title}{required && <span style={{ color: "tomato" }}>*</span>} {minimum && maximum && `(${value.length}/${maximum})`}</Box>}
        <TextField
            margin="dense" 
            variant="outlined"
            error={error}
            size={size}
              required={required}
              fullWidth={fullWidth}
              onBlur={onBlur && onBlur}
              name={name}
              value={value}
              onChange={(e)=>(maximum && minimum ? maximum+1>e.target.value.length && onChange(e):onChange(e))}
              autoFocus={autoFocus}
              multiline={multiline}
              InputProps={{
                style: { height: 28, fontSize: 13,padding:'0px',paddingLeft:5 },
                ...inputpropvalue,
              }}
              sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
              }}
              InputLabelProps={{ shrink: false, }}
              {...rest}
            />
            {maximum && minimum && value && value.length<=minimum && <span style={{color:'tomato',fontSize: 12 }}>Minimum characters should be: {minimum}</span>}
            </Box>
        </>
    )
}
export default TextBox