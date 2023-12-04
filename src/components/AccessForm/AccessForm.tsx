import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Button,
    IconButton,
    InputAdornment,
    InputLabel,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loggedIn } from "../../app/store";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Stack>
            <Stack
                direction={{ xs: "column-reverse", md: "row" }}
                justifyContent={"space-between"}
                gap={2}
            >
                <Stack justifyContent={"center"}>
                    <Typography variant="h2" tabIndex={0}>
                        Acesse sua conta
                    </Typography>
                    <Typography variant="body1" component="p" tabIndex={0}>
                        Feliz em te ver novamente! Entre com seu e-mail e senha
                        para acessar sua conta!
                    </Typography>
                </Stack>
                <Stack height={"100%"}>
                    <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 196 147"
                        width="64"
                    >
                        <path
                            d="M94.3342 53.6133C96.5649 51.4622 100.075 51.4622 102.306 53.6133C108.448 59.5367 113.255 66.7272 116.4 74.6956C118.306 79.5256 119.575 84.5726 120.184 89.707C129.97 83.2771 141.466 79.7792 153.318 79.7792C154.849 79.7792 156.318 80.3936 157.4 81.4871C158.483 82.5807 159.091 84.0639 159.091 85.6104C159.091 101.892 152.688 117.507 141.292 129.019C129.895 140.532 114.438 147 98.3202 147C82.2028 147 66.7455 140.532 55.3488 129.019C43.952 117.507 37.5494 101.892 37.5494 85.6104C37.5494 84.0639 38.1576 82.5807 39.2401 81.4871C40.3226 80.3936 41.7909 79.7792 43.3218 79.7792C51.3024 79.7792 59.2047 81.3671 66.5778 84.4522C70.0317 85.8974 73.3378 87.658 76.4567 89.7073C77.0657 84.5728 78.334 79.5257 80.2402 74.6956C83.3849 66.7272 88.1919 59.5367 94.3342 53.6133ZM87.6386 99.1628C92.0038 103.862 95.608 109.226 98.3202 115.055C101.012 109.269 104.602 103.899 109.002 99.1628C109.335 92.2837 108.201 85.4124 105.676 79.0145C103.872 74.4434 101.388 70.1904 98.3201 66.3981C95.2519 70.1904 92.7682 74.4434 90.9642 79.0145C88.4392 85.4125 87.3052 92.2838 87.6386 99.1628ZM92.1609 134.947C91.6126 130.555 90.4848 126.246 88.8006 122.139C86.3268 116.106 82.7009 110.624 78.1298 106.006C73.5588 101.389 68.1321 97.7259 62.1598 95.2269C58.0938 93.5255 53.829 92.3863 49.4809 91.8324C50.8407 102.727 55.7444 112.926 63.5122 120.773C71.28 128.62 81.3765 133.573 92.1609 134.947ZM104.479 134.947C115.264 133.573 125.36 128.62 133.128 120.773C140.896 112.926 145.8 102.726 147.159 91.8322C136.375 93.2058 126.278 98.1594 118.511 106.006C110.743 113.853 105.839 124.053 104.479 134.947Z"
                            fill="#2D8F42"
                        />
                    </svg>
                </Stack>
            </Stack>

            <Stack
                component="form"
                gap={2}
                py={4}
                onSubmit={(e: any) => {
                    e.preventDefault();
                    dispatch(loggedIn());
                    navigate("/");
                }}
            >
                <Stack>
                    <InputLabel htmlFor="email-usuario">E-mail</InputLabel>
                    <TextField
                        id="email-usuario"
                        placeholder="joao@mail.com"
                        variant="outlined"
                        type="email"
                        required
                        aria-required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Stack>
                <Stack>
                    <InputLabel htmlFor="senha-usuario">Senha</InputLabel>
                    <TextField
                        id="senha-usuario"
                        placeholder="Batata1234"
                        variant="outlined"
                        required
                        aria-required
                        type={showPassword ? "text" : "password"}
                        value={password}
                        helperText="Oito ou mais caracteres, com pelo menos uma letra minúscula e uma maiúscula"
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Visibilidade da senha"
                                        onClick={handleClickShowPassword}
                                    >
                                        {showPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Stack>
                <Button variant="contained" type="submit">
                    Entrar
                </Button>
            </Stack>
            <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent={{ md: "space-between" }}
            >
                <Button>Esqueceu a senha?</Button>
                <Button onClick={onToggle}>
                    Não é cliente? Cadastre-se aqui
                </Button>
            </Stack>
        </Stack>
    );
};

