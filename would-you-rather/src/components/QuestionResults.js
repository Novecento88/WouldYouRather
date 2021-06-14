import React from "react";
import { connect } from "react-redux";
import { Box, Avatar, Typography, LinearProgress } from "@material-ui/core";

function QuestionResults(props) {
  const { question } = props;
  const optionOneVotesAmount = question.optionOne.votes.length;
  const optionTwoVotesAmount = question.optionTwo.votes.length;
  const totalAmountOfVotes = optionOneVotesAmount + optionTwoVotesAmount;
  const optionOnePercentageValue =
    (optionOneVotesAmount / totalAmountOfVotes) * 100;
  const optionTwoPercentageValue =
    (optionTwoVotesAmount / totalAmountOfVotes) * 100;

  console.log("QUESTION: ", question);
  console.log("OPTION ONE: ", optionOneVotesAmount);
  console.log("OPTION TWO: ", optionTwoVotesAmount);

  return (
    <Box border={1} padding={2} maxWidth={580} mt={4} margin="auto">
      <Box display="flex" flexDirection="column">
        <Typography component="span">
          <Box fontWeight="fontWeightBold" py={1}>
            {`Asked by ${props.user.name}`}
          </Box>
        </Typography>
        <Box display="flex" flexDirection="row">
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Avatar
              display="flex"
              alignself="flex-start"
              style={{ height: "120px", width: "120px" }}
              src={props.userAvatar}
              alt={`Avatar representing ${props.user.name}`}
            />
          </Box>
          <Box display="flex" flexDirection="column" mb={2} mx={4} width="100%">
            <Typography component="span">
              <Box
                fontWeight="fontWeightBold"
                fontSize={24}
                mb={2}
                width="100%"
              >
                Results:
              </Box>
            </Typography>
            <Box
              border={1}
              display="flex"
              flexDirection="column"
              mb={2}
              width="100%"
            >
              <Typography component="span">
                <Box fontWeight="fontWeightBold" fontSize={16} padding={2}>
                  {`Would you rather ${question.optionOne.text}`}
                </Box>
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                px={2}
              >
                <Box width="100%" mr={1}>
                  <LinearProgress
                    variant="determinate"
                    value={optionOnePercentageValue}
                  />
                </Box>
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >{`${Math.round(optionOnePercentageValue)}%`}</Typography>
              </Box>
              <Typography component="span">
                <Box fontWeight="fontWeightBold" fontSize={16} padding={2}>
                  {`${question.optionOne.votes.length} out of ${totalAmountOfVotes} votes`}
                </Box>
              </Typography>
            </Box>
            <Box
              border={1}
              display="flex"
              flexDirection="column"
              mb={2}
              width="100%"
            >
              <Typography component="span">
                <Box fontWeight="fontWeightBold" fontSize={16} padding={2}>
                  {`Would you rather ${question.optionTwo.text}`}
                </Box>
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                px={2}
              >
                <Box width="100%" mr={1}>
                  <LinearProgress
                    variant="determinate"
                    value={optionTwoPercentageValue}
                  />
                </Box>
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >{`${Math.round(optionTwoPercentageValue)}%`}</Typography>
              </Box>
              <Typography component="span">
                <Box fontWeight="fontWeightBold" fontSize={16} padding={2}>
                  {`${question.optionTwo.votes.length} out of ${totalAmountOfVotes} votes`}
                </Box>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function mapStateToProps({ users, questions }, props) {
  const { questionID } = props.match.params;
  const question = questions[questionID];

  if (question === null) {
    console.log("QUESTION RESULTS: QUESTION IS NULL!");
    return null;
  }

  const user = users[question.author];
  const userAvatar = `${users[question.author].avatarURL}`;

  return {
    question,
    user,
    userAvatar,
  };
}

export default connect(mapStateToProps)(QuestionResults);
