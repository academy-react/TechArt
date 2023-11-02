import * as yup from "yup";

const forgetPassSchema = yup.object().shape({
  email: yup
    .string()
    .email("ایمیل باید آدمیزادی باشه این دیگ چیه؟")
    .required("حاجی ایمیل وارد نکردی"),
});

export { forgetPassSchema };
