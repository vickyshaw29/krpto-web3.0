import { makeStyles } from "@mui/styles";

export default makeStyles((theme:any) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "7rem",
    "& button": {
      marginLeft: "6rem",
    },
  },
}));
