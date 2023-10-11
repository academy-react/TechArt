import * as yup from "yup";
import { passwordRules } from "../../../utils/auth";

const { lowerCase, upperCase, number } = passwordRules;

const changePassSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "رمز باید حد اقل ۸ کاراکتر باشه")
    .matches(upperCase, { message: "حد اقل یه کاراکتر بزرگ بزن" })
    .matches(lowerCase, { message: "حد اقل یه کاراکتر کوچیک بزن" })
    .matches(number, { message: "حد اقل یه عدد بزن" })
    .required("بدون رمز آخه؟!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "رمز عبورایی که وارد کردی یکی نیستن")
    .required("تکرار رمزو وارد کن مطمئن شی درسته"),
});

export { changePassSchema };
