import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Design from "../../../assets/imgs/svgs/aboutsvgs/design.svg";
import { Ripple } from "primereact/ripple";
const PersonalInfoForm = () => {
  const [issetSubmitting, setSubmitting] = useState(false);

  return (
    <>
      <div className="relative ">
        <div className="hidden sm:block absolute top-0 left-0 z-0 rotate-180">
          <img
            src={Design}
            alt="Blob"
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="xl:w-full xl:h-[400px] lg:w-52 lg:h-52 md:w-28 md:h-28 sm:w-16 sm:h-16 duration-1000 animate-pulse ease-linear "
          />
        </div>
      </div>
      <div className="relative">
        <div className="hidden sm:block absolute top-[400px] right-0 z-30">
          <img
            src={Design}
            alt="Blob"
            className="xl:w-full xl:h-[400px] lg:w-52 lg:h-52 md:w-28 md:h-28 sm:w-16 sm:h-16 animate-pulse ease "
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: "",
            age: "",
            gender: "",
            birthdate: "",
            occupation: "",
            agreeTerms: false,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            phoneNumber: Yup.string().required("Required"),
            address: Yup.string().required("Required"),
            age: Yup.number()
              .required("Required")
              .positive("Must be a positive number")
              .integer("Must be a whole number"),
            gender: Yup.string().required("Required"),
            birthdate: Yup.date().required("Required"),
            occupation: Yup.string().required("Required"),
            agreeTerms: Yup.boolean().oneOf(
              [true],
              "You must agree to the terms and conditions"
            ),
          })}
          onSubmit={(values) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ isSubmitting }) => (
            <div className="w-full max-w-xl max-md:w-md p-6 bg-white rounded-lg shadow-lg ">
              <Form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-Roboto-Medium text-quaternary"
                    >
                      First Name <span className="text-red-500"> *</span>
                    </label>
                    <Field
                      name="firstName"
                      type="text"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <ErrorMessage
                      name="firstName"
                      render={(msg) => (
                        <div className="text-red-500">{msg}</div>
                      )}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-Roboto-Medium text-quaternary"
                    >
                      Last Name <span className="text-red-500"> *</span>
                    </label>
                    <Field
                      name="lastName"
                      type="text"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <ErrorMessage
                      name="lastName"
                      render={(msg) => (
                        <div className="text-red-500">{msg}</div>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-Roboto-Medium text-quaternary"
                    >
                      Email Address<span className="text-red-500"> *</span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <ErrorMessage
                      name="email"
                      render={(msg) => (
                        <div className="text-red-500">{msg}</div>
                      )}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-Roboto-Medium text-quaternary"
                    >
                      Phone Number<span className="text-red-500"> *</span>
                    </label>
                    <Field
                      name="phoneNumber"
                      type="text"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      render={(msg) => (
                        <div className="text-red-500">{msg}</div>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-Roboto-Medium text-quaternary"
                    >
                      Gender<span className="text-red-500"> *</span>
                    </label>
                    <Field
                      as="select"
                      name="gender"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="" selected disabled>
                        Select Gender<span className="text-red-500"> *</span>
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="preferNotToSay">Prefer not to say</option>
                    </Field>
                    <ErrorMessage
                      name="gender"
                      render={(msg) => (
                        <div className="text-red-500">{msg}</div>
                      )}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="birthdate"
                      className="block text-sm font-Roboto-Medium text-quaternary"
                    >
                      Birthdate<span className="text-red-500"> *</span>
                    </label>
                    <Field
                      name="birthdate"
                      type="date"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <ErrorMessage
                      name="birthdate"
                      render={(msg) => (
                        <div className="text-red-500">{msg}</div>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-Roboto-Medium text-quaternary"
                    >
                      Address<span className="text-red-500"> *</span>
                    </label>
                    <Field
                      name="address"
                      type="text"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <ErrorMessage
                      name="address"
                      render={(msg) => (
                        <div className="text-red-500">{msg}</div>
                      )}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="age"
                      className="block text-sm font-Roboto-Medium text-quaternary"
                    >
                      Age<span className="text-red-500"> *</span>
                    </label>
                    <Field
                      name="age"
                      type="number"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <ErrorMessage
                      name="age"
                      render={(msg) => (
                        <div className="text-red-500">{msg}</div>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="occupation"
                      className="block text-sm font-Roboto-Medium text-quaternary"
                    >
                      Occupation<span className="text-red-500"> *</span>
                    </label>
                    <Field
                      name="occupation"
                      type="text"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <ErrorMessage
                      name="occupation"
                      render={(msg) => (
                        <div className="text-red-500">{msg}</div>
                      )}
                    />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Field
                    type="checkbox"
                    name="agreeTerms"
                    id="agreeTerms"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="agreeTerms"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" p-ripple w-full bg-darks text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                >
                  {issetSubmitting ? "Submitting..." : "Proceed"}
                  <Ripple />
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default PersonalInfoForm;
