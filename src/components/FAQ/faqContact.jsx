import { Formik, Form, Field, ErrorMessage } from "formik";
import { Ripple } from "primereact/ripple";

const ContactForm = () => {
  return (
    <>
      {" "}
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl xl:text-5xl md:text-3xl sm:text-sm mb-3 font-Roboto-Black mt-5 capitalize text-quaternary">
          Get in touch
        </h1>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            message: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.firstname) {
              errors.firstname = "Firstname is Required";
            }
            
            if (!values.lastname) {
              errors.lastname = "Lastname is Required";
            }
            if (!values.email) {
              errors.email = "Email is Required";
            } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
              errors.email = "Invalid email address";
            }

            if (!values.message) {
              errors.message = "Required";
            } else if (values.message.length > 1500) {
              errors.message = "Message must be 1500 characters or less";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              values.message = "";
              values.lastname = "";
              values.email = "";
              values.firstname = "";
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-md font-Roboto-Medium text-quaternary dark:text-quaternary"
                  >
                    Firstname <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    name="firstname"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-quaternary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-14 p-2.5 dark:bg-gray-100 dark:placeholder-gray-400 dark:text-quaternary dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  />
                  <ErrorMessage
                    name="firstname"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-md font-Roboto-Medium text-quaternary dark:text-quaternary"
                  >
                    Lastname<span className="text-red-500"> *</span>
                  </label>
                  <Field
                    type="text"
                    name="lastname"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-quaternary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-14 p-2.5 dark:bg-gray-100 dark:placeholder-gray-400 dark:text-quaternary dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="mb-5 mt-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-md font-Roboto-Medium text-quaternary dark:text-quaternary"
                >
                  Email<span className="text-red-500"> *</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  className="block p-2.5 w-full text-md text-quaternary bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-blue-500 dark:bg-gray-100 dark:placeholder-gray-400 dark:text-quaternary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-5 mt-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-md font-Roboto-Medium text-quaternary dark:text-quaternary"
                >
                  Message<span className="text-red-500"> *</span>
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows="7"
                  className="block p-2.5 w-full text-md text-quaternary bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-blue-500 dark:bg-gray-100 dark:placeholder-gray-400 dark:text-quaternary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="p-ripple text-white font-Roboto-Bold text-lg sm:text-sm xl:text-lg h-14 w-full bg-darks focus:ring-4 focus:outline-none focus:ring-dark-pink font-medium rounded-lg px-5 py-2.5 text-center dark:focus:ring-blue-800"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <Ripple />
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
