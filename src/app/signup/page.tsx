'use client';

import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Link from 'next/link';

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

  const [savedData, setSavedData] = useState<FormValues | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('userSignupData');
    if (data) {
      setSavedData(JSON.parse(data));
    }
  }, []);

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {}

    if (!values.firstName) {
      errors.firstName = 'required'
    }
    if (!values.lastName) {
      errors.lastName = 'required'
    }
    if (!values.email) {
      errors.email = 'required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
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
    localStorage.setItem('userSignupData', JSON.stringify(values));
    setSavedData(values);
    console.log('Form data saved to localStorage:', values)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-red-50  p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <Link href="/signin" className=" hover:underline block text-center mt-4 mb-6">
          Already have an account?
        </Link>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values: FormValues, { setSubmitting }) => {

            localStorage.setItem('userSignupData', JSON.stringify(values));
            setSubmitting(false);
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
                <Link href="/signin">
                  <button
                    type="submit"
                    className="w-full bg-rose-500 text-white p-2 rounded-md"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
