<script lang="ts">
	import { superForm, defaults } from 'sveltekit-superforms';
	import { valibot } from 'sveltekit-superforms/adapters';
	import { contactSchema } from '$lib/schemas/contact';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as Form from '$lib/components/ui/form';
	import * as Card from '$lib/components/ui/card';
	import { toast } from 'svelte-sonner';

	const data = defaults(valibot(contactSchema));

	const form = superForm(data, {
		validators: valibot(contactSchema),
		dataType: 'json',
		SPA: true,
		resetForm: true,
		clearOnSubmit: 'errors-and-message',
		async onUpdate({ form }) {
			if (!form.valid) return;
			try {
				// Handle form submission
				toast.success('Message sent successfully!');
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

<Card.Root class="w-full max-w-xl">
	<Card.Content class="p-8">
		<h3 class="mb-6 text-2xl font-semibold">Send Us Message</h3>

		<form method="POST" use:enhance class="space-y-6">
			<Form.Field {form} name="name">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Name</Form.Label>
						<Input {...props} bind:value={$formData.name} placeholder="Your name" />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Email</Form.Label>
						<Input {...props} bind:value={$formData.email} placeholder="you@example.com" />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="message">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Message</Form.Label>
						<Textarea
							{...props}
							bind:value={$formData.message}
							placeholder="Your message"
							class="min-h-[150px] resize-none"
						/>
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Button class="w-full">Submit</Form.Button>
		</form>
	</Card.Content>
</Card.Root>
