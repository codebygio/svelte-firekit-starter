<script lang="ts">
	import { firekitAuth } from 'svelte-firekit';

	import * as Form from '../ui/form/index.js';
	import { Input } from '../ui/input/index.js';
	import { signUpSchema } from '../../schemas/sign-up.js';
	import { toast } from 'svelte-sonner';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { valibot } from 'sveltekit-superforms/adapters';
	import Button from '../ui/button/button.svelte';
	import Checkbox from '../ui/checkbox/checkbox.svelte';
	import { goto } from '$app/navigation';

	const data = defaults(valibot(signUpSchema));

	const form = superForm(data, {
		validators: valibot(signUpSchema),
		dataType: 'json',
		SPA: true,
		resetForm: false,
		clearOnSubmit: 'errors-and-message',
		async onUpdate({ form }) {
			if (!form.valid) return;
			try {
				const { data } = form;
				const { email, password, firstName, lastName } = data;
				const displayName = `${firstName} ${lastName}`;
				await firekitAuth.registerWithEmail(email, password, displayName);
				toast.success('Account created successfully');
				goto('/dashboard');
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

<form method="POST" use:enhance class="space-y-2">
	<div class="grid grid-cols-2 gap-4">
		<Form.Field {form} name="firstName">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>First Name</Form.Label>
					<Input {...props} bind:value={$formData.firstName} placeholder="John" />
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="lastName">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Last Name</Form.Label>
					<Input {...props} bind:value={$formData.lastName} placeholder="Smith" />
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
	</div>
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Email</Form.Label>
				<Input {...props} bind:value={$formData.email} placeholder="you@email.com" />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="password">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Password</Form.Label>
				<Input {...props} bind:value={$formData.password} placeholder="*********" type="password" />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="agreeToTerms">
		<Form.Control>
			{#snippet children({ props })}
				<div class="flex items-center gap-2">
					<Checkbox {...props} bind:checked={$formData.agreeToTerms} />

					<Form.Label>
						By signing up, you agree to our
						<Button variant="link" href="/terms-and-condition" class="p-0">
							Terms and Conditions
						</Button>
					</Form.Label>
				</div>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button class="w-full">Sign Up</Form.Button>
</form>
