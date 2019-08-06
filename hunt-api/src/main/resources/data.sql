INSERT INTO user_info (id, group_id, nickname, score, current_question, question_set_id, session_id, question_count, entry_time,correct, question_start_time)
            VALUES (0, 0, 'Jason', 0, 0, 1, 'abcdefg', 1, TO_TIMESTAMP('2019-08-05 12:00:00.000000000', 'YYYY-MM-DD HH24:MI:SS.FF'),false,TO_TIMESTAMP('2019-08-05 12:00:00.000000000', 'YYYY-MM-DD HH24:MI:SS.FF'));


INSERT INTO questions (id,location_id,question_set_id,question_type,question_image,question_text,answer,seconds,points)
            VALUES (99,99,1,'mc text', 'lincoln.png', 'The exhibit has a large picture of Lincoln on it. What am I?','Penny',60,100);

INSERT INTO questions_choices (questions_id,choices) VALUES (99, 'Folding Money');
INSERT INTO questions_choices (questions_id,choices) VALUES (99, 'Bond');
INSERT INTO questions_choices (questions_id,choices) VALUES (99, 'Stock Certificate');
INSERT INTO questions_choices (questions_id,choices) VALUES (99, 'Penny');

INSERT INTO questions (id,location_id,question_set_id,question_type,question_image,question_text,answer,seconds,points)
VALUES (0,1,1,'mc text', 'EconomyMuseum.png','I display what it would take to contain $1,000,000. Which object am I?','Cube.png',60,100);
INSERT INTO questions_choices (questions_id,choices) VALUES (0, 'Truck.png');
INSERT INTO questions_choices (questions_id,choices) VALUES (0, 'Cube.png');
INSERT INTO questions_choices (questions_id,choices) VALUES (0, 'Storage.png');

INSERT INTO questions (id,location_id,question_set_id,question_type,question_image,question_text,answer,seconds,points)
VALUES (1,2,1,'mc text', 'Scarcity.png', 'Scarcity occurs all over the world, people everywhere deal with the problem of not having everything they want for themselves or their community. There is a basket with bread and a saying. What is the saying?','There’s no such thing as a free lunch',60,100);
INSERT INTO questions_choices (questions_id,choices) VALUES (1, 'The lack of resources to produce everything');
INSERT INTO questions_choices (questions_id,choices) VALUES (1, 'There’s no such thing as a free lunch');
INSERT INTO questions_choices (questions_id,choices) VALUES (1, 'Some people have more money and/or time than others');

INSERT INTO questions (id,location_id,question_set_id,question_type,question_image,question_text,answer,seconds,points)
VALUES (2,3,1,'mc text', 'CC.png', 'Credit scores are determined by several factors. Which one of the following isn’t a good factor in deciding a favorable credit score?','Getting a loan from a Payday Lender',60,100);
INSERT INTO questions_choices (questions_id,choices) VALUES (2, 'Pay bills regularly and on time');
INSERT INTO questions_choices (questions_id,choices) VALUES (2, 'Credit and/or debit cards with high interest fees');
INSERT INTO questions_choices (questions_id,choices) VALUES (2, 'Acquire a credit card and make small purchases with the card, paying the entire balance monthly');
INSERT INTO questions_choices (questions_id,choices) VALUES (2, 'Getting a loan from a Payday Lender');
INSERT INTO questions_choices (questions_id,choices) VALUES (2, 'Establish credit by opening a checking or saving account');

INSERT INTO questions (id,location_id,question_set_id,question_type,question_image,question_text,answer,seconds,points)
VALUES (3,4,1,'mc text', 'Lincoln.png', 'The exhibit has a large picture of Lincoln on it. What am I?','Penny',60,100);
INSERT INTO questions_choices (questions_id,choices) VALUES (3, 'Folding Money');
INSERT INTO questions_choices (questions_id,choices) VALUES (3, 'Bond');
INSERT INTO questions_choices (questions_id,choices) VALUES (3, 'Stock Certificate');
INSERT INTO questions_choices (questions_id,choices) VALUES (3, 'Penny');

INSERT INTO questions (id,location_id,question_set_id,question_type,question_image,question_text,answer,seconds,points)
VALUES (4,5,1,'mc text', 'Gold.png','Is US Money is backed by Gold?','False',60,100);
INSERT INTO questions_choices (questions_id,choices) VALUES (4, 'True');
INSERT INTO questions_choices (questions_id,choices) VALUES (4, 'False');

