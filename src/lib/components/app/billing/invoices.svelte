<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import { Button } from '$lib/components/ui/button';
	import { Download, Eye } from 'lucide-svelte';

	interface Invoice {
		id: string;
		date: string;
		amount: number;
		plan: string;
	}

	const invoices: Invoice[] = [
		{
			id: '25-02-2023',
			date: 'Feb 25, 2023',
			amount: 39,
			plan: 'Startup'
		},
		{
			id: '25-01-2023',
			date: 'Jan 25, 2023',
			amount: 39,
			plan: 'Startup'
		},
		{
			id: '25-12-2022',
			date: 'Dec 25, 2022',
			amount: 39,
			plan: 'Startup'
		},
		{
			id: '25-11-2022',
			date: 'Nov 25, 2022',
			amount: 39,
			plan: 'Startup'
		}
	];

	const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
</script>

<div class="space-y-4">
	<Table.Root>
		<Table.Caption>A list of your recent invoices.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head>Invoice</Table.Head>
				<Table.Head>Billing date</Table.Head>
				<Table.Head>Amount</Table.Head>
				<Table.Head>Plan</Table.Head>
				<Table.Head class="text-right">Actions</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each invoices as invoice (invoice.id)}
				<Table.Row>
					<Table.Cell class="font-medium">
						<div class="flex items-center gap-2">
							<svg
								class="size-7"
								viewBox="0 0 400 492"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M50.7496 -0.174609C22.9188 -0.174609 -0.0878906 22.4611 -0.0878906 50.6629V440.664C-0.0878906 468.495 22.5478 491.502 50.7496 491.502H349.095C376.926 491.502 399.932 468.866 399.932 440.664V119.683C399.932 119.683 400.675 110.406 396.593 101.129C392.882 92.5945 386.574 86.6573 386.574 86.6573L312.729 13.9263C312.729 13.9263 306.421 7.98906 297.144 3.90722C286.012 -0.916768 274.88 -0.174609 274.88 -0.174609H50.7496Z"
									fill="currentColor"
									class="fill-primary"
								/>
							</svg>
							{invoice.id}
						</div>
					</Table.Cell>
					<Table.Cell>{invoice.date}</Table.Cell>
					<Table.Cell>${invoice.amount}</Table.Cell>
					<Table.Cell>{invoice.plan}</Table.Cell>
					<Table.Cell class="text-right">
						<div class="flex justify-end gap-2">
							<Button variant="outline" size="sm">
								<Eye class="size-4" />
								<span class="sr-only">View</span>
							</Button>
							<Button variant="outline" size="sm">
								<Download class="size-4" />
								<span class="sr-only">Download</span>
							</Button>
						</div>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
		<Table.Footer>
			<Table.Row>
				<Table.Cell colspan={3}>Total amount</Table.Cell>
				<Table.Cell colspan={2} class="text-right font-medium">${totalAmount}</Table.Cell>
			</Table.Row>
		</Table.Footer>
	</Table.Root>
</div>
