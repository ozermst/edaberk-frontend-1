import IPost from "../../interfaces/IPost";
import IBlogPage from "../../interfaces/IBlogPage";
import ITenant from "../../interfaces/ITenant";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import PostFeatured from "../../components/posts-featured";
import PostCard from "../../components/post-card";

import { NextSeo } from "next-seo";

interface BlogPageProps {
  posts: IPost[];
  blogPage: IBlogPage;
  tenant: ITenant;
}

function Blog({ posts, blogPage, tenant }: BlogPageProps) {
  const SEO = {
    title: "Blog sayfası",
    description: "Eda Ayberkin Blog sayfası",
  };

  return (
    <>
      <NextSeo {...SEO} />
      {!posts.length ? (
        <Box>
          <Alert severity="info">Henüz paylaşım bulunmamaktadır.</Alert>
        </Box>
      ) : (
        <>
          {/* <Typography variant="h1">{blogPage.attributes.page_title}</Typography> */}

          <PostFeatured post={posts[0]} />

          <Box sx={{ height: "3rem" }}></Box>

          <Container maxWidth="md">
            <Stack direction="row" columnGap={5}>
              <Box
                sx={{
                  position: "relative",
                  width: 56,
                  height: 56,
                  borderRadius: "9999px",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={getStrapiMedia(tenant.attributes.featured_image)}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </Box>

              <Typography
                variant="body1"
                component="div"
                sx={{ flexShrink: 1 }}
              >
                <ReactMarkdown>{blogPage.attributes.intro}</ReactMarkdown>
              </Typography>
            </Stack>
          </Container>

          <Box sx={{ height: "3rem" }}></Box>

          <Stack
            direction="row"
            flexWrap="wrap"
            rowGap={5}
            columnGap={1}
            justifyContent="space-around"
          >
            {posts.slice(1).map((each) => (
              <PostCard key={each.id} post={each} />
            ))}
          </Stack>
        </>
      )}
    </>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [postsRes, blogPageRes, tenantRes] = await Promise.all([
    fetchAPI("/posts", { populate: "*" }),
    fetchAPI("/blog-page", { populate: "*" }),
    fetchAPI("/tenant", { populate: "*" }),
  ]);

  return {
    props: {
      posts: postsRes.data,
      blogPage: blogPageRes.data,
      tenant: tenantRes.data,
    },
    revalidate: 60,
  };
}

export default Blog;
