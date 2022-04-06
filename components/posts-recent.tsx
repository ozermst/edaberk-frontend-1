import IPost from "../interfaces/IPost";

import React from "react";
import NextLink from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";

interface PostsRecentProps {
  posts: IPost[];
}

function PostsRecent({ posts }: PostsRecentProps) {
  return (
    <>
      <List>
        {posts.map((each) => (
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

export default PostsRecent;
