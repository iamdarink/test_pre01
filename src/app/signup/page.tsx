'use client';

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

type FormValues = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export default function SignupPage() {

  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {}
    
    if (!values.firstName) {
      errors.firstName = 'Frequired' 
    }
    if (!values.lastName) {
      errors.lastName = 'required' 
    }
    if (!values.email) {
      errors.email = 'required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'required'
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }
    return errors
  }

  const handleSubmit = (values: FormValues) => {
    console.log('Form submitted with values: ', values)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(
            values: FormValues,
            { setSubmitting }: import('formik').FormikHelpers<FormValues>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <Field
                  type="text"
                  name="firstName"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <Field
                  type="text"
                  name="lastName"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Sign Up
                </button>
              </div>
            </Form>
          )}        
          </Formik>
      </div>
    </div>
  )
}
