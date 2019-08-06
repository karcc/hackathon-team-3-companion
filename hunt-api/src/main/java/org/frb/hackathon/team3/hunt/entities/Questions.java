package org.frb.hackathon.team3.hunt.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="questions")
public class Questions {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name="location_id")
    private int locationId;         // used to sort the questions in order when playing the game

    @Column(name="question_set_id")
    private int questionSetId;        // the set of questions to display - for ideas like easy, medium, hard?

    @Column(name="question_type")
    private String questionType;    // checkbox, multiple choice text, multiple choice image

    @Column(name="question_image")
    private String questionImage;

    @Column(name="question_text")
    private String questionText;    // the question text

    @ElementCollection
    private List<String> choices;   // the list of available choices for the question

    @Column(name="answer")
    private String answer;      // the correct answer for the question

    @Column(name="seconds")
    private int seconds;        // amount of time to answer the question

    @Column(name="points")
    private int points;         // max points available for question

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getLocationId() {
        return locationId;
    }

    public void setLocationId(int locationId) {
        this.locationId = locationId;
    }

    public String getQuestionType() {
        return questionType;
    }

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
    }

    public String getQuestionImage() {
        return questionImage;
    }

    public void setQuestionImage(String questionImage) {
        this.questionImage = questionImage;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public List<String> getChoices() {
        return choices;
    }

    public void setChoices(List<String> choices) {
        this.choices = choices;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public int getSeconds() {
        return seconds;
    }

    public void setSeconds(int seconds) {
        this.seconds = seconds;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public int getQuestionSetId() {
        return questionSetId;
    }

    public void setQuestionSetId(int questionSetId) {
        this.questionSetId = questionSetId;
    }
}
