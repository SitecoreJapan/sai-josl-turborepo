import React from 'react';
import { Text as ContentSdkText, Link as ContentSdkLink, RichText as ContentSdkRichText, } from '@sitecore-content-sdk/nextjs';
const CardDefaultComponent = (props) => (React.createElement("div", { className: `component card ${props.params.styles}` },
    React.createElement("div", { className: "component-content" },
        React.createElement("span", { className: "is-empty-hint" }, "Card"))));
export const Default = (props) => {
    if (props.fields) {
        return (React.createElement("div", { className: "card" },
            React.createElement("div", { className: "card-body" },
                React.createElement("h4", null, "From ui package!"),
                React.createElement(ContentSdkText, { tag: "h3", className: "card-title", field: props.fields.CardTitle }),
                React.createElement(ContentSdkRichText, { field: props.fields.CardText, className: "card-text" }),
                React.createElement(ContentSdkLink, { field: props.fields.CardLink, className: "card-link" }))));
    }
    return React.createElement(CardDefaultComponent, { ...props });
};
export const WithText = (props) => {
    if (props.fields) {
        return (React.createElement("div", { className: "card" },
            React.createElement("div", { className: "card-body" },
                React.createElement(ContentSdkText, { tag: "h3", className: "card-title", field: props.fields.CardTitle }),
                React.createElement("p", null, "Rendering variant selected!"),
                React.createElement(ContentSdkRichText, { field: props.fields.CardText, className: "card-text" }),
                React.createElement(ContentSdkLink, { field: props.fields.CardLink, className: "card-link" }))));
    }
    return React.createElement(CardDefaultComponent, { ...props });
};
//# sourceMappingURL=Card.js.map