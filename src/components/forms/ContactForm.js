import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ContactForm = () => {
    const initialValues = {
        name: '',
        email: '',
        message: '',
        subscribe: false,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    const onSubmit = async (values, { resetForm }) => {
        try {
            await axios.post('/api/contact', values); 
            if (values.subscribe) {
                await axios.post('/api/subscribe', { email: values.email }); 
            }
            resetForm();
        } catch (error) {
            console.error('Error submitting contact form:', error);
        }
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
                    <div className="form-group">
                        <label>Name</label>
                        <Field name="name" type="text" className="form-control" />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <Field name="email" type="email" className="form-control" />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <Field name="message" as="textarea" className="form-control" />
                        <ErrorMessage name="message" component="div" className="text-danger" />
                    </div>
                    <div className="form-group form-check">
                        <Field name="subscribe" type="checkbox" className="form-check-input" />
                        <label className="form-check-label">Subscribe to our newsletter</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
