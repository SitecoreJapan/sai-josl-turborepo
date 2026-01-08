import React from 'react';
import { withDatasourceCheck, Text, RichText as ContentSdkRichText, useComponentProps, } from '@sitecore-content-sdk/nextjs';
const GlobalContentBlock = ({ fields, rendering, myData, }) => {
    const blogPath = myData;
    const data = useComponentProps(rendering.uid);
    return (React.createElement("div", { className: "contentBlock" },
        React.createElement("p", null,
            "Name: ",
            data?.name),
        React.createElement("p", null,
            "id: ",
            data?.id),
        React.createElement("p", null,
            "Path: ",
            blogPath),
        React.createElement(Text, { tag: "h2", className: "contentTitle", field: fields.Heading }),
        React.createElement(ContentSdkRichText, { className: "contentDescription", field: fields.Content })));
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getComponentServerProps = async () => {
    const post = await GetPageItem('/', 'en', 'sxastarter');
    return post;
};
export async function GetPageItem(itemId, language, site) {
    const requestBody = {
        query: `query  
         GetPageItem($datasource: String!, $language: String!, $site: String!) { 
          layout(routePath:$datasource, language:$language, site:$site) {
            item{
              name
              id
            }
        
          }
         }
       `,
        variables: {
            language: language,
            datasource: itemId,
            site: site,
        },
        operationName: 'GetPageItem',
    };
    const response = await fetch(process.env.GRAPH_QL_ENDPOINT ?? '', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            sc_apikey: process.env.SITECORE_API_KEY ?? '',
        },
        body: JSON.stringify(requestBody),
    });
    const jsonResponse = await response.json();
    const post = jsonResponse?.data?.layout?.item;
    return post;
}
export default withDatasourceCheck()(GlobalContentBlock);
//# sourceMappingURL=GlobalContentBlock.js.map