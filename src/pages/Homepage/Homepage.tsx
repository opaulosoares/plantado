import React from "react";
import BasePage from "../../templates/BasePage/BasePage";
import { Divider, Stack } from "@mui/material";
import HeroSection from "../../components/HeroSection/HeroSection";

const Homepage: React.FC = () => {
    return (
        <BasePage>
            <Stack justifyContent={"center"} alignItems={"center"}>
                <HeroSection
                    primaryText="Natal na Plantado"
                    secondaryText="Ofertas exclusivas de plantas e acessórios para você decorar sua casa!"
                    callToAction="
                        Confira nossos produtos
                    "
                    actionRoute="/produtos"
                />
                <Divider sx={{ width: "100%" }} />
            </Stack>
        </BasePage>
    );
};

export default Homepage;
