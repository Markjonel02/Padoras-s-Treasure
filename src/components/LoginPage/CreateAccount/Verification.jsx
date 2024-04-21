import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Ripple } from "primereact/ripple";
const VerificationForm = () => {
  const onSubmit = (values, { setSubmitting }) => {
    // Handle form submission
  };

  const handleResend = () => {
    // Handle resend logic
  };

  return (
    <div className="w-full max-w-xl max-md:w-md p-6 bg-white rounded-lg shadow-lg">
      <Formik
        initialValues={{
          verificationCode: "",
        }}
        validationSchema={Yup.object({
          verificationCode: Yup.string()
            .test(
              "is-numbers-only",
              "Verification code must contain only numbers",
              (value) => /^[0-9]+$/.test(value)
            )
            .test(
              "is-six-digits",
              "Verification code must be exactly 6 digits",
              (value) => value.length === 6
            )
            .test(
              "no-letters",
              "Verification code must not contain letters",
              (value) => !/[a-zA-Z]/.test(value)
            )
            .required("Verification code Required"),
        })}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="verificationCode"
                className="block text-sm font-Roboto-Medium text-quaternary"
              >
                {/*   Email Verification Code <span className="text-red-500"> *</span> */}
              </label>
              <Field
                name="verificationCode"
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="verificationCode"
                render={(msg) => <div className="text-red-500">{msg}</div>}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className=" p-ripple w-full bg-darks text-white py-3 px-4 rounded-md hover:bg-primary focus:outline-none focus:bg-primary mr-2"
              >
                {isSubmitting ? "Submitting..." : "Verify"}
                <Ripple />
              </button>
              <button
                type="submit"
                onClick={handleResend}
                className=" p-ripple w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 ml-2"
              >
                Resend
                <Ripple />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default VerificationForm;
