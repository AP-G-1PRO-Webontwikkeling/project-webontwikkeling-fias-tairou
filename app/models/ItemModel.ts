import { Seller } from "./SellerModel";

export type Item = {
    _id: number;
    name: string;
    description: string;
    estimatedValue: string;
    active: boolean;
    birthdate: string;
    imageUrl: string;
    condition: string;
    hobbies: string[];
    seller: Seller;
};
