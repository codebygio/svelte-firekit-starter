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
        title: "Home",
        url: "/"
    },

    {
        title: "Features",
        url: "/features"
    },
    {
        title: "Pricing",
        url: "/pricing"
    },

    {
        title: "Blog",
        url: "/blog"
    },
    {
        title: "Contact",
        url: "/contact"
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
        title: 'giovanirodriguez26',
        url: 'https://www.linkedin.com/in/giovanirodriguez26/',
        icon: 'linkedin'
    },
    {
        title: 'codebygio',
        url: 'https://github.com/codebygio',
        icon: 'github'
    },
];

export const contactInfo = {
    email: 'info@codegio.com',
    phone: '+52 818 201 2602',
    address: 'Monterrey, Mexico',
}

export const plans = {
    monthly: [
        {
            type: 'Hobby',
            price: '0',
            name: 'Personal Projects',
            features: ['1 project', 'Basic Firebase setup', 'Community support', 'Basic components']
        },
        {
            type: 'Pro',
            price: '29',
            name: 'Professional',
            features: [
                'Unlimited projects',
                'Priority support',
                'Advanced components',
                'Custom configurations'
            ]
        },
        {
            type: 'Enterprise',
            price: '99',
            name: 'Team Plan',
            features: [
                'Team collaboration',
                'Custom integrations',
                'Advanced security',
                'Dedicated support'
            ]
        }
    ],
    yearly: [
        {
            type: 'Hobby',
            price: '0',
            name: 'Personal Projects',
            features: ['1 project', 'Basic Firebase setup', 'Community support', 'Basic components']
        },
        {
            type: 'Pro',
            price: '290',
            name: 'Professional',
            features: [
                'Unlimited projects',
                'Priority support',
                'Advanced components',
                'Custom configurations'
            ]
        },
        {
            type: 'Enterprise',
            price: '990',
            name: 'Team Plan',
            features: [
                'Team collaboration',
                'Custom integrations',
                'Advanced security',
                'Dedicated support'
            ]
        }
    ]
};