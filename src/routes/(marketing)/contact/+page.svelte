<script lang="ts">
	import ContactForm from '$lib/components/marketing/contact/contact-form.svelte';
	import ContactInfo from '$lib/components/marketing/contact/contact-info.svelte';
</script>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-x-8 lg:grid-cols-2">
			<!-- Contact Info -->
			<div class="flex items-center justify-center lg:justify-start">
				<ContactInfo />
			</div>

			<!-- Contact Form -->
			<div class="mt-10 flex items-center justify-center lg:mt-0">
				<ContactForm />
			</div>
		</div>
	</div>
</section>
