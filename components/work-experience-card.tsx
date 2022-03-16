import React from "react";
import IWorkExperience from "../interfaces/IWorkExperience";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Date from "./date";

interface JobHistoryCardProps {
  workExperience: IWorkExperience;
}

function WorkExperienceCard({ workExperience }: JobHistoryCardProps) {
  return (
    <>
      <Card variant="outlined" sx={{ width: 1 }}>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Date
              dateString={workExperience.attributes.date_from}
              dateFormat="yyyy"
            />
            <span> - </span>
            <Date
              dateString={workExperience.attributes.date_to}
              dateFormat="yyyy"
            />
          </Stack>

          <Typography variant="h6" component="h3">
            {workExperience.attributes.job_title}
          </Typography>

          <Typography>{workExperience.attributes.company}</Typography>

          <Stack direction="row">
            <Typography>{workExperience.attributes.city},</Typography>
            <Typography>{" " + workExperience.attributes.country}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}

export default WorkExperienceCard;
