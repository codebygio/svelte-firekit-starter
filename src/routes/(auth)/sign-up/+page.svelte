<script lang="ts">
	import SignInWithGoogle from '$lib/components/auth/google-sign-in.svelte';
	import SignUpForm from '$lib/components/auth/sign-up-form.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<Card.Root class="sm:w-[448px]">
	<Card.Header>
		<Card.Title class="text-center text-2xl">Sign Up</Card.Title>
		<Card.Description class="text-center">
			Already have an account?
			<Button variant="link" href="/sign-in" class="p-0">Sign in here</Button>
		</Card.Description>
	</Card.Header>
	<Card.Content class="space-y-5">
		<SignInWithGoogle label="Sign up with" />

		<div
			class="before:muted-foreground after:muted-foreground flex items-center text-xs uppercase text-muted-foreground before:me-6 before:flex-1 before:border-t after:ms-6 after:flex-1 after:border-t dark:before:border-muted-foreground dark:after:border-muted-foreground"
		>
			Or
		</div>

		<SignUpForm />
	</Card.Content>
</Card.Root>
