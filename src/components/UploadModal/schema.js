import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must contain more than 3 characters')
    .max(20, 'Name must not be longer than 20 characters')
    .required('Field are required!'),
  price: Yup.number('Price must be a positive number')
    .typeError('Price must be a positive number')
    .positive('Price must be a positive number')
    .integer('Price must be a positive number')
    .required('Field are required!'),
  origin: Yup.object().required('Field are required!'),
})
