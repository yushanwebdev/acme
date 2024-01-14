import { z } from 'zod';

export const CreateInvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string().refine((val) => val.length >= 1, {
    message: 'Please select a customer.',
  }),
  amount: z.coerce.number().gt(0, {
    message: 'Please enter an amount greater than $0.',
  }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});
