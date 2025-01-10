<script lang="ts">
	import { goto } from '$app/navigation';
	import { firekitAuth } from 'svelte-firekit';

	import * as Form from '../ui/form/index.js';
	import { Input } from '../ui/input/index.js';
	import { resetPasswordSchema } from '../../schemas/reset-password.js';
	import { toast } from 'svelte-sonner';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { valibot } from 'sveltekit-superforms/adapters';

	const data = defaults(valibot(resetPasswordSchema));

	const form = superForm(data, {
		validators: valibot(resetPasswordSchema),
		dataType: 'json',
		SPA: true,
		resetForm: false,
		clearOnSubmit: 'errors-and-message',
		async onUpdate({ form }) {
			if (!form.valid) return;
			try {
				const { data } = form;
				const { email } = data;
				await firekitAuth.sendPasswordReset(email);
				toast.success('Password reset email sent');
				goto('/sign-in');
			} catch (error) {
				if (error instanceof Error) {
					toast.error(error.message);
				} else {
					toast.error('An error occurred');
				}
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance class="space-y-4">
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Email address</Form.Label>
				<Input {...props} bind:value={$formData.email} placeholder="you@email.com" />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button class="w-full">Send Email</Form.Button>
</form>