const SignUpForm: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
    return (
        <Stack>
            <Stack
                direction={{ xs: "column-reverse", md: "row" }}
                justifyContent={"space-between"}
                gap={2}
            >
                <Stack>
                    <Typography variant="h2" component="h1" tabIndex={0}>
                        Crie sua conta
                    </Typography>
                    <Typography variant="body1" component="p" tabIndex={0}>
                        Entre seus dados abaixo para criar sua conta e ter
                        acessos às melhores ofertas
                    </Typography>
                </Stack>
                <Stack height={"100%"}>
                    <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 196 147"
                        width="64"
                    >
                        <path
                            d="M94.3342 53.6133C96.5649 51.4622 100.075 51.4622 102.306 53.6133C108.448 59.5367 113.255 66.7272 116.4 74.6956C118.306 79.5256 119.575 84.5726 120.184 89.707C129.97 83.2771 141.466 79.7792 153.318 79.7792C154.849 79.7792 156.318 80.3936 157.4 81.4871C158.483 82.5807 159.091 84.0639 159.091 85.6104C159.091 101.892 152.688 117.507 141.292 129.019C129.895 140.532 114.438 147 98.3202 147C82.2028 147 66.7455 140.532 55.3488 129.019C43.952 117.507 37.5494 101.892 37.5494 85.6104C37.5494 84.0639 38.1576 82.5807 39.2401 81.4871C40.3226 80.3936 41.7909 79.7792 43.3218 79.7792C51.3024 79.7792 59.2047 81.3671 66.5778 84.4522C70.0317 85.8974 73.3378 87.658 76.4567 89.7073C77.0657 84.5728 78.334 79.5257 80.2402 74.6956C83.3849 66.7272 88.1919 59.5367 94.3342 53.6133ZM87.6386 99.1628C92.0038 103.862 95.608 109.226 98.3202 115.055C101.012 109.269 104.602 103.899 109.002 99.1628C109.335 92.2837 108.201 85.4124 105.676 79.0145C103.872 74.4434 101.388 70.1904 98.3201 66.3981C95.2519 70.1904 92.7682 74.4434 90.9642 79.0145C88.4392 85.4125 87.3052 92.2838 87.6386 99.1628ZM92.1609 134.947C91.6126 130.555 90.4848 126.246 88.8006 122.139C86.3268 116.106 82.7009 110.624 78.1298 106.006C73.5588 101.389 68.1321 97.7259 62.1598 95.2269C58.0938 93.5255 53.829 92.3863 49.4809 91.8324C50.8407 102.727 55.7444 112.926 63.5122 120.773C71.28 128.62 81.3765 133.573 92.1609 134.947ZM104.479 134.947C115.264 133.573 125.36 128.62 133.128 120.773C140.896 112.926 145.8 102.726 147.159 91.8322C136.375 93.2058 126.278 98.1594 118.511 106.006C110.743 113.853 105.839 124.053 104.479 134.947Z"
                            fill="#2D8F42"
                        />
                    </svg>
                </Stack>
            </Stack>

            <Stack component="form" gap={2} py={4}>
                <Stack>
                    <InputLabel htmlFor="nome-completo">
                        Nome completo
                    </InputLabel>
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
            <Button onClick={onToggle}>Já é cliente? Entre aqui</Button>
        </Stack>
    );
};

const AccessForm: React.FC = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleToggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <section style={{ height: "100%" }}>
            <Stack
                justifyContent={"flex-start"}
                alignItems={"center"}
                height={"100%"}
                py={{ xs: 4, md: 8 }}
            >
                {showLoginForm ? (
                    <Stack>
                        <LoginForm onToggle={handleToggleForm} />
                    </Stack>
                ) : (
                    <SignUpForm onToggle={handleToggleForm} />
                )}
            </Stack>
        </section>
    );
};

export default AccessForm;
