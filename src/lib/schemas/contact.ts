import * as v from 'valibot';

export const contactSchema = v.object({
    name: v.pipe(
        v.string(),
        v.nonEmpty('Please enter your name.'),
        v.minLength(2, 'Name must be at least 2 characters.')
    ),
    email: v.pipe(
        v.string(),
        v.nonEmpty('Please enter your email.'),
        v.email('Please enter a valid email address.')
    ),
    message: v.pipe(
        v.string(),
        v.nonEmpty('Please enter your message.'),
        v.minLength(10, 'Message must be at least 10 characters.')
    )
});