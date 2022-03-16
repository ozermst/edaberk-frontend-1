import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import IInterest from "../../interfaces/IInterest";

import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import NextImage from "../../components/image";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface InterestProps {
  interest: IInterest;
}

function Interest({ interest }: InterestProps) {
  // const imageUrl: string = getStrapiMedia(interest.attributes.featured_image);

  return (
    <>
      {interest.attributes.featured_image.data === null ? (
        <p>Image is not available</p>
      ) : (
        <Box sx={{ position: "relative", minHeight: { xs: 300, sm: 600 } }}>
          <Image
            src={getStrapiMedia(interest.attributes.featured_image)}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </Box>
      )}

      <Box sx={{ height: "3rem" }}></Box>
      <Container maxWidth="md">
        <Typography variant="h3" component="div" gutterBottom>
          {interest.attributes.name}
        </Typography>
        <ReactMarkdown>{interest.attributes.content}</ReactMarkdown>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const interestsRes = await fetchAPI("/interests", { fields: ["slug"] });

  return {
    paths: interestsRes.data.map(
      (interest: { attributes: { slug: string } }) => ({
        params: {
          slug: interest.attributes.slug,
        },
      })
    ),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;

  // Run API calls in parallel
  const [interestsRes] = await Promise.all([
    fetchAPI("/interests", {
      filters: {
        slug: {
          $eq: params.slug,
        },
      },
      populate: "*",
    }),
  ]);

  return {
    props: {
      interest: interestsRes.data[0],
    },
  };
}

/* export async function getServerSideProps({ params }: any) {
  const { slug } = params;

  // Run API calls in parallel
  const [blogPostRes] = await Promise.all([
    fetchAPI("/blog-posts", {
      filters: {
        slug: params.slug,
      },
      populate: "*",
    }),
  ]);

  return {
    props: {
      blogPost: blogPostRes.data[0],
    },
  };
} */

export default Interest;
