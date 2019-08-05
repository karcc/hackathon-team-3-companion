INSERT INTO questions (id,location_id,question_set_id,question_type,question_image,question_text,answer,seconds,points)
            VALUES (0,1,1,'mc text', 'lincoln.jpg', 'The exhibit has a large picture of Lincoln on it. What am I?','Penny','60',100);
INSERT INTO user_info (id, group_id, nickname, score, current_question, question_set_id, session_id, question_count, entry_time)
            VALUES (0, 0, 'Jason', 0, 0, 1, 'abcdefg', 1, TO_TIMESTAMP('2019-08-05 12:00:00.000000000', 'YYYY-MM-DD HH24:MI:SS.FF'));
INSERT INTO questions_choices (questions_id,choices) VALUES (0, 'Folding Money');
INSERT INTO questions_choices (questions_id,choices) VALUES (0, 'Bond');
INSERT INTO questions_choices (questions_id,choices) VALUES (0, 'Stock Certificate');
INSERT INTO questions_choices (questions_id,choices) VALUES (0, 'Penny');
