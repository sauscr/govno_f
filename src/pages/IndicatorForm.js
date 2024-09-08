import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const IndicatorForm = () => {
    return (
        <Formik
            initialValues={{ name: '', targetValue: '' }}
            validationSchema={Yup.object({
                name: Yup.string().required('Название индикатора обязательно'),
                targetValue: Yup.number().required('Целевое значение обязательно'),
            })}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <Form>
                <label htmlFor="name">Название индикатора</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" component="div" />

                <label htmlFor="targetValue">Целевое значение</label>
                <Field name="targetValue" type="number" />
                <ErrorMessage name="targetValue" component="div" />

                <button type="submit">Добавить индикатор</button>
            </Form>
        </Formik>
    );
}

export default IndicatorForm;