INSERT INTO questions (id,location_id,question_set_id,question_type,question_image,question_text,answer,seconds,points)
VALUES (5,6,1,'mc text', '100Dollar.png','I portrays the same historical figure as the main portrait. Which hidden feature am I?','Watermark',60,100);
INSERT INTO questions_choices (questions_id,choices) VALUES (5, 'Color Shifting Inks');
INSERT INTO questions_choices (questions_id,choices) VALUES (5, 'Fine-Line Printing');
INSERT INTO questions_choices (questions_id,choices) VALUES (5, 'Watermark');
INSERT INTO questions_choices (questions_id,choices) VALUES (5, 'Low-Vision Feature');

INSERT INTO questions (id,location_id,question_set_id,question_type,question_image,question_text,answer,seconds,points)
VALUES (6,7,1,'mc2 text','Vault.png','While watching the video, what is in the Vault?','Stacks of Money|People',60,100);
INSERT INTO questions_choices (questions_id,choices) VALUES (6, 'Legos');
INSERT INTO questions_choices (questions_id,choices) VALUES (6, 'Quarters');
INSERT INTO questions_choices (questions_id,choices) VALUES (6, 'Stacks of Money');
INSERT INTO questions_choices (questions_id,choices) VALUES (6, 'Cars');
INSERT INTO questions_choices (questions_id,choices) VALUES (6,'People');

INSERT INTO questions (id,location_id,question_set_id,question_type,question_image,question_text,answer,seconds,points)
VALUES (7,8,1,'mc text', 'Jenga.png', 'U.S. Bank failures cost customers how much in Deposits between 1929 and 1933 which resulted in Congress creating the Federal Deposit Insurance Corporation in 1933?','$1.3 billion',60,100);
INSERT INTO questions_choices (questions_id,choices) VALUES (7, '$1.3 billion');
INSERT INTO questions_choices (questions_id,choices) VALUES (7, '$8 trillion');
INSERT INTO questions_choices (questions_id,choices) VALUES (7, '$150 million');

INSERT INTO questions (id,location_id,question_set_id,question_type,question_image,question_text,answer,seconds,points)
VALUES (8,9,1,'mc text', 'StatueofLiberty.png', 'What object weighs more than the U.S. Gold Reserve?','WashingtonMonument.png',60,100);
INSERT INTO questions_choices (questions_id,choices) VALUES (8, 'StatueofLiberty.png');
INSERT INTO questions_choices (questions_id,choices) VALUES (8, 'FireEngine.png');
INSERT INTO questions_choices (questions_id,choices) VALUES (8, 'Car.png');
INSERT INTO questions_choices (questions_id, choices) VALUES (8, 'Tractor.png');
INSERT INTO questions_choices (questions_id,choices) VALUES (8, 'WashingtonMonument.png');
INSERT INTO questions_choices (questions_id, choices) VALUES (8,'LibertyBell.png');

INSERT INTO questions (id,location_id,question_set_id,question_type,question_image,question_text,answer,seconds,points)
VALUES (9,10,1,'mc2 text', 'Database.png','I’m a FREE database of hundreds of thousands of facts and figures that cover about anything. What’s my name?','FRED',60,100);
INSERT INTO questions_choices (questions_id,choices) VALUES (9, 'FRED');
INSERT INTO questions_choices (questions_id,choices) VALUES (9, 'BRAD');
INSERT INTO questions_choices (questions_id,choices) VALUES (9, 'JOHN');
INSERT INTO questions_choices (questions_id,choices) VALUES (9, 'MIKE');

INSERT INTO questions (id,location_id,question_set_id,question_type,question_image,question_text,answer,seconds,points)
VALUES (10,11,1,'mc2 text', 'TreasuryChest.png','You will find me on the way out the exit or on the way into the gift shop. Have fun finding me and keep it as a souvenir for visiting the St. Louis Federal Reserve Economy Museum. Did you find me?','YES',60,100);
INSERT INTO questions_choices (questions_id,choices) VALUES (10, 'YES');
INSERT INTO questions_choices (questions_id,choices) VALUES (10, 'NO');
