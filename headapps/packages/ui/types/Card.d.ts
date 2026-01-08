import { JSX } from 'react';
import { Field, LinkField } from '@sitecore-content-sdk/nextjs';
interface Fields {
    CardTitle: Field<string>;
    CardText: Field<string>;
    CardLink: LinkField;
}
type CardProps = {
    params: {
        [key: string]: string;
    };
    fields: Fields;
};
export declare const Default: (props: CardProps) => JSX.Element;
export declare const WithText: (props: CardProps) => JSX.Element;
export {};
//# sourceMappingURL=Card.d.ts.map