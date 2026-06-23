// Below are built-in components that are available in the app, it's recommended to keep them as is

import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';

// end of built-in components
import * as Title from '@sample/ui-sitecore/src/components/title/Title';
import * as RowSplitter from '@sample/ui-sitecore/src/components/row-splitter/RowSplitter';
import * as RichText from '@sample/ui-sitecore/src/components/rich-text/RichText';
import * as Promo from '@sample/ui-sitecore/src/components/promo/Promo';
import * as PartialDesignDynamicPlaceholder from '@sample/ui-sitecore/src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as PageContent from '@sample/ui-sitecore/src/components/page-content/PageContent';
import * as Navigation from '@sample/ui-sitecore/src/components/navigation/Navigation';
import * as LinkList from '@sample/ui-sitecore/src/components/link-list/LinkList';
import * as Image from '@sample/ui-sitecore/src/components/image/Image';
import * as Container from '@sample/ui-sitecore/src/components/container/Container';
import * as ColumnSplitter from '@sample/ui-sitecore/src/components/column-splitter/ColumnSplitter';

export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['Title', { ...Title }],
  ['RowSplitter', { ...RowSplitter }],
  ['RichText', { ...RichText }],
  ['Promo', { ...Promo }],
  ['PartialDesignDynamicPlaceholder', { ...PartialDesignDynamicPlaceholder }],
  ['PageContent', { ...PageContent }],
  ['Navigation', { ...Navigation }],
  ['LinkList', { ...LinkList }],
  ['Image', { ...Image }],
  ['Container', { ...Container }],
  ['ColumnSplitter', { ...ColumnSplitter }],
]);

export default componentMap;
