export interface Article {
    _id?: {$oid: string};
    userName: string;
    name: string;
    description: string;
    content: string;
    views: number;
    created: Date;
    }
    