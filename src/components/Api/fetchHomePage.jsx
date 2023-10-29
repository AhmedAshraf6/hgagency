import { createClient } from 'contentful';
import { useQuery } from 'react-query';

const client = createClient({
  space: '3xkxu7y6k2jg',
  environment: 'master',
  accessToken: 'P8Gcs8FuSiTtRbRCAgGiOj9I9fiAc2Cp4Zbnhh0xykU',
});

export const useFetchHeroSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['HomeHeroSection'],
    queryFn: async () => {
      const res = await client.getEntries({ content_type: 'homeHeroSection' });
      const { title, paragraph, button, video } = res.items[0].fields;
      const vid = video?.fields?.file?.url;
      return { title, paragraph, button, vid };
    },
  });
  return { data, isLoading };
};
