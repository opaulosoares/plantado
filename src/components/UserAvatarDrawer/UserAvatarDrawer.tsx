import {
    Avatar,
    Button,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { Logout, Person } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn, loggedOut } from "../../app/store";

const UserAvatarDrawer: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);

    const handleClicked = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                aria-controls={open ? "user-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClicked}
            >
                <Avatar />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
            >
                <MenuItem>
                    {isLoggedIn ? (
                        <Typography variant="h4">Olá, user</Typography>
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => dispatch(loggedIn())}
                        >
                            Entrar
                        </Button>
                    )}
                </MenuItem>
                <MenuList>
                    {isLoggedIn ? (
                        <MenuItem>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText>Meu perfil</ListItemText>
                        </MenuItem>
                    ) : null}

                    <ThemeSwitcher />
                    {isLoggedIn ? (
                        <MenuItem onClick={() => dispatch(loggedOut())}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Sair</ListItemText>
                        </MenuItem>
                    ) : null}
                </MenuList>
            </Menu>
        </>
    );
};

export default UserAvatarDrawer;
