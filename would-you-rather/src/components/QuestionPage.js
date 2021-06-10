import React, { Component } from "react"
import { connect } from "react-redux"
import { Box, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, } from "@material-ui/core"

class QuestionPage extends Component {

    handleOptionChange = (event) => {
        console.log("SELECTED OPTION: ", event.target.value)
    }

    render() {
        console.log("PROPS: ", this.props)
        const { question } = this.props

        return (
            <Box border={1} padding={2} maxWidth={650} margin="auto" mt={4}>
                <div>Would you rather...</div>
                <FormControl component="fieldset">
                    <RadioGroup name="options" onChange={this.handleOptionChange}>
                        <FormControlLabel value="optionOne" control={<Radio />} label={`...${question.optionOne.text}`} />
                        <FormControlLabel value="optionTwo" control={<Radio />} label={`...${question.optionTwo.text}`} />
                    </RadioGroup>
                </FormControl>
            </Box>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }, props) {
    console.log("QUESTIONS: ", questions)

    const { questionID } = props.match.params
    console.log("ID: ", questionID)
    const question = questions[questionID]

    return {
        question: question
    }
}

export default connect(mapStateToProps)(QuestionPage)