import { InputLabel, Stack, TextField } from "@mui/material";
import React from "react";

const LoginForm: React.FC = () => {
    return (
        <Stack component="form" gap={2} py={4}>
            <Stack>
                <InputLabel htmlFor="nome-completo">Nome completo</InputLabel>
                <TextField
                    id="nome-completo"
                    placeholder="João da Silva"
                    variant="outlined"
                    type="text"
                />
            </Stack>
            <Stack>
                <InputLabel htmlFor="email-usuario">E-mail</InputLabel>
                <TextField
                    id="email-usuario"
                    placeholder="joao@mail.com"
                    variant="outlined"
                    type="email"
                />
            </Stack>
        </Stack>
    );
};

const SignUpForm: React.FC = () => {
    return <div />;
};

const AccessForm: React.FC = () => {
    return (
        <>
            <LoginForm />
            <SignUpForm />
        </>
    );
};

export default AccessForm;
