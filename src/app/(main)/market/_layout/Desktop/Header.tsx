'use client';

import { ChatHeader } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';

import ShareAgentButton from '../../features/ShareAgentButton';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {
  const { styles } = useStyles();

  return (
    <ChatHeader
      left={<span style={{  fontSize: '30px',fontWeight: '900'}}>聪明才基</span>}
      right={<ShareAgentButton />}
    />
  );
});

export default Header;
