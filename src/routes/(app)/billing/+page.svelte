<script lang="ts">
	import Invoices from '$lib/components/app/billing/invoices.svelte';
	import PaymentMethods from '$lib/components/app/billing/payment-methods.svelte';
	import PlanCard from '$lib/components/app/billing/plan-card.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
</script>

<div class="flex h-full flex-col gap-6">
	<div>
		<h1 class="text-lg font-semibold">Plan &amp; Billing</h1>
		<p class="text-sm">View your plan information or switch plans according to your needs.</p>
	</div>
	<div class="flex flex-col justify-start gap-6">
		<div class="grid gap-6 xl:grid-cols-2">
			<PlanCard />
			<PaymentMethods />
		</div>
		<Separator />
		<Invoices />
	</div>
</div>
