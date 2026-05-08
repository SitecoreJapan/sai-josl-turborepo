import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text as ContentSdkText, RichText as ContentSdkRichText, } from '@sitecore-content-sdk/nextjs';
const GlobalContentBlockDefaultComponent = (props) => (_jsx("div", { className: `component contentBlock ${props.params.styles}`, children: _jsx("div", { className: "component-content", children: _jsx("span", { className: "is-empty-hint", children: "Global Content Block" }) }) }));
export const Default = (props) => {
    if (props.fields) {
        return (_jsxs("div", { className: "contentBlock", children: [_jsx(ContentSdkText, { tag: "h2", className: "contentTitle", field: props.fields.Heading }), _jsx(ContentSdkRichText, { className: "contentDescription", field: props.fields.Content })] }));
    }
    return _jsx(GlobalContentBlockDefaultComponent, { ...props });
};
//# sourceMappingURL=GlobalContentBlock.js.map