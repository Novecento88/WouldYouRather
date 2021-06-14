import React from "react";
import { Box, Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function User(props) {
  const { user } = props;
  const answeredQuestionsCount = Object.keys(user.answers).length;
  const createdQuestionsCount = user.questions.length;

  return (
    <Box border={1} padding={2} maxWidth={580} margin="auto">
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Avatar
            display="flex"
            alignself="flex-start"
            style={{ height: "80px", width: "80px" }}
            src={props.user.avatarURL}
            alt={`Avatar representing ${props.user.name}`}
          />
        </Box>
        <Box display="flex" flexDirection="column" mb={2} mx={6} width="100%">
          <h2>{props.user.name}</h2>
          <Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box fontWeight="fontWeightBold">Answered questions</Box>
              <Box fontWeight="fontWeightBold">{answeredQuestionsCount}</Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box fontWeight="fontWeightBold">Created questions</Box>
              <Box fontWeight="fontWeightBold">{createdQuestionsCount}</Box>
            </Box>
          </Typography>
        </Box>
        <Box
          border={1}
          padding={1}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography>
            <Box fontWeight="fontWeightBold">SCORE</Box>
          </Typography>
          <Typography>
            <Box textAlign="center" fontSize={42}>
              {answeredQuestionsCount + createdQuestionsCount}
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
