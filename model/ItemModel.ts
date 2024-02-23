export type Item = {
    id: number;
    name: string;
    description: string;
    age: number;
    active: boolean;
    birthdate: string;
    image_url: string;
    condition: string;
    hobbies: string[];
    seller: {
        id: number;
        name: string;
        is_verified: boolean;
        rating: number;
        profile_picture_url: string;
    };
};
