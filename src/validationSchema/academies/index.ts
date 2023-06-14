import * as yup from 'yup';
import { eventValidationSchema } from 'validationSchema/events';
import { playerValidationSchema } from 'validationSchema/players';

export const academyValidationSchema = yup.object().shape({
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  event: yup.array().of(eventValidationSchema),
  player: yup.array().of(playerValidationSchema),
});
