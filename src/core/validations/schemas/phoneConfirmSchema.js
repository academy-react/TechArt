import * as yup from "yup";
import { phoneConfirmCodeRules } from "../../utils/phoneConfirmCodeRules.utils";

const phoneConfirmSchema = yup.object().shape({
  confirmCode: yup
    .string()
    .matches(phoneConfirmCodeRules, "کد ارسال شده ترکیبی از ۶ عدد است")
    .required("حاجی کد رو وارد نکردی"),
});

export { phoneConfirmSchema };
