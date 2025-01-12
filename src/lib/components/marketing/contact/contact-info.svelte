<script lang="ts">
	import SocialMediaIcons from '$lib/components/shared/social-media-icons.svelte';
	import { Phone, Mail, MapPin } from 'lucide-svelte';
	import { contactInfo } from '../../../../config';
</script>

<div class="pt-0 lg:pt-6">
	<h2 class="font-manrope mb-5 text-center text-4xl font-semibold lg:text-start">Get In Touch</h2>
	<p class="mb-10 max-w-lg text-center text-lg lg:text-start">
		Feel free to contact us? submit your queries here and we will get back to you as soon as
		possible.
	</p>

	<div class="space-y-6">
		<div class="flex items-center justify-center lg:justify-start">
			<Phone size={24} />
			<span class="ml-5">{contactInfo.phone} </span>
		</div>

		<div class="flex items-center justify-center lg:justify-start">
			<Mail size={24} />
			<span class="ml-5">{contactInfo.email} </span>
		</div>

		<div class="flex items-center justify-center border-b pb-6 lg:justify-start">
			<MapPin size={24} />
			<span class="ml-5">{contactInfo.address} </span>
		</div>

		<div class="flex items-center justify-center gap-4 lg:justify-start">
			<SocialMediaIcons />
		</div>
	</div>
</div>
