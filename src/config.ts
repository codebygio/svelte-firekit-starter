import type { NavItem, SidebarNav, SocialLink } from "$lib/types/nav";
import { LayoutDashboard, SquareTerminal } from "lucide-svelte";


export const siteConfig = {
    title: 'Svelte Firekit Starter',
    description:
        'A SvelteKit starter template with Firebase authentication, Firestore, and storage.',
    logo: '/logo.svg',
    logoDark: '/logo-white.svg',
    favicon: '/favicon.png',
};

export const marketingNavItems: NavItem[] = [

    {
        title: "Blog",
        url: "/blog"
    },

    {
        title: "Features",
        url: "/features"
    },
    {
        title: "Pricing",
        url: "/pricing"
    },
];

export const appNavItems: SidebarNav[] = [
    {
        title: 'Platform',
        items: [
            {
                title: 'Dashboard',
                url: '/dashboard',
                icon: LayoutDashboard,

            },

        ]
    },

]

export const socialLinks: SocialLink[] = [
    {
        title: 'linkedin-username',
        url: 'https://www.linkedin.com/in/username/',
        icon: 'linkedin'
    },
    {
        title: 'github-username',
        url: 'https://github.com/username',
        icon: 'github'
    },
];