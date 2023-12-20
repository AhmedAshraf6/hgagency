import { createClient } from 'contentful';
import { useQuery } from 'react-query';

const client = createClient({
  space: '3xkxu7y6k2jg',
  environment: 'master',
  accessToken: 'P8Gcs8FuSiTtRbRCAgGiOj9I9fiAc2Cp4Zbnhh0xykU',
});

export const useFetchAboutHero = () => {
  const { data } = useQuery({
    queryKey: ['aboutHero'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'aboutHero',
      });
      const { image, title } = res.items[0].fields;
      const img = image?.fields?.file?.url;
      return { img, title };
    },
  });
  return { data };
};
export const useFetchAboutProgressSection = () => {
  const { data, isLoading: isLoadingProgressSection } = useQuery({
    queryKey: ['aboutProjressSection'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'aboutProjressSection',
      });
      const { image1, image2, paragraph, button, progress, title1, title2 } =
        res.items[0].fields;
      const img1 = image1?.fields?.file?.url;
      const img2 = image2?.fields?.file?.url;
      return { img1, img2, paragraph, button, progress, title1, title2 };
    },
  });
  return { data, isLoadingProgressSection };
};
