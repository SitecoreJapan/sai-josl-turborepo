import { JSX } from 'react';
import {
  withDatasourceCheck,
  Text,
  Field,
  RichText as ContentSdkRichText,
  ComponentParams,
  ComponentRendering,
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
  return (
    <div className="contentBlock">
      <Text tag="h2" className="contentTitle" field={fields.Heading} />
      <ContentSdkRichText className="contentDescription" field={fields.Content} />
    </div>
  );
};

export default withDatasourceCheck()<GlobalContentBlockProps>(GlobalContentBlock);
