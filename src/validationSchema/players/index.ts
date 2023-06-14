import * as yup from 'yup';
import { performanceValidationSchema } from 'validationSchema/performances';

export const playerValidationSchema = yup.object().shape({
  position: yup.string().required(),
  date_of_birth: yup.date().required(),
  height: yup.number().integer().required(),
  weight: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  performance: yup.array().of(performanceValidationSchema),
});
