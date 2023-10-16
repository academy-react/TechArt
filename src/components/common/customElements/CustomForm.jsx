import React from "react";
import { Form, Formik } from "formik";

const CustomForm = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="space-y-6" action="#" method="POST">
        {children}
      </Form>
    </Formik>
  );
};

export {CustomForm};
