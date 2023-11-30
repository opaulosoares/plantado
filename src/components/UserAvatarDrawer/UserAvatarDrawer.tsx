import {
    Avatar,
    Button,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    Stack,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { Logout, Person } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, loggedIn, loggedOut } from "../../app/store";

const UserAvatarDrawer: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
    const userData = useSelector((state: RootState) => state.user);

    const handleClicked = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Stack
                direction={"row"}
                alignItems={"center"}
                gap={1}
                aria-controls={open ? "user-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClicked}
                sx={{ cursor: "pointer" }}
            >
                <Avatar />
                <Stack direction={"column"}>
                    <Typography variant="h4">{userData.user.name}</Typography>
                    <Typography variant="body1">
                        {userData.user.email}
                    </Typography>
                </Stack>
            </Stack>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
            >
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText>Meu perfil</ListItemText>
                    </MenuItem>

                    <ThemeSwitcher />
                    <MenuItem onClick={() => dispatch(loggedOut())}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Sair</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};

export default UserAvatarDrawer;
