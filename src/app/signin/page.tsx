'use client';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';

interface SignInValues {
  email: string;
  password: string;
}

const initialValues: SignInValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

export default function SignIn() {
  const [signInError, setSignInError] = useState<string | null>(null);

  const onSubmit = (values: SignInValues, { setSubmitting }: FormikHelpers<SignInValues>) => {
    setSubmitting(true);

    // เก็บข้อมูลจาก localstorage
    const savedData = localStorage.getItem('userSignupData');
    const userData = savedData ? JSON.parse(savedData) : null;

    if (userData && userData.email === values.email && userData.password === values.password) {
      alert('Sign in successful!');
      setSignInError(null);
    } else {
      setSignInError('Incorrect email or password');
    }

    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-red-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="space-y-4">
              <div>
                {signInError && (
                  <div className="text-xs text-red-600 text-center">{signInError}</div>
                )}
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-600">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="email" component="div" className="mt-1 text-xs text-red-600" />
              </div>

              <div>
                <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-600">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="password" component="div" className="mt-1 text-xs text-red-600" />
              </div>

              <button
                type="submit"
                className="w-full py-2 text-white bg-rose-500 rounded-md"
              >
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
