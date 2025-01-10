<script lang="ts">
	import ResetPasswordForm from '$lib/components/auth/reset-password-form.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<Card.Root class="sm:w-[448px]">
	<Card.Header>
		<Card.Title class="text-center text-2xl">Forgot password?</Card.Title>
		<Card.Description class="text-center">
			Remember your password?
			<Button variant="link" href="/sign-in" class="p-0">Sign in here</Button>
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<ResetPasswordForm />
	</Card.Content>
</Card.Root>
