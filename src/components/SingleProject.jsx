import React from 'react';
import {
  Loading,
  Navbar,
  PageBanner,
  SingleProductSlider,
  SingleProjectContent,
} from '../components';
import { useParams } from 'react-router-dom';
import { useFetchSingleProject } from './Api/fetchProjectsPage';
import { createClient } from 'contentful';
import { useQuery } from 'react-query';
const client = createClient({
  space: '3xkxu7y6k2jg',
  environment: 'master',
  accessToken: 'P8Gcs8FuSiTtRbRCAgGiOj9I9fiAc2Cp4Zbnhh0xykU',
});
const SingleProject = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'Single Project', active: true },
  ];

  const { projectid } = useParams();
  const { data: singleProject, isLoading: isLoadingSingleProject } = useQuery({
    queryKey: ['projectSingleProject', projectid],
    queryFn: async () => {
      const res = await client.getEntry(projectid);
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

  if (isLoadingSingleProject) {
    return <Loading />;
  }
  console.log(singleProject);
  return (
    <>
      <Navbar />
      <PageBanner
        title='Single Project'
        breadcrumbs={breadcrumbs}
        vid={singleProject?.vid}
        image={!singleProject.vid && singleProject.imgs[0].img}
      />
      <SingleProductSlider images={singleProject.imgs} />
      <SingleProjectContent singleProject={singleProject} />
    </>
  );
};

export default SingleProject;
