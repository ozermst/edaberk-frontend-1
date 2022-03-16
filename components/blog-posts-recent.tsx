import IBlogPost from "../interfaces/IBlogPost";

import React from "react";
import NextLink from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";

interface BlogPostsRecentProps {
  blogPosts: IBlogPost[];
}

function BlogPostsRecent({ blogPosts }: BlogPostsRecentProps) {
  return (
    <>
      <List>
        {blogPosts.map((each) => (
          <ListItem disablePadding key={each.id}>
            <NextLink href={`/blog/` + each.attributes.slug} passHref>
              <Link>{each.attributes.title}</Link>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default BlogPostsRecent;
