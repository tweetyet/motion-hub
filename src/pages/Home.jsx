import { Box } from "@mui/material"
import HeroBanner from "../components/ui/HeroBanner"
import SearchExercises from "../components/ui/SearchExercises"
import Exercises from "../components/ui/Exercises"

const Home = () => {
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises/>
        <Exercises/>
    </Box>
  )
}

export default Home
