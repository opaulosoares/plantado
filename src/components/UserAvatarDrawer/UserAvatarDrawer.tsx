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
import React, { useContext, useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { Logout, Person } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, loggedIn, loggedOut } from "../../app/store";
import { ColorModeContext } from "../../theme";

const UserAvatarDrawer: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const colorMode = useContext(ColorModeContext);

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
                gap={2}
                sx={{ cursor: "pointer" }}
                tabIndex={0}
                onClick={handleClicked}
                aria-controls="user-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                role="button"
                id="menubutton1"
                onKeyDown={(e: any) => {
                    if (e.key === " " || e.key === "Enter") {
                        handleClicked(e);
                    }
                }}
            >
                <Avatar />
                <Stack direction={"column"}>
                    <Typography variant="h5">{userData.user.name}</Typography>
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
                MenuListProps={{
                    "aria-labelledby": "menubutton1",
                }}
            >
                <MenuItem tabIndex={0} id="mi1">
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText>Meu perfil</ListItemText>
                </MenuItem>

                <MenuItem id="mi2" onClick={colorMode.toggleColorMode}>
                    <ThemeSwitcher />
                </MenuItem>

                <MenuItem
                    onClick={() => dispatch(loggedOut())}
                    tabIndex={0}
                    role="menuitem"
                    id="mi3"
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Sair</ListItemText>
                </MenuItem>
            </Menu>
        </>
    );
};

export default UserAvatarDrawer;
