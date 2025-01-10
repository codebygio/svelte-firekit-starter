import * as v from 'valibot';

export const resetPasswordSchema = v.object({
	email: v.pipe(
		v.string(),
		v.nonEmpty('Please enter your email.'),
		v.email('The email address is badly formatted.')
	),
});
