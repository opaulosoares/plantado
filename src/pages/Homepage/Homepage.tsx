import React from "react";
import BasePage from "../../templates/BasePage/BasePage";
import { Divider, Stack } from "@mui/material";
import HeroSection from "../../components/HeroSection/HeroSection";
import CurrentCampaignSection from "../../components/CurrentCampaignSection/CurrentCampaignSection";
import CategorySection from "../../components/CategorySection/CategorySection";

const Homepage: React.FC = () => {
    return (
        <BasePage>
            <Stack justifyContent={"center"} alignItems={"center"}>
                <HeroSection
                    primaryText="Natal na Plantado"
                    secondaryText="Ofertas exclusivas de plantas e acessórios para você decorar sua casa!"
                    callToActionList={[
                        {
                            text: "Experimente nossas recomendações",
                            path: "/recomendacoes",
                            variant: "primary",
                        },
                    ]}
                />
                <Divider sx={{ width: "100%" }} />
                <CurrentCampaignSection />
                <Divider sx={{ width: "100%" }} />
                <CategorySection />
            </Stack>
        </BasePage>
    );
};

export default Homepage;
