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
export const useFetchStatsSlider = () => {
  const { data, isLoading: isLoadingStatsSlider } = useQuery({
    queryKey: ['HomeStatsSlider'],
    queryFn: async () => {
      const res = await client.getEntries({ content_type: 'homeStatsSlider' });
      const stats = res.items.map((stat) => {
        const { title } = stat.fields;
        const id = stat.sys.id;
        return { title, id };
      });
      return stats;
    },
  });
  return { data, isLoadingStatsSlider };
};
export const useFetchFeaturedProjects = () => {
  const { data, isLoading: isLoadingFeaturedProjects } = useQuery({
    queryKey: ['homeProjects'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'projects',
        'fields.featured': true,
      });

      const data = res.items.map((stat) => {
        const { title1, title2, images, video } = stat.fields;
        const id = stat.sys.id;
        const vid = video?.fields?.file?.url;
        const imgs = images?.map((image) => {
          const imgId = image.sys.id;
          const img = image?.fields?.file?.url;
          return { img, id: imgId };
        });
        return { title1, title2, id, vid, imgs };
      });
      return data;
    },
  });
  return { data, isLoadingFeaturedProjects };
};
export const useFetchProjects = () => {
  const { data: projects, isLoading: isLoadingProjects } = useQuery({
    queryKey: ['homeProjects'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'projects',
      });
      const data = res.items.map((stat) => {
        const {
          projectName,
          video,
          images,
          paragraph1,
          paragraph2,
          clientName,
          location,
          date,
        } = stat.fields;
        const id = stat.sys.id;
        const vid = video?.fields?.file?.url;
        const imgs = images?.map((image) => {
          const imgId = image.sys.id;
          const img = image?.fields?.file?.url;
          return { img, id: imgId };
        });
        return {
          projectName,
          paragraph1,
          paragraph2,
          clientName,
          location,
          date,
          id,
          vid,
          imgs,
        };
      });
      console.log(data);
      return data;
    },
  });
  return { projects, isLoadingProjects };
};
export const useFetchVideoSection = () => {
  const { data, isLoading: isLoadingVideoSection } = useQuery({
    queryKey: ['homeVideoSection'],
    queryFn: async () => {
      const res = await client.getEntries({ content_type: 'homeVideoSection' });
      const { title1, title2, button, video, image } = res.items[0].fields;
      const vid = video?.fields?.file?.url;
      const img = image?.fields?.file?.url;
      return { title1, title2, button, vid, img };
    },
  });
  return { data, isLoadingVideoSection };
};
export const useFetchProgressSection = () => {
  const { data, isLoading: isLoadingProgressSection } = useQuery({
    queryKey: ['homeProgressSection'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'homeProgressSection',
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
export const useFetchCounterSection = () => {
  const { data, isLoading: isLoadingCounterSection } = useQuery({
    queryKey: ['homeCounterSection'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'homeCounterSection',
      });
      const { counter } = res.items[0].fields;

      return { counter };
    },
  });
  return { data, isLoadingCounterSection };
};
export const useFetchHomeHomeSLider = () => {
  const { data, isLoading: isLoadingHomeHomeSlider } = useQuery({
    queryKey: ['homeHomeSlider'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'homeHomeSlider',
      });
      const slides = res.items.map((slide) => {
        const { title, image } = slide.fields;
        const img = image?.fields?.file?.url;
        const id = slide.sys.id;
        return { title, img, id };
      });
      return slides;
    },
  });
  return { data, isLoadingHomeHomeSlider };
};
export const useFetchHomeServiceSection = () => {
  const { data, isLoading: isLoadingHomeServiceSection } = useQuery({
    queryKey: ['homeServiceSection'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'homeServiceSection',
      });
      const services = res.items.map((service) => {
        const { title, paragraph } = service.fields;
        const id = service.sys.id;
        return { id, title, paragraph };
      });
      return services;
    },
  });
  return { data, isLoadingHomeServiceSection };
};
export const useFetchStatsSliderReverse = () => {
  const { data, isLoading: isLoadingStatsSliderReverse } = useQuery({
    queryKey: ['homeStatsSliderReverse'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'homeStatsSliderReverse',
      });
      const stats = res.items.map((stat) => {
        const { title } = stat.fields;
        const id = stat.sys.id;
        return { title, id };
      });
      return stats;
    },
  });
  return { data, isLoadingStatsSliderReverse };
};
export const useFetchOurSponsors = () => {
  const { data, isLoading: isLoadingOurSponsors } = useQuery({
    queryKey: ['homeOurCLients'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'homeOurCLients',
      });

      const sponsors = res.items.map((spon) => {
        const { image } = spon.fields;
        const img = image?.fields?.file?.url;
        const id = spon.sys.id;
        return { img, id };
      });
      console.log(sponsors);
      return sponsors;
    },
  });
  return { data, isLoadingOurSponsors };
};
export const useFetchHorizontalSection = () => {
  const { data } = useQuery({
    queryKey: ['horizontalSection'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'horizontalSection',
      });
      const { image, hazemInfo, mainTitle, span, title } = res.items[0].fields;
      const img = image?.fields?.file?.url;
      return { img, hazemInfo, mainTitle, span, title };
    },
  });
  return { data };
};
export const useFetchFooter = () => {
  const { data } = useQuery({
    queryKey: ['footer'],
    queryFn: async () => {
      const res = await client.getEntries({
        content_type: 'footer',
      });
      const {
        paragraph,
        services,
        facebookLink,
        twitterLink,
        instagramLink,
        linkedinLink,
        address,
        mail,
        phone,
      } = res.items[0].fields;

      return {
        paragraph,
        services,
        facebookLink,
        twitterLink,
        instagramLink,
        linkedinLink,
        address,
        mail,
        phone,
      };
    },
  });
  return { data };
};
