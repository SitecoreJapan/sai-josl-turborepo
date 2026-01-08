import { JSX } from 'react';
import { Field, GetComponentServerProps, ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';
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
export declare const getComponentServerProps: GetComponentServerProps;
export interface PageItem {
    name: string;
    id: string;
}
export declare function GetPageItem(itemId: string, language: string, site: string): Promise<any>;
declare const _default: (props: GlobalContentBlockProps) => JSX.Element | null;
export default _default;
//# sourceMappingURL=GlobalContentBlock.d.ts.map