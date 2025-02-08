import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';
import { DynamicLayoutProps } from '@/types/next';
import { isMobileDevice } from '@/utils/server/responsive';
import { RouteVariants } from '@/utils/server/routeVariants';

import Page from './index';

export const generateMetadata = async (props: DynamicLayoutProps) => {
  const locale = await RouteVariants.getLocale(props);
  const { t } = await translation('setting', locale);
  return metadataModule.generate({
    description: t('header.desc'),
    title: t('tab.about'),
    url: '/settings/about',
  });
};

export default async () => {
  const isMobile = await isMobileDevice();

  return <Page mobile={isMobile} />;
};
