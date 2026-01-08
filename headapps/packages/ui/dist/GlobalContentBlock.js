import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { withDatasourceCheck, Text, RichText as ContentSdkRichText, } from '@sitecore-content-sdk/nextjs';
const GlobalContentBlock = ({ fields, rendering, myData, }) => {
    return (_jsxs("div", { className: "contentBlock", children: [_jsx(Text, { tag: "h2", className: "contentTitle", field: fields.Heading }), _jsx(ContentSdkRichText, { className: "contentDescription", field: fields.Content })] }));
};
export default withDatasourceCheck()(GlobalContentBlock);
//# sourceMappingURL=GlobalContentBlock.js.map