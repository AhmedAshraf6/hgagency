import { createClient } from 'contentful';
import { useQuery } from 'react-query';

const client = createClient({
  space: '3xkxu7y6k2jg',
  environment: 'master',
  accessToken: 'P8Gcs8FuSiTtRbRCAgGiOj9I9fiAc2Cp4Zbnhh0xykU',
});

export const useFetchContactHero = () => {
  const { data } = useQuery({
    queryKey: ['contactHero'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'contactHero',
      });
      const { image, title } = res.items[0].fields;
      const img = image?.fields?.file?.url;
      return { img, title };
    },
  });
  return { data };
};

export const useFetchContactInfo = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'contactInfo',
      });
      const { info } = res.items[0].fields;

      return { info };
    },
  });
  return { data, isLoading };
};
