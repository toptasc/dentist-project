import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import styles from "../../styles/Home.module.scss"
import { Button, TextField, Typography } from '@mui/material'
import { addFireStore } from '../../utils/firebase';
import { useFormik } from 'formik';

const SuggestionForm = ({ handleClose, handleOpen, setText, setSeverity }) => {
    const validate = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Gerekli*';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'En fazla 15 karakter girişi yapınız.';
        }

        if (!values.lastName) {
            errors.lastName = 'Gerekli*';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'En fazla 20 karakter girişi yapınız.';
        }

        if (!values.email) {
            errors.email = 'Gerekli*';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Geçerli bir mail adresi giriniz.';
        }
        if (!values.phone) {
            errors.phone = 'Gerekli*';
        } 
        if (!values.text) {
            errors.text = 'Gerekli*';
        } else if (values.text.length > 300) {
            errors.text = 'En fazla 300 karakter girişi yapınız.';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            text: ""
        },
        validate,
        onSubmit: values => {
            addFireStore({
                firstname: formik.values.firstName,
                lastname: formik.values.lastName,
                email: formik.values.email,
                text: formik.values.text,
                phone: formik.values.phone,
            })
            formik.handleReset();
            handleOpen();
            setSeverity("success");
            setText("Mesajınız Başarılı bir şekilde iletilmiştir.");
        },
    });
    const [isDisable, setIsDisable] = useState(true);
    useEffect(()=>{
        if(Object.keys(formik.errors).length === 0 && Object.values(formik.values).every((value)=> value === "") ){
            setIsDisable(true);
        }
        else if (Object.keys(formik.errors).length > 0){
            setIsDisable(true);
        }
        else {
            setIsDisable(false);
        }
       
    },[formik.errors,formik.values])

    return (
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <form onSubmit={formik.handleSubmit} className='suggestion-form'>
                <TextField
                    name="firstName"
                    id="outlined-textarea"
                    label="Adınız"
                    placeholder="Adınızı giriniz"
                    multiline
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                {formik.errors.firstName ?
                    <Typography variant="subtitle2" color={"red"}> 
                        {formik.errors.firstName}
                    </Typography> : null}

                <TextField
                    name="lastName"
                    id="outlined-textarea"
                    label="Soyadınız"
                    placeholder="Soyadınızı giriniz"
                    multiline
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                {formik.errors.lastName ?
                    <Typography variant="subtitle2" color={"red"}>
                        {formik.errors.lastName}
                    </Typography> : null}
                <TextField
                    name="phone"
                    id="outlined-textarea"
                    label="Telefon"
                    placeholder="Telefon Giriniz"
                    multiline
                    onChange={formik.handleChange}
                    value={formik.values.phone}

                />
                {formik.errors.phone ?
                    <Typography variant="subtitle2" color={"red"}>
                        {formik.errors.phone}
                    </Typography> : null}
                <TextField
                    name="email"
                    id="outlined-textarea"
                    label="Email"
                    placeholder="Email giriniz"
                    multiline
                    onChange={formik.handleChange}
                    value={formik.values.email}

                />
                {formik.errors.email ?
                    <Typography variant="subtitle2" color={"red"}>
                        {formik.errors.email}
                    </Typography> : null}

                <TextField
                    name="text"
                    id="outlined-multiline-static"
                    label="Mesajınız"
                    placeholder="Mesaj giriniz"
                    multiline
                    rows={4}
                    onChange={formik.handleChange}
                    value={formik.values.text}

                />
                {formik.errors.text ?
                    <Typography variant="subtitle2" color={"red"}>
                        {formik.errors.text}
                    </Typography> : null}
                <Button type='submit' disabled={isDisable}>Ekle</Button>


            </form>
      
        </Box>
    )
}

export default SuggestionForm

