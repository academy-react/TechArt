import * as yup from "yup";

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("ایمیل باید آدمیزادی باشه این دیگ چیه؟")
    .required("حاجی ایمیل وارد نکردی"),
  password: yup
    .string()
    .min(8, "رمزت حد اقل ۸ کاراکتر هست")
    .required("بدون رمز آخه؟!"),
  rememberMe: yup.boolean().oneOf([true, false]),
});

export { signInSchema };
