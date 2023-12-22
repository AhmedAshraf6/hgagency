import { createClient } from 'contentful';
import { useQuery } from 'react-query';

const client = createClient({
  space: '3xkxu7y6k2jg',
  environment: 'master',
  accessToken: 'P8Gcs8FuSiTtRbRCAgGiOj9I9fiAc2Cp4Zbnhh0xykU',
});

export const useFetchAboutCeoHero = () => {
  const { data } = useQuery({
    queryKey: ['aboutCeoHero'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'aboutCeoHero',
      });
      const { image, title } = res.items[0].fields;
      const img = image?.fields?.file?.url;
      return { img, title };
    },
  });
  return { data };
};
export const useFetchAboutCeoInfo = () => {
  const { data } = useQuery({
    queryKey: ['aboutCeoInfo'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'aboutCeoInfo',
      });
      const { image1, paragraph, button, title1 } = res.items[0].fields;
      const img = image1?.fields?.file?.url;
      return { img, paragraph, button, title1 };
    },
  });
  return { data };
};
