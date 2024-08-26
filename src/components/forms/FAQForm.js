import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const FAQForm = () => {
    const initialValues = {
        question: '',
        answer: '',
    };

    const validationSchema = Yup.object({
        question: Yup.string().required('Question is required'),
        answer: Yup.string().required('Answer is required'),
    });

    const onSubmit = async (values, { resetForm }) => {
        try {
            await axios.post('/api/faqs', values);
            resetForm();
        } catch (error) {
            console.error('Error submitting FAQ:', error);
        }
    };

    return (
        <div>
            <h2>FAQ Form</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
                    <div className="form-group">
                        <label>Question</label>
                        <Field name="question" type="text" className="form-control" />
                        <ErrorMessage name="question" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                        <label>Answer</label>
                        <Field name="answer" as="textarea" className="form-control" />
                        <ErrorMessage name="answer" component="div" className="text-danger" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default FAQForm;
