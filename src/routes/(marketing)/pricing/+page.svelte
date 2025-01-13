<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Label } from '$lib/components/ui/label';
	import { Switch } from '$lib/components/ui/switch';
	import { Database, Check } from 'lucide-svelte';
	import { plans } from '../../../config';

	let isYearly = false;
</script>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 flex flex-col items-center justify-between lg:flex-row">
			<h2 class="font-manrope mb-4 text-center text-5xl font-bold lg:text-left">
				Simple pricing for everyone
			</h2>
			<div class="flex flex-col items-center gap-3 lg:flex-row">
				<span class="flex items-center gap-2">
					<Database size={20} /> Save up to 30%
				</span>
				<div class="flex items-center space-x-2">
					<Label for="billing-switch">Monthly</Label>
					<Switch id="billing-switch" bind:checked={isYearly} />
					<Label for="billing-switch">Yearly</Label>
				</div>
			</div>
		</div>

		<div class="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:items-center lg:space-y-0 xl:gap-8">
			{#each isYearly ? plans.yearly : plans.monthly as plan}
				<Card.Root>
					<Card.Content class="p-8 xl:p-10">
						<Badge variant="secondary" class="mb-6">
							{plan.type}
						</Badge>
						<div class="mb-8 flex items-center">
							<span class="font-manrope text-3xl font-bold xl:text-5xl">${plan.price}</span>
							<span class="ml-2 text-sm lg:text-base">/{isYearly ? 'year' : 'month'}</span>
						</div>
						<h3 class="mb-9 text-lg font-semibold">{plan.name}</h3>

						<ul class="mb-12 space-y-6">
							{#each plan.features as feature}
								<li class="flex items-center space-x-3">
									<Check class="h-6 w-6" />
									<span>{feature}</span>
								</li>
							{/each}
						</ul>

						<Button variant="outline" class="w-full rounded-full">Get Started</Button>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
