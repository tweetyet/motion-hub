import { Box } from "@mui/material";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data,bodyPart,setBodyPart }) => {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        gap: 2,
        width: "100%",
        py: 2,

        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {data.map((item) => (
        <Box
          key={item.id|| item}
          itemID={item.id|| item}
          title={item.id|| item}
          sx={{
            minWidth: "140px",
            height: "80px",
            background:
              "linear-gradient(135deg, #F5E6A8 0%, #D4D4D4 100%)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            color: "#111",
            cursor: "pointer",
            flexShrink: 0,
            transition: "0.3s",

            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
         <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalScrollbar;