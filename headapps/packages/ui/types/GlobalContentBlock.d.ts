import { JSX } from 'react';
import { Field } from '@sitecore-content-sdk/nextjs';
interface Fields {
    Heading: Field<string>;
    Content: Field<string>;
}
type GlobalContentBlockProps = {
    params: {
        [key: string]: string;
    };
    fields: Fields;
};
export declare const Default: (props: GlobalContentBlockProps) => JSX.Element;
export {};
//# sourceMappingURL=GlobalContentBlock.d.ts.map