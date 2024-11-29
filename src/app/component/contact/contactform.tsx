import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
    service: string;
    name: string;
    tel: string;
    email: string;
    message: string;
}

export default function Contactform() {
    const formik = useFormik<FormValues>({
        initialValues: {
            service: "",
            name: "",
            tel: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            service: Yup.string().required("Service is required"),
            name: Yup.string().required("Name is required"),
            tel: Yup.string()
                .required("Telephone number is required")
                .matches(/^[0-9]+$/, "Tel No. must be numeric"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            message: Yup.string().required("Message is required"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                {/* Service */}
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                        Service
                    </label>
                    <input
                        id="service"
                        name="service"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.service}
                        className={`w-full px-3 py-2 border rounded-md ${formik.touched.service && formik.errors.service
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                    />
                    {formik.touched.service && formik.errors.service && (
                        <p className="text-sm text-red-500 mt-1">{formik.errors.service}</p>
                    )}
                </div>

                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className={`w-full px-3 py-2 border rounded-md ${formik.touched.name && formik.errors.name
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-sm text-red-500 mt-1">{formik.errors.name}</p>
                    )}
                </div>

                {/* Tel No. */}
                <div>
                    <label htmlFor="tel" className="block text-sm font-medium text-gray-700">
                        Tel No.
                    </label>
                    <input
                        id="tel"
                        name="tel"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tel}
                        className={`w-full px-3 py-2 border rounded-md ${formik.touched.tel && formik.errors.tel
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                    />
                    {formik.touched.tel && formik.errors.tel && (
                        <p className="text-sm text-red-500 mt-1">{formik.errors.tel}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={`w-full px-3 py-2 border rounded-md ${formik.touched.email && formik.errors.email
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        className={`w-full px-3 py-2 border rounded-md ${formik.touched.message && formik.errors.message
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                    />
                    {formik.touched.message && formik.errors.message && (
                        <p className="text-sm text-red-500 mt-1">{formik.errors.message}</p>
                    )}
                </div>


                <div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};
