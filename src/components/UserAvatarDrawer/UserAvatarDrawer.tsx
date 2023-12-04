import {
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    Stack,
    Typography,
} from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { Logout, Person } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, loggedIn, loggedOut } from "../../app/store";
import { ColorModeContext, checkLocalStorageTheme, tokens } from "../../theme";
import { useTheme } from "@mui/material";

interface ConfirmationModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    open,
    onClose,
    onConfirm,
    message,
}) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                <Typography>Deseja realmente sair?</Typography>
            </DialogTitle>

            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <Divider />

            <DialogActions sx={{ px: 2, py: 2 }}>
                <Button onClick={onClose} variant="outlined" color="primary">
                    Cancelar
                </Button>
                <Button onClick={onConfirm} variant="contained" color="primary">
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const UserAvatarDrawer: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // Adiciona o estado para o modal
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
    const userData = useSelector((state: RootState) => state.user);

    const handleClicked = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [darkModeChecked, setDarkModeChecked] = useState(
        checkLocalStorageTheme()
    );

    const handleLogoutClick = () => {
        setIsLogoutModalOpen(true); // Abre o modal de confirmação
        handleClose(); // Fecha o menu
    };

    const handleLogoutConfirmed = () => {
        dispatch(loggedOut());
        setIsLogoutModalOpen(false); // Fecha o modal de confirmação
    };

    const handleLogoutCancelled = () => {
        setIsLogoutModalOpen(false); // Fecha o modal de confirmação
    };

    return (
        <>
            <Stack
                direction={"row"}
                alignItems={"center"}
                gap={1.75}
                sx={{
                    cursor: "pointer",
                    bgcolor: "transparent",
                    border: "none",
                }}
                tabIndex={0}
                onClick={handleClicked}
                aria-controls="user-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                aria-label="Abrir menu usuário"
                aria-description="Botão que abre um menu do usuário, para modificar perfil, tema da loja ou sair. Possui a foto do usuário."
                role="button"
                component={"button"}
                borderRadius={2}
                id="menubutton1"
                onKeyDown={(e: any) => {
                    if (
                        e.key === " " ||
                        e.key === "Enter" ||
                        e.key === "Space"
                    ) {
                        e.preventDefault();
                        handleClicked(e);
                    }
                }}
            >
                <Avatar
                    imgProps={{ loading: "lazy" }}
                    src="https://thispersondoesnotexist.com"
                >
                    {userData.name}
                </Avatar>
            </Stack>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                MenuListProps={{
                    "aria-labelledby": "menubutton1",
                }}
            >
                <MenuItem
                    id="mi0"
                    aria-label="informações usuário"
                    aria-description="Seção com nome e e-mail do usuário"
                >
                    <Stack direction={"column"} tabIndex={-1}>
                        <Typography variant="h6">{userData.name}</Typography>
                        <Typography variant="body2">
                            {userData.email}
                        </Typography>
                    </Stack>
                </MenuItem>

                <Divider sx={{ width: "100%" }} />
                <MenuItem
                    tabIndex={0}
                    id="mi1"
                    aria-label="Meu perfil"
                    aria-description="Botão que leva para a página de perfil do usuário"
                >
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText>Meu perfil</ListItemText>
                </MenuItem>

                <MenuItem
                    id="mi2"
                    tabIndex={0}
                    aria-label="Tema"
                    aria-description="Botão que troca o tema da loja entre claro e escuro"
                >
                    <ThemeSwitcher />
                </MenuItem>

                <MenuItem
                    onClick={() => handleLogoutClick()}
                    tabIndex={0}
                    role="menuitem"
                    id="mi3"
                    aria-label="Sair"
                    aria-description="Botão que permite que o usuário saia da loja"
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Sair</ListItemText>
                </MenuItem>
            </Menu>
            <ConfirmationModal
                open={isLogoutModalOpen}
                onClose={handleLogoutCancelled}
                onConfirm={handleLogoutConfirmed}
                message="Tem certeza de que deseja sair da sua conta? Todas os dados dessa sessão de navegação serão perdidos."
            />
        </>
    );
};

export default UserAvatarDrawer;
