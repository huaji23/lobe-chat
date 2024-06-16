import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · 聪明才基` : '聪明才基';
  }, [title]);

  return null;
});

export default PageTitle;
