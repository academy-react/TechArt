import * as yup from "yup";
import { phoneConfirmCodeRules } from "../../../utils/auth";

const phoneConfirmSchema = yup.object().shape({
  confirmCode: yup
    .string()
    .matches(phoneConfirmCodeRules, "کد ارسال شده ترکیبی از 5 عدد است")
    .required("حاجی کد رو وارد نکردی"),
});

export { phoneConfirmSchema };
