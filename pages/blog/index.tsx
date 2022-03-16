import IBlogPost from "../../interfaces/IBlogPost";
import IBlogPage from "../../interfaces/IBlogPage";
import ITenant from "../../interfaces/ITenant";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

import React from "react";
import ReactMarkdown from "react-markdown";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import BlogPostFeatured from "../../components/blog-posts-featured";
import BlogPostCard from "../../components/blog-post-card";

import { NextSeo } from "next-seo";

interface BlogPageProps {
  blogPosts: IBlogPost[];
  blogPage: IBlogPage;
  tenant: ITenant;
}

function Blog({ blogPosts, blogPage, tenant }: BlogPageProps) {
  const SEO = {
    title: "Blog sayfası",
    description: "Eda Ayberkin Blog sayfası",
  };

  console.log("Avatar URL: ", getStrapiMedia(tenant.attributes.featured_image));

  return (
    <>
      <NextSeo {...SEO} />
      {!blogPosts.length ? (
        <Box>
          <Alert severity="info">Henüz paylaşım bulunmamaktadır.</Alert>
        </Box>
      ) : (
        <>
          {/* <Typography variant="h1">{blogPage.attributes.page_title}</Typography> */}

          <BlogPostFeatured blogPost={blogPosts[0]} />

          <Box sx={{ height: "3rem" }}></Box>

          <Container maxWidth="sm">
            <Stack direction="row" columnGap={2}>
              <Avatar
                alt="Eda Ayberkin"
                src={getStrapiMedia(tenant.attributes.featured_image)}
                sx={{ width: 56, height: 56 }}
              />

              <Typography variant="body1" component="div">
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
            {blogPosts.slice(1).map((each) => (
              <BlogPostCard key={each.id} blogPost={each} />
            ))}
          </Stack>
        </>
      )}
    </>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [blogPostsRes, blogPageRes, tenantRes] = await Promise.all([
    fetchAPI("/blog-posts", { populate: "*" }),
    fetchAPI("/blog-page", { populate: "*" }),
    fetchAPI("/tenant", { populate: "*" }),
  ]);

  return {
    props: {
      blogPosts: blogPostsRes.data,
      blogPage: blogPageRes.data,
      tenant: tenantRes.data,
    },
    revalidate: 1,
  };
}

export default Blog;
