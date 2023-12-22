import { createClient } from 'contentful';
import { useQuery } from 'react-query';

const client = createClient({
  space: '3xkxu7y6k2jg',
  environment: 'master',
  accessToken: 'P8Gcs8FuSiTtRbRCAgGiOj9I9fiAc2Cp4Zbnhh0xykU',
});

export const useFetchServicesHero = () => {
  const { data } = useQuery({
    queryKey: ['servicesHero'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'servicesHero',
      });
      const { video, title } = res.items[0].fields;
      const vid = video?.fields?.file?.url;
      return { vid, title };
    },
  });
  return { data };
};
export const useFetchServices = () => {
  const { data } = useQuery({
    queryKey: ['servicesOurServices'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'servicesOurServices',
      });

      const data = res.items.map((stat) => {
        const { title1, title2, image } = stat.fields;
        const id = stat.sys.id;
        const img = image?.fields?.file?.url;

        return { title1, title2, id, img };
      });
      return data;
    },
  });
  return { data };
};
export const useFetchServicesFaqQuestions = () => {
  const { data } = useQuery({
    queryKey: ['servicesFaqQuestions'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'servicesFaqQuestions',
      });
      const { image1, image2, title1, title2, title3, questions } =
        res.items[0].fields;
      const img1 = image1?.fields?.file?.url;
      const img2 = image2?.fields?.file?.url;
      return { img1, img2, title1, title2, title3, questions };
    },
  });
  return { data };
};
