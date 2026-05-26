import { Stack, Typography } from "@mui/material";
import Icon from "../../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const isSelected = bodyPart === item;

  return (
    <Stack
      component="button"
      onClick={() => setBodyPart(item)}
      alignItems="center"
      justifyContent="center"
      spacing={1.5}
      className="bodyPart-card"
      sx={{
        width: {
          lg: "190px",
          xs: "140px",
        },
        height: {
          lg: "210px",
          xs: "160px",
        },
        border: isSelected
          ? "2px solid #D4AF37"
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        background: isSelected ? "#111" : "#1a1a1a",
        boxShadow: isSelected
          ? "0px 10px 25px rgba(212, 175, 55, 0.25)"
          : "0px 4px 15px rgba(0,0,0,0.35)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        outline: "none",
        "&:hover": {
          transform: "translateY(-5px)",
          border: "2px solid #D4AF37",
          boxShadow: "0px 12px 24px rgba(212,175,55,0.18)",
        },
      }}
    >
      <Stack
        sx={{
          width: {
            lg: "65px",
            xs: "55px",
          },
          height: {
            lg: "65px",
            xs: "55px",
          },
          borderRadius: "50%",
          background: isSelected ? "#D4AF37" : "#222",
          alignItems: "center",
          justifyContent: "center",
          transition: "0.3s ease",
        }}
      >
        <img
          src={Icon}
          alt={item}
          style={{
            width: "32px",
            height: "32px",
            objectFit: "contain",
            filter: isSelected ? "brightness(0)" : "invert(1)",
          }}
        />
      </Stack>

      <Typography
        textTransform="capitalize"
        fontWeight="700"
        fontSize={{
          lg: "18px",
          xs: "14px",
        }}
        letterSpacing="0.5px"
        color={isSelected ? "#D4AF37" : "#fff"}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;