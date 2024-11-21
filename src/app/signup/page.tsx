'use client';

import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('required'),
  lastName: Yup.string().required('required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('required'),
});

export default function SignupPage() {
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [savedData, setSavedData] = useState<FormValues | null>(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('userSignupData');
    if (data) {
      setSavedData(JSON.parse(data));
    }
  }, []);

  const handleSubmit = (values: FormValues) => {
    localStorage.setItem('userSignupData', JSON.stringify(values));
    setSavedData(values);
    console.log('Form data saved to localStorage:', values);
    router.push('/signin');
  };


  const TextField = ({ label, name, type = "text" }: { label: string; name: string; type?: string }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field
        type={type}
        name={name}
        className="w-full mt-2 p-2 border border-gray-300 rounded-md"
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-red-50 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <Link href="/signin" className="hover:underline block text-center mt-4 mb-6">
          Already have an account?
        </Link>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {() => (
            <Form>
              <TextField label="First Name" name="firstName" />
              <TextField label="Last Name" name="lastName" />
              <TextField label="Email" name="email" type="email" />
              <TextField label="Password" name="password" type="password" />
              {/* <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div> */}

              <div className="mb-6">
                <button type="submit" className="w-full bg-rose-500 text-white p-2 rounded-md">
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
