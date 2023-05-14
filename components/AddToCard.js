import { Box, Typography } from "@mui/material"


export  function AddToCard () {
    return (
        <>
        <Box sx={{ width: '70%', margin: "auto"}}>
            <Box sx={{textAlign: "center", marginTop: 10}}>
                <Typography sx={{fontSize: 50 , fontWeight: "bold"}}>Cart</Typography>
            </Box>
            <Box sx={{backgroundColor: "#e6e6e6", borderBottom: "1px solid #c4c4c4", paddingY: 1, display: "flex", marginTop: 12}}>
                <Box sx={{width: "50%", textAlign: "center"}}>
<Typography  sx={{  fontWeight: "bold"}}>PRODUCT</Typography>
                </Box>
                <Box sx={{width: "30%", textAlign: "end"}}>
<Typography  sx={{  fontWeight: "bold"}}>	PRICE</Typography>
                </Box>
                <Box sx={{width: "30%", textAlign: "center"}}>
<Typography  sx={{  fontWeight: "bold"}}>QUANTITY</Typography>
                </Box>
                <Box sx={{width: "25%", textAlign: "start"}}>
<Typography  sx={{  fontWeight: "bold"}}>	TOTAL</Typography>
                </Box>
                {map(() => {
                    <Box>
                        
                    </Box>
                })}
            </Box>
        </Box>
        </>
    )
}