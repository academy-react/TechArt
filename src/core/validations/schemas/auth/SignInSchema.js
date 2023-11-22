import * as yup from "yup";

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("ایمیل باید آدمیزادی باشه این دیگ چیه؟")
    .required("حاجی ایمیل وارد نکردی"),
  password: yup
    .string()
    .min(6, "رمزت حد اقل 6 کاراکتر هست")
    .required("بدون رمز آخه؟!"),
  rememberMe: yup.boolean().oneOf([true, false]),
});

export { signInSchema };
