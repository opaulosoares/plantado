import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  primaryText: string;
  secondaryText: string;
  callToActionList: Array<{
    text: string;
    path: string;
    variant: 'primary' | 'secondary';
  }>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  primaryText,
  secondaryText,
  callToActionList,
}) => {
  return (
    <Stack
      sx={{
        py: { xs: 12, md: 16 },
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        textAlign: "center",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="h1" component="h1" tabIndex={0}>
          {primaryText}
        </Typography>
        <Typography variant="h3" component="p" tabIndex={0}>
          {secondaryText}
        </Typography>
      </Stack>
      <Stack direction={"row"} sx={{ gap: 1 }}>
        {callToActionList.map((item) => (
          <Link key={item.text} to={item.path}>
            <Button variant="contained" color={item.variant}>
              {item.text}
            </Button>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default HeroSection;
