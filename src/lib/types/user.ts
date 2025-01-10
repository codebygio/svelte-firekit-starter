import type { Timestamp } from "@firebase/firestore";


export interface UserProfile {
    uid: string;
    email: string;
    displayName: string | null;
    photoURL: string | null;

    // Authentication and status
    isActive: boolean;
    lastLoginAt: Timestamp;
    createdAt: Timestamp;
    updatedAt: Timestamp;

    // Profile information
    firstName?: string;
    lastName?: string;
    username?: string;
    bio?: string;
    phoneNumber?: string;

    // Preferences and settings
    emailNotifications: boolean;
    pushNotifications: boolean;
    theme: 'light' | 'dark' | 'system';
    language: string;

    // Role-based access control
    role: 'user' | 'admin' | 'moderator';
    permissions: string[];


    // Address information (optional)
    address?: {
        street: string;
        city: string;
        state: string;
        country: string;
        postalCode: string;
    };

    // Additional metadata
    metadata: {
        deviceInfo?: {
            lastDevice: string;
            platform: string;
        };
        lastIPAddress?: string;
        accountStatus: 'active' | 'suspended' | 'deactivated';
    };
}

