import { Box, Stack, Typography } from "@mui/material"
import ExerciseCard from "./ExerciseCard"
import {exercisesOptions,fetchData} from "../../utils/fetchData"
const Exercises = ({exercises,setExercises,bodyPart}) => {
  console.log(exercises);

  return (
   <Box id="exercises" sx={{mt:{lg:"110px"}}} mt="50px" p="20px">

    <Typography variant="h4" mb="46px" className="text-3xl text-white font-bold">
      Showing Results
    </Typography>

    <Stack direction="row" sx={{gap:{lg:"110px",xs:"50px"}}} flexWrap="wrap" justifyContent="center">
      {exercises?.map((exercise,index)=>(
        <ExerciseCard key={index} exercise={exercise}/>
      ))}
      </Stack>

   </Box>
  )
}

export default Exercises
