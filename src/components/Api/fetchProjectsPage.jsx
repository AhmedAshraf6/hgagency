import { createClient } from 'contentful';
import { useQuery } from 'react-query';

const client = createClient({
  space: '3xkxu7y6k2jg',
  environment: 'master',
  accessToken: 'P8Gcs8FuSiTtRbRCAgGiOj9I9fiAc2Cp4Zbnhh0xykU',
});

export const useFetchSingleProject = () => {
  const { data: singleProject, isLoading: isLoadingSingleProject } = useQuery({
    queryKey: ['projectSingleProject'],
    queryFn: async () => {
      const res = await client.getEntry('2rap1tkO3ZJRuPq5O8n4mi');

      const {
        clientName,
        date,
        images,
        location,
        paragraph1,
        paragraph2,
        projectName,
        video,
      } = res.fields;
      const vid = video?.fields?.file?.url;

      const imgs = images?.map((image) => {
        const imgId = image.sys.id;
        const img = image?.fields?.file?.url;
        return { img, id: imgId };
      });
      return {
        clientName,
        date,
        imgs,
        location,
        paragraph1,
        paragraph2,
        projectName,
        vid,
      };
    },
  });
  return { singleProject, isLoadingSingleProject };
};
