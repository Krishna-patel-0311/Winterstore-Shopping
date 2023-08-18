import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

const Cards = (props) => {
  const navigate = useNavigate();
  const handleClick = (Category) => {
    if (Category === "Male") {
      navigate("/Mens");
    } else if (Category === "Female") {
      navigate("/Womens");
    } else if (Category === "Kids") {
      navigate("/Kids");
    }
  };
  return (
    <Card className="h-100 py-2">
      <Lottie animationData={props.Image} loop={true} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.Title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          style={{ margin: "auto", width: "50%", backgroundColor: "#101E2B" }}
          onClick={() => handleClick(props.tag)}
          variant="contained"
        >
          View{"  " + props.tag} Section
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
