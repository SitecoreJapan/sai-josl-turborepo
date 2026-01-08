import { JSX } from 'react';
import { Field, ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';
type ComponentProps = {
    rendering: ComponentRendering;
    params: ComponentParams;
    myData: string;
};
type BlogData = {
    userId: string;
    id: string;
    name: string;
    title: string;
    body: string;
};
type GlobalContentBlockProps = ComponentProps & BlogData & {
    fields: {
        Heading: Field<string>;
        Content: Field<string>;
    };
};
declare const _default: (props: GlobalContentBlockProps) => JSX.Element | null;
export default _default;
//# sourceMappingURL=GlobalContentBlock.d.ts.map