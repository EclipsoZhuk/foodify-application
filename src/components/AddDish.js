import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
} from '@mui/material';
import { Dish } from 'models/Dish';
import { useState } from 'react';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addDish } from 'redux/dishes/dishes-slice';

export const AddDish = () => {
    const dispatch = useDispatch();

    const { strMeal, strInstructions } = new Dish('', '', null);
    const { control, handleSubmit, reset } = useForm({
        mode: 'onSubmit',
        defaultValues: { strMeal, strInstructions },
    });

    const { isDirty } = useFormState({ control });

    const submitForm = callback =>
        handleSubmit(({ strMeal, strInstructions }) => {
            const id = Math.ceil(Math.random() * 10000);
            const myDish = new Dish(strMeal, strInstructions, id);

            dispatch(addDish(myDish));

            reset();
            callback();
        });

    const [openDialog, setOpenDialog] = useState(false);
    const handleOpen = () => setOpenDialog(true);
    const handleClose = () => setOpenDialog(false);

    return (
        <>
            <Button
                variant="contained"
                style={{
                    position: 'absolute',
                    right: 20,
                    margin: 'auto',
                    color: 'white',

                    width: 190,
                }}
                onClick={handleOpen}
            >
                Add custom dish
            </Button>

            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openDialog}
            >
                <form
                    style={{ height: 433 }}
                    onSubmit={submitForm(handleClose)}
                >
                    <DialogTitle id="dialog-title">
                        Add your custom dish
                    </DialogTitle>
                    <DialogContent dividers>
                        <Grid
                            container
                            alignItems="center"
                            justify="center"
                            spacing={3}
                        >
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Controller
                                    name="strMeal"
                                    control={control}
                                    defaultValue={strMeal}
                                    render={({
                                        field: { onChange, value },
                                        fieldState: { error },
                                    }) => (
                                        <TextField
                                            fullWidth
                                            label="Title"
                                            variant="outlined"
                                            value={value}
                                            onChange={onChange}
                                            error={!!error}
                                            helperText={
                                                error ? error.message : null
                                            }
                                        />
                                    )}
                                    rules={{ required: 'Title required' }}
                                />
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Controller
                                    name="strInstructions"
                                    control={control}
                                    defaultValue={strInstructions}
                                    render={({
                                        field: { onChange, value },
                                        fieldState: { error },
                                    }) => (
                                        <TextField
                                            label="Description"
                                            fullWidth
                                            multiline
                                            rows={7}
                                            variant="outlined"
                                            value={value}
                                            onChange={onChange}
                                            error={!!error}
                                            helperText={
                                                error ? error.message : null
                                            }
                                        />
                                    )}
                                    rules={{ required: 'Description required' }}
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="contained"
                            type="submit"
                            style={{ margin: 'auto' }}
                            disabled={!isDirty}
                        >
                            Add custom dish
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};
