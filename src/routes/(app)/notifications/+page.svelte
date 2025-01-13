<script lang="ts">
	import DoNotDisturbSection from '$lib/components/app/notifications/do-not-disturb-section.svelte';
	import NotificationChannel from '$lib/components/app/notifications/notification-channel.svelte';
	import NotificationSection from '$lib/components/app/notifications/notification-section.svelte';
	import { Button } from '$lib/components/ui/button';

	const generalSettings = [
		{
			id: 'mentions',
			category: 'general',
			title: 'Mentions',
			description: 'Receive a notification if a teammate mentions you in a note.',
			email: true,
			desktop: false,
			mobile: false
		},
		{
			id: 'service-updates',
			category: 'general',
			title: 'Service provider updates',
			description: 'Receive a notification when there are changes to the list of service providers',
			email: true,
			desktop: false,
			mobile: false
		}
	];

	const taskSettings = [
		{
			id: 'task-assignments',
			category: 'tasks',
			title: 'Task Assignments',
			description: "Notify me when I'm assigned a task",
			email: true,
			desktop: true,
			mobile: true
		},
		{
			id: 'task-completed',
			category: 'tasks',
			title: 'Tasks completed',
			description: 'Only for tasks youve created or assigned',
			email: true,
			desktop: true,
			mobile: true
		}
	];

	let scheduleEnabled = false;
	let startTime = '17:00';
	let endTime = '09:00';
	let selectedDays: string[] = [];
</script>

<div class="space-y-6 p-6">
	<div>
		<h1 class="text-2xl font-semibold tracking-tight">Notifications</h1>
		<p class="text-sm text-muted-foreground">
			Configure email, desktop and mobile app notifications.
		</p>
	</div>

	<div class="space-y-8">
		<NotificationChannel />

		<NotificationSection title="General" settings={generalSettings} />

		<NotificationSection title="Tasks" settings={taskSettings} />

		<DoNotDisturbSection bind:scheduleEnabled bind:startTime bind:endTime bind:selectedDays />

		<div class="flex gap-4">
			<Button>Save changes</Button>
			<Button variant="outline">Cancel</Button>
		</div>
	</div>
</div>
