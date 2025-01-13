import { Stack, Typography } from "@mui/material";
import mattieAdultPic from "./assets/mattie-adult.png";
import mattieBbPic from "./assets/mattie-bb.jpeg";

const MAIN_PIC_SIZE = 300;
const BB_PIC_SIZE = 200;

function Intro() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      alignSelf="center"
      flex={1}
      spacing={4}
      p={4}
      maxWidth={1200}
      width="100%"
    >
      <img
        src={mattieAdultPic}
        alt="Picture of me!"
        style={{
          borderRadius: "50%",
          height: MAIN_PIC_SIZE,
          width: MAIN_PIC_SIZE,
          alignSelf: "flex-start",
        }}
      />
      <Stack>
        <Typography variant="h3" fontFamily="Major Mono Display">
          Madelyn Hussey
        </Typography>
        <Typography variant="subtitle2" textAlign="right">
          <i>Mattie</i> for short
        </Typography>
      </Stack>
      <img
        src={mattieBbPic}
        alt="Picture of me!"
        style={{
          borderRadius: "50%",
          height: BB_PIC_SIZE,
          width: BB_PIC_SIZE,
          alignSelf: "flex-end",
        }}
      />
    </Stack>
  );
}

export default Intro;
