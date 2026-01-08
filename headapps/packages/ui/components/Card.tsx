import { JSX } from 'react';
import {
  Text as ContentSdkText,
  Link as ContentSdkLink,
  RichText as ContentSdkRichText,
  Field,
  LinkField,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  CardTitle: Field<string>;
  CardText: Field<string>;
  CardLink: LinkField;
}

type CardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const CardDefaultComponent = (props: CardProps): JSX.Element => (
  <div className={`component card ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Card</span>
    </div>
  </div>
);

export const Default = (props: CardProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="card">
        <div className="card-body">
          <h4>From ui package!</h4>
          <ContentSdkText tag="h3" className="card-title" field={props.fields.CardTitle} />
          <ContentSdkRichText field={props.fields.CardText} className="card-text" />
          <ContentSdkLink field={props.fields.CardLink} className="card-link" />
        </div>
      </div>
    );
  }

  return <CardDefaultComponent {...props} />;
};

export const WithText = (props: CardProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="card">
        <div className="card-body">
          <ContentSdkText tag="h3" className="card-title" field={props.fields.CardTitle} />
          <p>Rendering variant selected!</p>
          <ContentSdkRichText field={props.fields.CardText} className="card-text" />
          <ContentSdkLink field={props.fields.CardLink} className="card-link" />
        </div>
      </div>
    );
  }

  return <CardDefaultComponent {...props} />;
};
