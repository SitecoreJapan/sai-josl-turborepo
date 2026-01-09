import { JSX } from 'react';
import {
  Text as ContentSdkText,
  RichText as ContentSdkRichText,
  Field,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Heading: Field<string>;
  Content: Field<string>;
}

type GlobalContentBlockProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const GlobalContentBlockDefaultComponent = (props: GlobalContentBlockProps): JSX.Element => (
  <div className={`component contentBlock ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Global Content Block</span>
    </div>
  </div>
);

export const Default = (props: GlobalContentBlockProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="contentBlock">
        <ContentSdkText tag="h2" className="contentTitle" field={props.fields.Heading} />
        <ContentSdkRichText className="contentDescription" field={props.fields.Content} />
      </div>
    );
  }

  return <GlobalContentBlockDefaultComponent {...props} />;
};
