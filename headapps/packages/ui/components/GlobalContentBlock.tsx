import React, { JSX } from 'react';
import {
  withDatasourceCheck,
  Text,
  Field,
  RichText as ContentSdkRichText,
  GetComponentServerProps,
  ComponentParams,
  ComponentRendering,
  useComponentProps,
} from '@sitecore-content-sdk/nextjs';

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

type GlobalContentBlockProps = ComponentProps &
  BlogData & {
    fields: {
      Heading: Field<string>;
      Content: Field<string>;
    };
  };

const GlobalContentBlock = ({
  fields,
  rendering,
  myData,
}: GlobalContentBlockProps): JSX.Element => {
  const blogPath = myData;
  const data = useComponentProps<BlogData>(rendering.uid);

  return (
    <div className="contentBlock">
      <p>Name: {data?.name}</p>
      <p>id: {data?.id}</p>

      <p>Path: {blogPath}</p>
      <Text tag="h2" className="contentTitle" field={fields.Heading} />
      <ContentSdkRichText className="contentDescription" field={fields.Content} />
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getComponentServerProps: GetComponentServerProps = async () => {
  const post = await GetPageItem('/', 'en', 'sxastarter');

  return post;
};

export interface PageItem {
  name: string;
  id: string;
}

export async function GetPageItem(itemId: string, language: string, site: string) {
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

export default withDatasourceCheck()<GlobalContentBlockProps>(GlobalContentBlock);
