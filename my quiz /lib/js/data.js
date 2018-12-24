var game = new Game(
    {
        title: 'General Knowledge Quiz, are you a true Detective?',
        rounds: 10,
        url: 'https://poddle.io/play/td/',
        facebook_id: '120r87240872408',
        lives: 3,
        questions: [
            {
                prompt: 'When and where did Hitler die ',
                answers: [
                    'May 2nd 1945, Fall of Berlin, ',
                    'April 30th, 1945, Fuherbunker, Germany',
                    'November 20th 1945, Nuremberg Trials, Nuremberg, Germany '
                ],
                correct: 1
            },
            {
                prompt: 'Which country won the battle of Kursk and who was the leading General',
                answers: [
                    'Soviet Union, Georgy Zhukov ',
                    'Germany, Erich Von Manstein',
                    'Finland, Carl Gustaf Emil Mannerheim'
                ],
                correct: 0
            },
            {
                prompt: 'Which countries were in the Molotov–Ribbentrop Pact?',
                answers: [
                    'Poland, Soviet Union, Germany',
                    'Italy Germany, Soviet Union',
                    'Germany, Soviet Union'
                ],
                correct: 2
            },
            {
                prompt: 'How and when did WW2 start?',
                answers: [
                    'Germany and Soviet Union\'s invasion of Poland, 1st September 1st 1939',
                    'Japan\'s invasion of Manchuria, 8th August 1939',
                    'Italy\'s invastion of Greece, 15th July 1939'
                ],
                correct: 0
            },
            {
                prompt: 'Who was the person that led the military disaster in the philippines ?',
                answers: [
                    'Dwight Eisenhower',
                    'Douglas MacArthur',
                    'George S Patton'
                ],
                correct: 1
            },
            {
                prompt: 'What is (a+b)^2?',
                answers: [
                    'a^2+2ab+b^2',
                    'a^2+b^2',
                    'a^2-2ab+b^2'
                ],
                correct: 0
            },
            {
                prompt: 'What is sin 60 without using a calculator?',
                answers: [
                    'square root 3 over 2 ',
                    '1',
                    'square root 2 over 2'
                ],
                correct: 0
            },
            {
                prompt: 'What does Arrogate mean?',
                answers: [
                    'Seize and take control without authority',
                    'Surgical operation which helps the patient breath',
                    'An arrogant person'
                ],
                correct: 0
            },
            {
                prompt: 'What does Arcane mean?',
                answers: [
                    'A magical type of spell',
                    'A fictional element for magicians',
                    'Requiring secret or mysterious knowledge'
                ],
                correct: 2
            },
            {
                prompt: 'What does Complement mean?',
                answers: [
                    'A polite expression of praise or admiration',
                    'A side dish that is included with entree to make it taste better',
                    'Something added to embellish or make perfect'
                ],
                correct: 2
            },
            {
                prompt: 'What does Cupidity mean?',
                answers: [
                    'Extreme greed for material wealth',
                    'Demanding immediate attention',
                    'A person deeply in love'
                ],
                correct: 0
            },
            {
                prompt: 'Who was the leader of the SS?',
                answers: [
                    'Heindrich Himmler ',
                    'Erich Von Manstein',
                    'Heinz Guderian'
                ],
                correct: 0
            },
            {
                prompt: 'Who was killed that started World War 1?',
                answers: [
                    'Empress Elizabeth of Austria',
                    'Gavrilo Princp',
                    'Archduke Franz Ferdinand'
                ],
                correct: 2
            },
            {
                prompt: 'How long was World War 2 and what years did it take place in?',
                answers: [
                    '1939-1945',
                    '1940-1945',
                    '1914-1918',
                ],
                correct: 0
            },
            {
                prompt: 'What was the treaty that ended WWI that laid some of the unrest that would later explode into WWII?',
                answers: [
                    'Geneva Conference',
                    'Treaty of Versailles',
                    'Paris Peace Accords'
                ],
                correct: 1
            },
            {
                prompt: 'Hitler became the essential dictator of Germany in which decade?',
                answers: [
                    '1920s',
                    '1940s',
                    '1930s'
                ],
                correct: 2
            },
            {
                prompt: 'What war during the 1930s greatly influenced the development of military tactics that were used in WWII??',
                answers: [
                    'The Spanish-American War',
                    'The Korean War',
                    'The Spanish Civil War'
                ],
                correct: 2
            },
            {
                prompt: 'In which decade did the Reverend open his Foundation?',
                answers: [
                    '1970s',
                    '1980s',
                    '1990s'
                ],
                correct: 1
            },
            {
                prompt: 'Which event began World War II?',
                answers: [
                    'Assassination of Arch Duke Ferdinand',
                    'Battle of Britain',
                    'Invasion of Poland'
                ],
                correct: 2
            },
            {
                prompt: 'What was the name of the line of fortifications across the French border with Germany?',
                answers: [
                    'The Siegfried Line',
                    'The Maginot Line',
                    'The Verdun Line'
                ],
                correct: 1
            }
        ],
        judgements: {
            2000: {
                self: "Wow you're a genius!",
                third: "Hot Shot"
            },
            1000: {
                self: "Smart but still improvements to make",
                third: "Nicely Done"
            },
            500: {
                self: "Substantial knowldege, average",
                third: "Average"
            },
            0: {
                self: "Are you trying>",
                third: "Are you even trying?"
            }
        }
    }
);
