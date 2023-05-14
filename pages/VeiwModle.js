import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Details } from '../components/DeatailPage/DetailPageData';
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import { useState } from "react";
import { 
  Checkbox,
  IconButton,
  Link,
  Rating,} from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {Details.map((item) => (
              <Box sx={{ display: "flex", gap: 3 }}>
                <img
                  height="100%"
                  width="50%"
                  src={item.Image}
                  alt="image of product"
                />
                <Box sx={{ width: "70%", padding: 1 }}>
                  <Box
                    sx={{ borderBottom: "1px solid #abb8c3", paddingBottom: 1 }}
                  >
                    <Typography sx={{ fontSize: 28 }}>{item.Title}</Typography>
                    <Box sx={{ display: "flex", marginTop: 0.8 }}>
                      <Typography sx={{ color: "#666" }}>Brand: </Typography>
                      <Typography
                        sx={{
                          color: "#0066cc",
                          paddingLeft: 0.8,
                          ":hover": { color: "#fcb900" },
                        }}
                      >
                        {item.Brand}
                      </Typography>
                      <Box
                        sx={{
                          width: "1px",
                          height: 12,
                          backgroundColor: "#abb8c3",
                          marginX: 1.6,
                          marginY: 0.6,
                        }}
                      />
                      <Rating
                        sx={{ fontSize: 16, marginY: 0.4 }}
                        name="read-only"
                        value={item.StarRate}
                        readOnly
                      />
                      <Typography
                        sx={{ fontSize: 14, marginLeft: 1, color: "#666" }}
                      >
                        {item.Reviews}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ borderBottom: "1px solid #abb8c3", paddingBottom: 3 }}
                  >
                    <Typography
                      sx={{
                        fontSize: 30,
                        fontWeight: "bold",
                        paddingTop: 1.4,
                        paddingBottom: 0.6,
                      }}
                    >
                      ${item.Price}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Typography sx={{ fontSize: 14 }}>Status:</Typography>
                      <Typography
                        sx={{
                          fontSize: 14,
                          color: "#8bc500",
                          fontWeight: "bold",
                        }}
                      >
                        {item.InStockORnot}
                      </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2 }}>
                      <Box sx={{ display: "flex", textAlign: "baseline" }}>
                        <Box
                          style={{
                            fontSize: 30,
                            margin: 0,
                            backgroundColor: "#abb8c3",
                            padding: 0,
                            marginTop: 6,
                            width: 8,
                            height: 8,
                            borderRadius: 15,
                          }}
                        ></Box>
                        <Typography
                          style={{
                            fontSize: 14,
                            marginLeft: 10,
                            color: "#666",
                          }}
                        >
                          {item.TypeLine1}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "baseline",
                          marginTop: 0.8,
                        }}
                      >
                        <Box
                          style={{
                            fontSize: 30,
                            margin: 0,
                            backgroundColor: "#abb8c3",
                            padding: 0,
                            marginTop: 6,
                            width: 8,
                            height: 8,
                            borderRadius: 15,
                          }}
                        ></Box>
                        <Typography
                          style={{
                            fontSize: 14,
                            marginLeft: 10,
                            color: "#666",
                          }}
                        >
                          {item.TypeLine2}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "baseline",
                          marginTop: 0.8,
                        }}
                      >
                        <Box
                          style={{
                            fontSize: 30,
                            margin: 0,
                            backgroundColor: "#abb8c3",
                            padding: 0,
                            marginTop: 6,
                            width: 8,
                            height: 8,
                            borderRadius: 15,
                          }}
                        ></Box>
                        <Typography
                          style={{
                            fontSize: 14,
                            marginLeft: 10,
                            color: "#666",
                          }}
                        >
                          {item.TypeLine3}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "baseline",
                          marginTop: 0.8,
                        }}
                      >
                        <Box
                          style={{
                            fontSize: 30,
                            margin: 0,
                            backgroundColor: "#abb8c3",
                            padding: 0,
                            marginTop: 6,
                            width: 8,
                            height: 8,
                            borderRadius: 15,
                          }}
                        ></Box>
                        <Typography
                          style={{
                            fontSize: 14,
                            marginLeft: 10,
                            color: "#666",
                          }}
                        >
                          {item.TypeLine4}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "baseline",
                          marginTop: 0.8,
                        }}
                      >
                        <Box
                          style={{
                            fontSize: 30,
                            margin: 0,
                            backgroundColor: "#abb8c3",
                            padding: 0,
                            marginTop: 6,
                            width: 8,
                            height: 8,
                            borderRadius: 15,
                          }}
                        ></Box>
                        <Typography
                          style={{
                            fontSize: 14,
                            marginLeft: 10,
                            color: "#666",
                          }}
                        >
                          {item.TypeLine5}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: 2.8,
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        border: "1px solid black",
                        padding: 0,
                        borderRadius: 0,
                        width: 120,
                        height: 40,
                      }}
                    >
                      <IconButton onClick={decreaseCount}>
                        <RemoveOutlinedIcon sx={{ color: "#abb8c3" }} />
                      </IconButton>
                      <Typography>{count}</Typography>
                      <IconButton onClick={increaseCount}>
                        <AddOutlinedIcon sx={{ color: "#abb8c3" }} />
                      </IconButton>
                    </Box>
                    <Button
                      sx={{
                        textTransform: "capitalize",
                        backgroundColor: "#fcb800",
                        color: "black",
                        fontSize: 18,
                        fontWeight: "bold",
                        width: "200px",
                        height: "55px",
                        border: "none",
                        borderRadius: 1,
                        ":hover": {
                          textTransform: "capitalize",
                          backgroundColor: "#fcb800",
                        },
                      }}
                    >
                      Add to Card
                    </Button>
                    <Checkbox
                      icon={
                        <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
                      }
                      checkedIcon={
                        <FavoriteOutlinedIcon
                          sx={{ color: "black", fontSize: 30 }}
                        />
                      }
                    />
                    <IconButton sx={{ marginLeft: -2 }}>
                      <InsertChartOutlinedTwoToneIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>
      </Modal>
    </div>
  );
}