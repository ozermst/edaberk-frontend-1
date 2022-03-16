import React from "react";
import IUniversity from "../interfaces/IUniversity";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Date from "./date";

interface UniversityCardProps {
  university: IUniversity;
}

function UniversityCard({ university }: UniversityCardProps) {
  return (
    <Card variant="outlined" sx={{ width: 1 }}>
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Date
            dateString={university.attributes.date_from}
            dateFormat="yyyy"
          />
          <span> - </span>
          <Date dateString={university.attributes.date_to} dateFormat="yyyy" />
        </Stack>

        <Typography variant="h5" component="div">
          {university.attributes.field_of_study}
        </Typography>

        <Typography>
          {university.attributes.name}
          {", "}
          {university.attributes.department}
        </Typography>

        <Stack direction="row">
          <Typography>{university.attributes.city},</Typography>
          <Typography>{" " + university.attributes.country}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default UniversityCard;
