import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const EventsForm = () => {
    const initialValues = {
        eventName: '',
        eventDate: '',
        eventDescription: '',
    };

    const validationSchema = Yup.object({
        eventName: Yup.string().required('Event name is required'),
        eventDate: Yup.date().required('Event date is required'),
        eventDescription: Yup.string().required('Event description is required'),
    });

    const onSubmit = async (values, { resetForm }) => {
        try {
            await axios.post('/api/events', values);
            resetForm();
        } catch (error) {
            console.error('Error submitting event:', error);
        }
    };

    return (
        <div>
            <h2>Events Form</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
                    <div className="form-group">
                        <label>Event Name</label>
                        <Field name="eventName" type="text" className="form-control" />
                        <ErrorMessage name="eventName" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                        <label>Event Date</label>
                        <Field name="eventDate" type="date" className="form-control" />
                        <ErrorMessage name="eventDate" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                        <label>Event Description</label>
                        <Field name="eventDescription" as="textarea" className="form-control" />
                        <ErrorMessage name="eventDescription" component="div" className="text-danger" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default EventsForm;
