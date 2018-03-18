export interface Article {
    _id?: {$oid: string};
    userName: string;
    name: string;
    description: string;
    content: any;
    created: string;
    }
    