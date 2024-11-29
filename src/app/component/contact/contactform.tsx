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

    const TextField = ({ label, name, type = "text" }: { label: string; name: string; type?: string }) => (
        <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                name={name}
                type={type}
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
    );

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <TextField label="Service" name="service" />
                <TextField label="Name" name="name" />
                <TextField label="Tel No." name="tel" />
                <TextField label="Email" name="email" />
                <TextField label="Message" name="message" />

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
