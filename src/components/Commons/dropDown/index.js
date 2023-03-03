import { Box,Select,MenuItem,CircularProgress } from "@mui/material"
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
    titleFontWeight='',
    loading=false,
    autoFocus=false,
    multiline=false,
    options=[],
    children,
    ...rest
})=>{
const classes = useStyles();
    return (
        <>
        <Box display="flex" flexDirection="column">
            {title && <Box className={classes.titleStyle} style={{fontWeight : titleFontWeight}}>{title}{required && <span style={{ color: "tomato" }}>*</span>}<span>{loading && <CircularProgress size={15}/>} </span></Box>}
        <Select
          margin="dense"
          variant="outlined"
          error={error}
          size={size}
          required={required}
          fullWidth={fullWidth}
          onBlur={onBlur && onBlur}
          name={name}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          sx={{
            "& legend": { display: "none" },
            "& fieldset": { top: 0 },
            height: 28,
            padding: "10px",
            fontSize: 13,
            width: "150px",
          }}
          style={{fontSize:13}}
          InputLabelProps={{ shrink: false }}
          {...rest}
        >
          {children}
        </Select>
      </Box>
    </>
  );
};
export default TextBox;
