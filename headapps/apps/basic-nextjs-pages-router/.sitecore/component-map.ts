// Below are built-in components that are available in the app, it's recommended to keep them as is

import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';

// end of built-in components
import * as RichText from 'src/components/rich-text/RichText';
import * as Promo from 'src/components/promo/Promo';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as Navigation from 'src/components/navigation/Navigation';
import * as LinkList from 'src/components/link-list/LinkList';
import * as ContentBlock from 'src/components/content-block/ContentBlock';
import { Card, GlobalContentBlock } from '@repo/ui';

export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['RichText', { ...RichText }],
  ['Promo', { ...Promo }],
  ['PartialDesignDynamicPlaceholder', { ...PartialDesignDynamicPlaceholder }],
  ['Navigation', { ...Navigation, componentType: 'client' }],
  ['LinkList', { ...LinkList }],
  ['ContentBlock', { ...ContentBlock }],
  ['Card', Card],
  ['GlobalContentBlock', GlobalContentBlock],
]);

export default componentMap;
