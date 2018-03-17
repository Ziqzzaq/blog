export interface Article {
    _id?: {$oid: string};
    userId: string;
    name: string;
    description: string;
    content: any;
    created: string;
    }
    