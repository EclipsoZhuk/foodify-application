import { Snackbar } from '@mui/material';

export const ErrorNotification = ({ error }) => {
    return (
        error && (
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={!!error}
                message={error}
            />
        )
    );
};
