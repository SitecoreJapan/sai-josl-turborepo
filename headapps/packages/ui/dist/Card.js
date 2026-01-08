import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text as ContentSdkText, Link as ContentSdkLink, RichText as ContentSdkRichText, } from '@sitecore-content-sdk/nextjs';
const CardDefaultComponent = (props) => (_jsx("div", { className: `component card ${props.params.styles}`, children: _jsx("div", { className: "component-content", children: _jsx("span", { className: "is-empty-hint", children: "Card" }) }) }));
export const Default = (props) => {
    if (props.fields) {
        return (_jsx("div", { className: "card", children: _jsxs("div", { className: "card-body", children: [_jsx("h4", { children: "From ui package!" }), _jsx(ContentSdkText, { tag: "h3", className: "card-title", field: props.fields.CardTitle }), _jsx(ContentSdkRichText, { field: props.fields.CardText, className: "card-text" }), _jsx(ContentSdkLink, { field: props.fields.CardLink, className: "card-link" })] }) }));
    }
    return _jsx(CardDefaultComponent, { ...props });
};
export const WithText = (props) => {
    if (props.fields) {
        return (_jsx("div", { className: "card", children: _jsxs("div", { className: "card-body", children: [_jsx(ContentSdkText, { tag: "h3", className: "card-title", field: props.fields.CardTitle }), _jsx("p", { children: "Rendering variant selected!" }), _jsx(ContentSdkRichText, { field: props.fields.CardText, className: "card-text" }), _jsx(ContentSdkLink, { field: props.fields.CardLink, className: "card-link" })] }) }));
    }
    return _jsx(CardDefaultComponent, { ...props });
};
//# sourceMappingURL=Card.js.map