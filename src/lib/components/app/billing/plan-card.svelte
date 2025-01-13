<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button';
	import { Progress } from '$lib/components/ui/progress';
	import { Badge } from '$lib/components/ui/badge';
	import { Building2, Users, ArrowUpRight } from 'lucide-svelte';

	let seats = { used: 5, total: 20 };
	let plan = {
		name: 'Startup',
		status: 'Active',
		renewalDate: 'March 25th, 2023',
		price: 39
	};
</script>

<Card.Root class="flex flex-col justify-between">
	<Card.Header>
		<div class="flex items-start gap-4">
			<div class="rounded-lg border p-2">
				<Building2 class="size-6" />
			</div>
			<div class="flex flex-col gap-1">
				<div class="flex items-center gap-2">
					<Card.Title>{plan.name}</Card.Title>
					<Badge variant="outline" class="rounded-full">
						<span class="mr-1 size-1.5 rounded-full bg-primary"></span>
						{plan.status}
					</Badge>
				</div>
				<Card.Description>Renews on {plan.renewalDate}</Card.Description>
			</div>
			<div class="ml-auto text-right">
				<Card.Title>${plan.price}</Card.Title>
				<Card.Description>monthly</Card.Description>
			</div>
		</div>
	</Card.Header>

	<Card.Content class="space-y-6">
		<div class="space-y-2">
			<div class="flex justify-between">
				<div class="flex items-center gap-2">
					<Users class="size-4" />
					<span class="font-medium">Seats</span>
				</div>
				<span class="text-sm">{seats.used} of {seats.total} used</span>
			</div>
			<Progress value={(seats.used / seats.total) * 100} />
		</div>

		<div class="flex justify-end">
			<Button variant="outline" disabled>Manage seats</Button>
		</div>
	</Card.Content>

	<Card.Footer class="grid grid-cols-2 divide-x border-t p-0">
		<Button variant="ghost" class="rounded-none rounded-bl">Cancel subscription</Button>
		<Button variant="ghost" class="flex items-center gap-2 rounded-none rounded-br">
			Upgrade plan
			<ArrowUpRight class="size-4" />
		</Button>
	</Card.Footer>
</Card.Root>
