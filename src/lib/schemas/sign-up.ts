import * as v from 'valibot';

export const signUpSchema = v.object({
	firstName: v.pipe(
		v.string(),
		v.nonEmpty('Please enter your first name.')
	),
	lastName: v.pipe(
		v.string(),
		v.nonEmpty('Please enter your last name.')
	),
	email: v.pipe(
		v.string(),
		v.nonEmpty('Please enter your email.'),
		v.email('The email address is badly formatted.')
	),
	password: v.pipe(
		v.string(),
		v.nonEmpty('Please enter your password.'),
		v.minLength(8, 'Your password must have 8 characters or more.')
	),
	agreeToTerms: v.pipe(
		v.boolean(),
		v.custom((value) => value === true,
			'You must agree to the terms and conditions.',
		)
	)
});
