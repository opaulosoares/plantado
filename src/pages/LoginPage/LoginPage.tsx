import React from "react";
import BasePage from "../../templates/BasePage/BasePage";
import AccessForm from "../../components/AccessForm/AccessForm";

const LoginPage: React.FC = () => {
    return (
        <BasePage>
            <section id="inicioConteudo">
                <AccessForm />
            </section>
        </BasePage>
    );
};

export default LoginPage;
