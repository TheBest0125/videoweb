import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState() {
    return (
        <Stack direction="row" spacing={2}>
            <Button>Peak Video</Button>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <Button variant="contained" {...bindTrigger(popupState)}>
                            Category
                            <FuseSvgIcon className="text-48" size={24} color="action">heroicons-outline:chevron-down</FuseSvgIcon>
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>Profile</MenuItem>
                            <MenuItem onClick={popupState.close}>My account</MenuItem>
                            <MenuItem onClick={popupState.close}>Logout</MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
        </Stack>
    );
}