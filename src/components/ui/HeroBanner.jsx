// import { Box, Stack, Typography, Button } from "@mui/material";
// const HeroBanner = () => {
//   return (
//     <Box
//       sx={{
//         mt: { lg: "212px", xs: "70px" },
//         ml: { sm: "50px" },
//       }}
//       position="relative"
//       p="20px"
//     >
//       <Typography
//         fontWeight="600"
//         fontSize="26px"
//         color="#D4AF37"
//         className="text-6xl uppercase
//     font-extrabold
//     bg-gradient-to-r
//     from-[#322c15]
//     via-black
//     to-[#4b4a45]
//     bg-clip-text
//     text-transparent"
//       >
//         Fitness Club
//       </Typography>

//       <Typography
//         fontWeight="700"
//         sx={{ fontSize: { lg: "44px", xs: "40px" } }}
//         mb="23px"
//         mt="30px"
//         className="font-extrabold tracking-wide text-6xl
//     font-extrabold
//     bg-gradient-to-r
//     from-[#3b3616]
//     via-yellow-300
//     to-[#FFF2B2]
//     bg-clip-text
//     text-transparent"
//       >
//         {" "}
//         Sweat, Smile <br /> and Repeat
//       </Typography>

//       <Typography fontSize="22px" lineHeight="35px" className="text-[#c0bdb0]">
//         {" "}
//         Check out the most effective exercises!
//       </Typography>

//     <Button
//   variant="contained"
//   href="#exercises"
//   sx={{
//     mt: "30px",
//     px: 2,
//     py: 1.8,

//     background:
//       "linear-gradient(135deg, #B0B0B0, #F5E6A8)",

//     color: "#111",
//     fontSize: "16px",
//     fontWeight: 700,
//     textTransform: "none",

//     borderRadius: "14px",

//     border: "1px solid rgba(255,255,255,0.08)",

//     boxShadow:
//       "0 10px 30px rgba(245, 230, 168, 0.18)",

//     transition: "all 0.3s ease",

//     "&:hover": {
//       background:
//         "linear-gradient(135deg, #F5E6A8, #D6D6D6)",

//       transform: "translateY(-3px)",

//       boxShadow:
//         "0 14px 40px rgba(245, 230, 168, 0.28)",

//       color: "#000",
//     },
//   }}
// >
//   Explore Exercises
// </Button>

//       <Typography
//         fontWeight={600}
//         color="#D4AF37"
//         sx={{
//           opacity: 0.1,
//           display: { lg: "block", xs: "none" },
//           fontSize: "200px",
//         }}
//       >
//         Exercise
//       </Typography>

//       <img src="/bf.png" alt="banner" className="hero-banner-img hover:scale-110 ease-in duration-300" />
//     </Box>
//   );
// };

// export default HeroBanner;
import { Box, Typography, Button } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      className="hero-banner"
      sx={{
        mt: { lg: "120px", md: "100px", xs: "40px" },

        px: { lg: "80px", md: "50px", xs: "20px" },

        py: { lg: "40px", xs: "20px" },

        minHeight: { lg: "100vh", xs: "auto" },

        display: "flex",
        flexDirection: { lg: "row", xs: "column" },

        alignItems: "center",
        justifyContent: "space-between",

        gap: { lg: "40px", xs: "50px" },

        position: "relative",

        overflow: "hidden",

        background: `
          radial-gradient(
            circle at top right,
            rgba(212,175,55,0.10),
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #111111,
            #1a1a1a,
            #222222
          )
        `,
      }}
    >
      {/* LEFT CONTENT */}
      <Box
        sx={{
          flex: 1,
          zIndex: 2,
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: {
              lg: "28px",
              md: "24px",
              xs: "18px",
            },

            textTransform: "uppercase",

            background:
              "linear-gradient(to right, #8f8f8f, #F5E6A8)",

            WebkitBackgroundClip: "text",

            WebkitTextFillColor: "transparent",

            letterSpacing: "3px",
          }}
        >
          Fitness Club
        </Typography>

        <Typography
          sx={{
            mt: "25px",

            fontWeight: 900,

            lineHeight: {
              lg: "95px",
              md: "80px",
              xs: "60px",
            },

            fontSize: {
              lg: "90px",
              md: "70px",
              sm: "55px",
              xs: "42px",
            },

            background:
              "linear-gradient(to right, #ffffff, #F5E6A8)",

            WebkitBackgroundClip: "text",

            WebkitTextFillColor: "transparent",
          }}
        >
          Sweat, Smile
          <br />
          and Repeat
        </Typography>

        <Typography
          sx={{
            mt: "25px",

            color: "#b0b0b0",

            lineHeight: "35px",

            fontSize: {
              lg: "22px",
              xs: "18px",
            },

            maxWidth: "500px",

            mx: { xs: "auto", lg: 0 },
          }}
        >
          Check out the most effective exercises and
          transform your body with MotionHub.
        </Typography>

        <Button
          variant="contained"
          href="#exercises"
          sx={{
            mt: "40px",

            px: { lg: 4, xs: 3 },

            py: 1.8,

            background:
              "linear-gradient(135deg, #B0B0B0, #F5E6A8)",

            color: "#111",

            fontSize: {
              lg: "16px",
              xs: "14px",
            },

            fontWeight: 700,

            textTransform: "none",

            borderRadius: "14px",

            border:
              "1px solid rgba(255,255,255,0.08)",

            boxShadow:
              "0 10px 30px rgba(245, 230, 168, 0.18)",

            transition: "all 0.3s ease",

            "&:hover": {
              background:
                "linear-gradient(135deg, #F5E6A8, #D6D6D6)",

              transform: "translateY(-3px)",

              boxShadow:
                "0 14px 40px rgba(245, 230, 168, 0.28)",

              color: "#000",
            },
          }}
        >
          Explore Exercises
        </Button>
      </Box>

      {/* RIGHT IMAGE */}
      <Box
        sx={{
          flex: 1,

          display: "flex",

          justifyContent: "center",

          position: "relative",

          zIndex: 2,
        }}
      >
        <img
          src="/bf.png"
          alt="banner"
          className="
            w-full
            max-w-[700px]
            object-contain
            transition-all
            duration-500
            hover:scale-105
          "
          style={{
            borderRadius: "0 0 0 60px",

            filter:
              "drop-shadow(0 0 30px rgba(212,175,55,0.18))",
          }}
        />
      </Box>

      {/* BACKGROUND TEXT */}
      <Typography
        sx={{
          position: "absolute",

          bottom: "-30px",

          left: "50%",

          transform: "translateX(-50%)",

          fontWeight: 900,

          color: "#D4AF37",

          opacity: 0.05,

          display: {
            lg: "block",
            xs: "none",
          },

          fontSize: "220px",

          userSelect: "none",

          zIndex: 1,
        }}
      >
        MOTION
      </Typography>
    </Box>
  );
};

export default HeroBanner;