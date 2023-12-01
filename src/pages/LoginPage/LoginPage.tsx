import React from "react";
import BasePage from "../../templates/BasePage/BasePage";
import AccessForm from "../../components/AccessForm/AccessForm";

const LoginPage: React.FC = () => {
    return (
        <BasePage>
            <AccessForm />
        </BasePage>
    );
};

export default LoginPage;
