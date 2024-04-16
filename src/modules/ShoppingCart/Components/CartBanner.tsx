import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { StepIconProps } from "@mui/material/StepIcon";

const Connector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(95deg, rgb(135, 206, 235) 0%, rgb(173, 216, 230) 50%, rgb(176, 224, 230) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(95deg, rgb(135, 206, 235) 0%, rgb(173, 216, 230) 50%, rgb(176, 224, 230) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const StepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#333333",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",

  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient(136deg, rgb(135, 206, 235) 0%, rgb(173, 216, 230) 50%, rgb(176, 224, 230) 100%)",
    boxShadow: "0 4px 10px 0 rgba(173, 216, 230, 0.25)", // Soft blue shadow
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient(136deg, rgb(135, 206, 235) 0%, rgb(173, 216, 230) 50%, rgb(176, 224, 230) 100%)",
  }),
}));

function StepIcon(props: Readonly<StepIconProps>) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <ShoppingCartIcon fontSize="medium" />,
    2: <PointOfSaleIcon fontSize="medium" />,
    3: <CheckCircleIcon fontSize="medium" />,
  };

  return (
    <StepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </StepIconRoot>
  );
}

const steps = ["Shopping Cart", "Checkout", "Order Complete"];

export default function CartBanner() {
  const segments = window.location.href.split("/");
  const lastSegment = segments[segments.length - 1];
  let activeState: number = 0;
  switch (lastSegment) {
    case "cart":
      break;

    case "checkout":
      activeState = 1;
      break;

    default:
  }

  return (
    <Stack sx={{ width: "100%" }} spacing={4} className="my-10">
      <Stepper
        alternativeLabel
        activeStep={activeState}
        connector={<Connector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
