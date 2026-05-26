import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useEffect, useState } from "react";
import { fetchData ,exercisesOptions} from "@/utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";



const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState("");


  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercisesOptions);
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
    
  },[])
  const handleSearch = async() => {
    if(search){
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exercisesOptions
        
      );
      const searchExercises= exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchExercises);
    }

  };

  return (
    <>
    <a href="#exercise">
      <Stack
      alignItems="center"
      justifyContent="center"
      spacing={4}
      sx={{
        mt: { lg: "120px", xs: "70px" },
        px: 2,
        py: 6,
      }}
    >
      {/* Heading */}
      <Stack spacing={2} alignItems="center">
        <FitnessCenterIcon
          sx={{
            fontSize: { lg: 70, xs: 50 },
            color: "#F5E6A8",
          }}
        />

        <Typography
          fontWeight={800}
          textAlign="center"
          sx={{
            fontSize: { lg: "58px", md: "46px", xs: "32px" },
            lineHeight: 1.2,
            color: "#f5f5f5",
            letterSpacing: "-1px",
          }}
        >
          Discover The Best <br />
          Exercises For You
        </Typography>

        <Typography
          textAlign="center"
          sx={{
            color: "#b0b0b0",
            fontSize: { lg: "18px", xs: "15px" },
            maxWidth: "700px",
          }}
        >
          Search workouts by muscle group, equipment, or exercise name
          and level up your fitness journey.
        </Typography>
      </Stack>

      {/* Search Box */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "950px",
          position: "relative",
        }}
      >
        <TextField
  fullWidth
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search exercises, muscles, equipment..."
  variant="outlined"
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon
          sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 28,
          }}
        />
      </InputAdornment>
    ),
  }}
  sx={{
    "& .MuiOutlinedInput-root": {
      
      borderRadius: "24px",

      background:
        "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",

      backdropFilter: "blur(12px)",

      border: "1px solid rgba(255,255,255,0.08)",

      color: "#fff",

      px: 2,

      transition: "all 0.3s ease",

      "& fieldset": {
        border: "none",
      },

      "&:hover": {
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",

       
      },

      
    },

    "& input": {
      color: "#fff",

      fontSize: {
        lg: "18px",
        xs: "15px",
      },

      fontWeight: 500,

      letterSpacing: "0.5px",
    },

    "& input::placeholder": {
      color: "rgba(255,255,255,0.45)",
      opacity: 1,
    },
  }}
/>

        {/* Search Button */}
        <Button onClick={handleSearch}
          variant="contained"
          sx={{
            position: "absolute",
            right: { lg: 12, xs: 8 },
            top: "50%",
            transform: "translateY(-50%)",

            px: { lg: 4, xs: 2.5 },
            height: { lg: "60px", xs: "52px" },

            background:
              "linear-gradient(135deg, #F5E6A8 0%, #D4D4D4 100%)",

            color: "#111",
            fontWeight: 700,
            fontSize: { lg: "18px", xs: "14px" },

            borderRadius: "18px",
            textTransform: "none",

            boxShadow: "0 8px 25px rgba(245, 230, 168, 0.35)",

            transition: "all 0.3s ease",

            "&:hover": {
              background:
                "linear-gradient(135deg, #fff0b3 0%, #e5e5e5 100%)",
              transform: "translateY(-50%) scale(1.03)",
              boxShadow: "0 12px 35px rgba(245, 230, 168, 0.45)",
            },
          }}
        >
          Search
        </Button>
      </Box>

      <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
<HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
    </a>
    </>
  );
};

export default SearchExercises;