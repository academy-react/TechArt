import * as yup from "yup";
import { phoneNumberRules } from "../../../utils/auth";

const { start, count } = phoneNumberRules;

const phoneNumberSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(start, "فرمت شماره وارد شده درست نیست")
    .matches(count, "تعداد ارقام ورودی درست نیست")
    .required("حاجی شماره وارد نکردی"),
});

export { phoneNumberSchema };
