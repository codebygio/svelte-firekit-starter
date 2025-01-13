export interface NotificationChannel {
    id: string;
    icon: any;
    label: string;
    description?: string;
}

export interface NotificationSetting {
    id: string;
    category: string;
    title: string;
    description: string;
    email: boolean;
    desktop: boolean;
    mobile: boolean;
}