<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Switch } from '$lib/components/ui/switch';
	import { BellOff } from 'lucide-svelte';
	let {
		scheduleEnabled = $bindable(false),
		startTime = $bindable('17:00'),
		endTime = $bindable('09:00'),
		selectedDays = $bindable([])
	}: {
		scheduleEnabled: boolean;
		startTime: string;
		endTime: string;
		selectedDays: string[];
	} = $props();
</script>

<div class="space-y-6">
	<div>
		<h4 class="mb-2 text-sm font-medium">Do not disturb</h4>
		<Button variant="outline" class="gap-2">
			<BellOff class="size-4" />
			Pause notifications
		</Button>
	</div>

	<div>
		<h4 class="mb-4 text-sm font-medium">Schedule</h4>
		<div class="flex flex-col gap-4 sm:flex-row sm:items-center">
			<div class="flex items-center gap-2">
				<Switch bind:checked={scheduleEnabled} />
				<span class="text-sm">Do not notify me from:</span>
			</div>
			<div class="flex items-center gap-2">
				<input
					type="time"
					class="rounded-md border border-input px-3 py-2 text-sm"
					bind:value={startTime}
					disabled={!scheduleEnabled}
				/>
				<span class="text-sm">to</span>
				<input
					type="time"
					class="rounded-md border border-input px-3 py-2 text-sm"
					bind:value={endTime}
					disabled={!scheduleEnabled}
				/>
			</div>
		</div>
	</div>

	<div>
		<h4 class="mb-4 text-sm font-medium">Do not disturb me on my days off</h4>
		<div class="flex flex-wrap gap-2">
			{#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as day}
				<Button
					variant={selectedDays.includes(day) ? 'default' : 'outline'}
					size="sm"
					onclick={() => {
						selectedDays = selectedDays.includes(day)
							? selectedDays.filter((d) => d !== day)
							: [...selectedDays, day];
					}}
				>
					{day}
				</Button>
			{/each}
		</div>
	</div>
</div>
