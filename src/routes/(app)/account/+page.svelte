<script lang="ts">
	import Avatar from '$lib/components/app/account/avatar.svelte';
	import PersonalInformation from '$lib/components/app/account/personal-information.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<div class="flex h-full flex-col items-center justify-center">
	<Card.Root class="max-w-lg">
		<Card.Header>
			<Card.Title>Account</Card.Title>
			<Card.Description>Manage your name, password and account settings.</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="flex flex-col justify-start gap-6">
				<Avatar />
				<PersonalInformation />
			</div>
		</Card.Content>
	</Card.Root>
</div>
