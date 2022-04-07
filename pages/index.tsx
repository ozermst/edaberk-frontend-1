import ITenant from "../interfaces/ITenant";
import IInterests from "../interfaces/IInterest";
import IWorkExperience from "../interfaces/IWorkExperience";
import IUniversity from "../interfaces/IUniversity";
import IPost from "../interfaces/IPost";

import { fetchAPI } from "../lib/api";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import NextLink from "next/link";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import TenantCard from "../components/tenant-card";
import Interests from "../components/interests";
import WorkExperiences from "../components/work-experiences";
import Universities from "../components/universities";
import PostsRecent from "../components/posts-recent";

interface HomePageProps {
  tenant: ITenant;
  interests: IInterests[];
  workExperiences: IWorkExperience[];
  universities: IUniversity[];
  posts: IPost[];
}

function Home({
  tenant,
  interests,
  workExperiences,
  universities,
  posts,
}: HomePageProps) {
  console.log(interests);
  return (
    <>
      {/*       <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main>
        <div className="log"></div>
        <Stack direction="row" rowGap={3} flexWrap="wrap">
          <Stack rowGap={2} sx={{ width: 1, maxWidth: { sm: 1 / 3 } }}>
            <TenantCard tenant={tenant} />
            <Box>
              <Typography variant="h6" component="div">
                Yakın zaman paylaşımlarım
              </Typography>
              <PostsRecent posts={posts} />
            </Box>
          </Stack>

          <Box
            pl={2}
            sx={{
              maxWidth: { sm: 2 / 3 },
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              İlgi Alanları
            </Typography>
            <Interests interests={interests} />

            <Box sx={{ height: "3rem" }}></Box>

            <Typography variant="h4" component="h2" gutterBottom>
              İş Geçmişi
            </Typography>
            <WorkExperiences workExperiences={workExperiences} />

            <Box sx={{ height: "3rem" }}></Box>

            <Typography variant="h4" component="h2" gutterBottom>
              Eğitim
            </Typography>
            <Universities universities={universities} />
          </Box>
        </Stack>
      </main>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  // Run API calls in parallel
  const [
    tenantRes,
    interestsRes,
    workExperiencesRes,
    universitiesRes,
    postsRes,
  ] = await Promise.all([
    fetchAPI("/tenant", { populate: "*" }),
    fetchAPI("/interests", {
      pagination: {
        page: 1,
        pageSize: 18,
      },
      populate: "*",
    }),
    fetchAPI("/work-experiences", { sort: ["date_from:desc"], populate: "*" }),
    fetchAPI("/universities", { sort: ["date_from:desc"], populate: "*" }),
    fetchAPI("/posts", {
      pagination: {
        page: 1,
        pageSize: 5,
      },
      sort: ["publishedAt:desc"],
    }),
  ]);

  return {
    props: {
      tenant: tenantRes.data,
      interests: interestsRes.data,
      workExperiences: workExperiencesRes.data,
      universities: universitiesRes.data,
      posts: postsRes.data,
    },
    revalidate: 60,
  };
}

export default Home;
