import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (prisma) => {
    // Create Users
    const users = await Promise.all([
      prisma.users.create({
        data: {
          email: 'test1@gmail.com',
          name: 'Vlad Smith',
          password_hash: 'hashed_password_1',
          role: 'USER',
        },
      }),
      prisma.users.create({
        data: {
          email: 'admin@gmail.com',
          name: 'Admin Jane',
          password_hash: 'hashed_password_2',
          role: 'ADMIN',
        },
      }),
      prisma.users.create({
        data: {
          email: 'test2@gmail.com',
          name: 'Alice Johnson',
          password_hash: 'hashed_password_3',
          role: 'USER',
        },
      }),
      prisma.users.create({
        data: {
          email: 'test3@gmail.com',
          name: 'Bob Wilson',
          password_hash: 'hashed_password_4',
          role: 'USER',
        },
      }),
      prisma.users.create({
        data: {
          email: 'test4@gmail.com',
          name: 'Emma Davis',
          password_hash: 'hashed_password_5',
          role: 'USER',
        },
      }),
    ]);

    // Create Authors
    const authors = await Promise.all([
      prisma.authors.create({
        data: {
          name: 'J.K. Rowling',
          description:
            'British author, best known for the Harry Potter series.',
        },
      }),
      prisma.authors.create({
        data: {
          name: 'George R.R. Martin',
          description: 'American novelist, known for A Song of Ice and Fire.',
        },
      }),
      prisma.authors.create({
        data: {
          name: 'J.R.R. Tolkien',
          description: 'Author of The Lord of the Rings and The Hobbit.',
        },
      }),
      prisma.authors.create({
        data: {
          name: 'Agatha Christie',
          description: 'Queen of mystery novels, creator of Hercule Poirot.',
        },
      }),
      prisma.authors.create({
        data: {
          name: 'Stephen King',
          description: 'Master of horror and suspense fiction.',
        },
      }),
      prisma.authors.create({
        data: {
          name: 'Jane Austen',
          description: 'English novelist known for her romance novels.',
        },
      }),
      prisma.authors.create({
        data: {
          name: 'Neil Gaiman',
          description: 'British author of fantasy and speculative fiction.',
        },
      }),
      prisma.authors.create({
        data: {
          name: 'Toni Morrison',
          description:
            'American novelist, known for her profound works on race and identity.',
        },
      }),
      prisma.authors.create({
        data: {
          name: 'Haruki Murakami',
          description: 'Japanese author of surreal and philosophical novels.',
        },
      }),
      prisma.authors.create({
        data: {
          name: 'Margaret Atwood',
          description:
            'Canadian author known for dystopian and feminist literature.',
        },
      }),
    ]);

    // Create Categories
    const categories = await Promise.all([
      prisma.categories.create({
        data: { name: 'Fiction', description: 'Fictional literature' },
      }),
      prisma.categories.create({
        data: { name: 'Fantasy', description: 'Fantasy genre books' },
      }),
      prisma.categories.create({
        data: { name: 'Mystery', description: 'Mystery and crime novels' },
      }),
      prisma.categories.create({
        data: { name: 'Horror', description: 'Horror genre books' },
      }),
      prisma.categories.create({
        data: { name: 'Romance', description: 'Romantic literature' },
      }),
      prisma.categories.create({
        data: {
          name: 'Literary Fiction',
          description: 'Character-driven narrative fiction',
        },
      }),
      prisma.categories.create({
        data: {
          name: 'Dystopian',
          description: 'Dystopian and speculative fiction',
        },
      }),
    ]);

    // Update child categories
    await Promise.all([
      prisma.categories.update({
        where: { id: categories[1].id },
        data: { parent_id: categories[0].id },
      }),
      prisma.categories.update({
        where: { id: categories[2].id },
        data: { parent_id: categories[0].id },
      }),
      prisma.categories.update({
        where: { id: categories[3].id },
        data: { parent_id: categories[0].id },
      }),
      prisma.categories.update({
        where: { id: categories[4].id },
        data: { parent_id: categories[0].id },
      }),
      prisma.categories.update({
        where: { id: categories[5].id },
        data: { parent_id: categories[0].id },
      }),
      prisma.categories.update({
        where: { id: categories[6].id },
        data: { parent_id: categories[0].id },
      }),
    ]);

    // Create Books (30 books)
    const books = await Promise.all([
      prisma.books.create({
        data: {
          name: "Harry Potter and the Philosopher's Stone",
          author_id: authors[0].id,
          price: 19.99,
          description:
            'The first book in the Harry Potter series, introducing the magical world of Hogwarts.',
          annotation:
            'Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry’s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!',
          language: 'English',
          pages: 223,
          format: 'HARDCOVER',
          isbn: '9780747532743',
          dimensions: '129 x 198 mm',
          weight: 350,
          publisher: 'Bloomsbury',
          publication_year: 1997,
        },
      }),
      prisma.books.create({
        data: {
          name: 'A Game of Thrones',
          author_id: authors[1].id,
          price: 24.99,
          description:
            'The first book in A Song of Ice and Fire series, a sprawling epic fantasy.',
          annotation:
            'In the frozen wastes to the north of Winterfell, sinister and supernatural forces are mustering. In the south, courtly intrigues and rivalries swirl around the Iron Throne. As noble families fight for power, the fate of the Seven Kingdoms hangs in the balance. George R.R. Martin’s epic saga begins with political intrigue, epic battles, and a richly detailed world.',
          language: 'English',
          pages: 694,
          format: 'PAPERBACK',
          isbn: '9780553573404',
          dimensions: '108 x 174 mm',
          weight: 450,
          publisher: 'Bantam Books',
          publication_year: 1996,
        },
      }),
      prisma.books.create({
        data: {
          name: 'The Hobbit',
          author_id: authors[2].id,
          price: 15.99,
          description:
            'A fantasy adventure by J.R.R. Tolkien, set in Middle-earth.',
          annotation:
            'Bilbo Baggins, a hobbit, enjoys a quiet life until the wizard Gandalf and a group of dwarves enlist him for an adventure. Their goal: to reclaim the dwarves’ mountain home and its treasure from the dragon Smaug. A timeless tale of courage, friendship, and discovery in a richly imagined world.',
          language: 'English',
          pages: 310,
          format: 'PAPERBACK',
          isbn: '9780261103344',
          dimensions: '129 x 198 mm',
          weight: 300,
          publisher: 'Houghton Mifflin',
          publication_year: 1937,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Murder on the Orient Express',
          author_id: authors[3].id,
          price: 12.99,
          description: 'A classic Hercule Poirot mystery by Agatha Christie.',
          annotation:
            'Just after midnight, a snowdrift stops the Orient Express in its tracks. The luxurious train is surprisingly full for the time of year, but by morning, one passenger is dead. Isolated and with a killer in their midst, detective Hercule Poirot must identify the murderer before they strike again in this ingenious whodunit.',
          language: 'English',
          pages: 274,
          format: 'PAPERBACK',
          isbn: '9780062693662',
          dimensions: '135 x 203 mm',
          weight: 200,
          publisher: 'HarperCollins',
          publication_year: 1934,
        },
      }),
      prisma.books.create({
        data: {
          name: 'The Shining',
          author_id: authors[4].id,
          price: 17.99,
          description: 'A horror novel about a haunted hotel by Stephen King.',
          annotation:
            'Jack Torrance, a struggling writer and recovering alcoholic, takes a job as the off-season caretaker of the isolated Overlook Hotel. His young son, Danny, possesses a psychic ability known as "the shining," which reveals the hotel’s sinister past and growing malevolence. As winter traps the family, the hotel’s dark forces drive Jack to madness, endangering them all.',
          language: 'English',
          pages: 659,
          format: 'PAPERBACK',
          isbn: '9780307743657',
          dimensions: '106 x 175 mm',
          weight: 400,
          publisher: 'Anchor Books',
          publication_year: 1977,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Harry Potter and the Chamber of Secrets',
          author_id: authors[0].id,
          price: 20.99,
          description: 'The second book in the Harry Potter series.',
          annotation:
            'The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry returns to Hogwarts, disaster will strike. And strike it does, as a sinister mystery unfolds.',
          language: 'English',
          pages: 341,
          format: 'HARDCOVER',
          isbn: '9780439064866',
          dimensions: '137 x 205 mm',
          weight: 360,
          publisher: 'Scholastic',
          publication_year: 1998,
        },
      }),
      prisma.books.create({
        data: {
          name: 'A Clash of Kings',
          author_id: authors[1].id,
          price: 25.99,
          description: 'The second book in A Song of Ice and Fire series.',
          annotation:
            'A comet the color of blood and flame cuts across the sky. Two great leaders—Lord Eddard Stark and Robert Baratheon—are dead, and the land is torn by civil war. As factions vie for the Iron Throne, new alliances and betrayals emerge, and the realm teeters on the edge of chaos in this gripping continuation of Martin’s epic.',
          language: 'English',
          pages: 761,
          format: 'PAPERBACK',
          isbn: '9780553579901',
          dimensions: '108 x 174 mm',
          weight: 470,
          publisher: 'Bantam Books',
          publication_year: 1998,
        },
      }),
      prisma.books.create({
        data: {
          name: 'The Lord of the Rings: The Fellowship of the Ring',
          author_id: authors[2].id,
          price: 18.99,
          description: 'The first part of The Lord of the Rings trilogy.',
          annotation:
            'In a sleepy village in the Shire, young Frodo Baggins inherits a mysterious ring from his uncle Bilbo. The ring is the One Ring, an artifact of immense power and evil. Frodo, joined by a fellowship of hobbits, men, an elf, a dwarf, and a wizard, sets out on a perilous quest to destroy it before the Dark Lord Sauron reclaims it.',
          language: 'English',
          pages: 423,
          format: 'PAPERBACK',
          isbn: '9780547928210',
          dimensions: '130 x 198 mm',
          weight: 350,
          publisher: 'Mariner Books',
          publication_year: 1954,
        },
      }),
      prisma.books.create({
        data: {
          name: 'And Then There Were None',
          author_id: authors[3].id,
          price: 13.99,
          description: 'A gripping mystery about ten strangers on an island.',
          annotation:
            'Ten strangers, each with a dark secret, are lured to a remote island by a mysterious host. When they start dying one by one, the survivors realize they are part of a deadly game orchestrated by a cunning killer. Agatha Christie’s masterpiece of suspense keeps readers guessing until the shocking end.',
          language: 'English',
          pages: 264,
          format: 'PAPERBACK',
          isbn: '9780062073488',
          dimensions: '135 x 203 mm',
          weight: 210,
          publisher: 'HarperCollins',
          publication_year: 1939,
        },
      }),
      prisma.books.create({
        data: {
          name: 'It',
          author_id: authors[4].id,
          price: 22.99,
          description: 'A horror novel about a shape-shifting entity.',
          annotation:
            'In Derry, Maine, seven children band together to confront a malevolent, shape-shifting entity that often appears as Pennywise the Dancing Clown. Decades later, the now-adult "Losers’ Club" must reunite to face the resurgent evil. Stephen King’s chilling tale explores childhood trauma, memory, and the power of friendship against unimaginable horror.',
          language: 'English',
          pages: 1156,
          format: 'PAPERBACK',
          isbn: '9781501142970',
          dimensions: '135 x 210 mm',
          weight: 700,
          publisher: 'Scribner',
          publication_year: 1986,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Pride and Prejudice',
          author_id: authors[5].id,
          price: 14.99,
          description: 'A classic romance novel by Jane Austen.',
          annotation:
            'Elizabeth Bennet, a sharp-witted young woman, navigates societal expectations, family pressures, and her evolving relationship with the wealthy but initially aloof Mr. Darcy. Jane Austen’s beloved novel explores love, class, and personal growth with humor and insight, making it a timeless masterpiece of English literature.',
          language: 'English',
          pages: 432,
          format: 'PAPERBACK',
          isbn: '9780141439518',
          dimensions: '129 x 198 mm',
          weight: 320,
          publisher: 'Penguin Classics',
          publication_year: 1813,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Sense and Sensibility',
          author_id: authors[5].id,
          price: 13.99,
          description: 'A novel about two sisters navigating love and loss.',
          annotation:
            'Sisters Elinor and Marianne Dashwood face financial and social challenges after their father’s death. Elinor, practical and reserved, and Marianne, passionate and impulsive, pursue love in a society bound by convention. Jane Austen’s first published novel explores the balance between sense and sensibility in matters of the heart.',
          language: 'English',
          pages: 368,
          format: 'PAPERBACK',
          isbn: '9780141439662',
          dimensions: '129 x 198 mm',
          weight: 310,
          publisher: 'Penguin Classics',
          publication_year: 1811,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Harry Potter and the Prisoner of Azkaban',
          author_id: authors[0].id,
          price: 21.99,
          description: 'The third book in the Harry Potter series.',
          annotation:
            'Harry Potter’s third year at Hogwarts is shadowed by the escape of Sirius Black, a dangerous wizard, from Azkaban prison. As Harry learns more about his parents’ past, he faces Dementors, time travel, and dark secrets. This installment deepens the magical world with thrilling twists and emotional depth.',
          language: 'English',
          pages: 435,
          format: 'HARDCOVER',
          isbn: '9780439136358',
          dimensions: '137 x 205 mm',
          weight: 370,
          publisher: 'Scholastic',
          publication_year: 1999,
        },
      }),
      prisma.books.create({
        data: {
          name: 'The Silmarillion',
          author_id: authors[2].id,
          price: 19.99,
          description: 'A collection of mythopoeic stories by J.R.R. Tolkien.',
          annotation:
            'The Silmarillion is a collection of tales set in the world of Middle-earth, chronicling the creation of the world and the history of the Silmarils, three extraordinary gems. From the epic battles of the First Age to the struggles of gods, elves, and men, Tolkien’s work is a profound mythological tapestry.',
          language: 'English',
          pages: 365,
          format: 'PAPERBACK',
          isbn: '9780547928227',
          dimensions: '130 x 198 mm',
          weight: 340,
          publisher: 'Mariner Books',
          publication_year: 1977,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Carrie',
          author_id: authors[4].id,
          price: 16.99,
          description: 'A horror novel about a telekinetic teenager.',
          annotation:
            'Carrie White, a shy and bullied teenager, discovers she has telekinetic powers. Pushed to her limits by her fanatical mother and cruel classmates, Carrie unleashes her abilities in a catastrophic act of revenge at her high school prom. Stephen King’s debut novel is a gripping exploration of isolation and power.',
          language: 'English',
          pages: 304,
          format: 'PAPERBACK',
          isbn: '9780307743664',
          dimensions: '106 x 175 mm',
          weight: 250,
          publisher: 'Anchor Books',
          publication_year: 1974,
        },
      }),
      prisma.books.create({
        data: {
          name: 'American Gods',
          author_id: authors[6].id,
          price: 18.99,
          description: 'A fantasy novel blending mythology and modern America.',
          annotation:
            'Shadow Moon, recently released from prison, meets the mysterious Mr. Wednesday, who draws him into a hidden world where old gods clash with new. As Shadow travels across America, he encounters deities from various mythologies, caught in a battle for relevance in a modern age. Neil Gaiman’s novel is a rich blend of myth, mystery, and Americana.',
          language: 'English',
          pages: 635,
          format: 'PAPERBACK',
          isbn: '9780062572233',
          dimensions: '135 x 203 mm',
          weight: 450,
          publisher: 'William Morrow',
          publication_year: 2001,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Beloved',
          author_id: authors[7].id,
          price: 16.99,
          description: 'A powerful novel about slavery and its aftermath.',
          annotation:
            'Set after the American Civil War, Beloved tells the story of Sethe, a former slave haunted by her past and the ghost of her unnamed child. As the past and present intertwine, Toni Morrison crafts a haunting narrative about trauma, memory, and the enduring impact of slavery on a family and community.',
          language: 'English',
          pages: 324,
          format: 'PAPERBACK',
          isbn: '9781400033416',
          dimensions: '132 x 203 mm',
          weight: 300,
          publisher: 'Vintage',
          publication_year: 1987,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Norwegian Wood',
          author_id: authors[8].id,
          price: 15.99,
          description: 'A nostalgic novel of love and loss by Haruki Murakami.',
          annotation:
            'Toru Watanabe, a college student in 1960s Tokyo, is caught between two women: Naoko, a fragile beauty tied to his past, and Midori, a vibrant and independent spirit. Set against a backdrop of music and social change, Murakami’s lyrical novel explores love, grief, and the search for identity.',
          language: 'English',
          pages: 296,
          format: 'PAPERBACK',
          isbn: '9780375704024',
          dimensions: '132 x 203 mm',
          weight: 280,
          publisher: 'Vintage',
          publication_year: 1987,
        },
      }),
      prisma.books.create({
        data: {
          name: 'The Handmaid’s Tale',
          author_id: authors[9].id,
          price: 15.99,
          description: 'A dystopian novel about a totalitarian regime.',
          annotation:
            'In the Republic of Gilead, a theocratic regime, women are stripped of their rights, and Offred, a Handmaid, is forced into reproductive servitude. Through her eyes, Margaret Atwood explores themes of oppression, resistance, and survival in a chilling dystopian world where power and control dictate every aspect of life.',
          language: 'English',
          pages: 311,
          format: 'PAPERBACK',
          isbn: '9780385490818',
          dimensions: '132 x 203 mm',
          weight: 290,
          publisher: 'Anchor Books',
          publication_year: 1985,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Harry Potter and the Goblet of Fire',
          author_id: authors[0].id,
          price: 22.99,
          description: 'The fourth book in the Harry Potter series.',
          annotation:
            'Harry Potter is mysteriously entered into the dangerous Triwizard Tournament, a magical competition between three wizarding schools. As he faces deadly tasks and dark forces, Harry uncovers a larger plot tied to the return of Voldemort. J.K. Rowling’s fourth novel expands the wizarding world with thrilling stakes.',
          language: 'English',
          pages: 734,
          format: 'HARDCOVER',
          isbn: '9780439139595',
          dimensions: '137 x 205 mm',
          weight: 600,
          publisher: 'Scholastic',
          publication_year: 2000,
        },
      }),
      prisma.books.create({
        data: {
          name: 'A Storm of Swords',
          author_id: authors[1].id,
          price: 26.99,
          description: 'The third book in A Song of Ice and Fire series.',
          annotation:
            'The Seven Kingdoms are engulfed in chaos as noble houses battle for power. Betrayals, weddings, and shocking twists reshape the political landscape, while supernatural threats grow beyond the Wall. George R.R. Martin’s third book is a sprawling epic of war, loyalty, and survival.',
          language: 'English',
          pages: 973,
          format: 'PAPERBACK',
          isbn: '9780553573428',
          dimensions: '108 x 174 mm',
          weight: 600,
          publisher: 'Bantam Books',
          publication_year: 2000,
        },
      }),
      prisma.books.create({
        data: {
          name: 'The Lord of the Rings: The Two Towers',
          author_id: authors[2].id,
          price: 18.99,
          description: 'The second part of The Lord of the Rings trilogy.',
          annotation:
            'The Fellowship is broken, and Frodo and Sam continue their perilous journey to Mordor. Meanwhile, Aragorn, Legolas, and Gimli pursue their captured friends, and war looms in Middle-earth. J.R.R. Tolkien’s second volume deepens the epic struggle against Sauron’s forces.',
          language: 'English',
          pages: 352,
          format: 'PAPERBACK',
          isbn: '9780547928203',
          dimensions: '130 x 198 mm',
          weight: 340,
          publisher: 'Mariner Books',
          publication_year: 1954,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Death on the Nile',
          author_id: authors[3].id,
          price: 13.99,
          description: 'A Hercule Poirot mystery set on a Nile River cruise.',
          annotation:
            'A luxurious cruise along the Nile turns deadly when a wealthy heiress is murdered. Hercule Poirot, vacationing on the same steamer, must untangle a web of jealousy, betrayal, and revenge to reveal the killer. Agatha Christie’s exotic setting and clever plotting make this a classic mystery.',
          language: 'English',
          pages: 270,
          format: 'PAPERBACK',
          isbn: '9780062073556',
          dimensions: '135 x 203 mm',
          weight: 240,
          publisher: 'HarperCollins',
          publication_year: 1937,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Salem’s Lot',
          author_id: authors[4].id,
          price: 17.99,
          description: 'A horror novel about a vampire infestation.',
          annotation:
            'Ben Mears returns to his childhood town of Jerusalem’s Lot to write a novel, only to discover that a sinister force has taken hold. As residents turn into vampires, Ben and a small group of survivors fight to stop the spreading evil. Stephen King’s chilling tale redefines the vampire genre.',
          language: 'English',
          pages: 653,
          format: 'PAPERBACK',
          isbn: '9780307743671',
          dimensions: '106 x 175 mm',
          weight: 400,
          publisher: 'Anchor Books',
          publication_year: 1975,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Emma',
          author_id: authors[5].id,
          price: 14.99,
          description:
            'A Jane Austen novel about a wealthy young woman’s matchmaking.',
          annotation:
            'Emma Woodhouse, beautiful, clever, and rich, fancies herself a matchmaker, meddling in the romantic lives of those around her. Her missteps lead to unexpected consequences, forcing her to confront her own feelings. Jane Austen’s witty novel explores love, social class, and personal growth.',
          language: 'English',
          pages: 474,
          format: 'PAPERBACK',
          isbn: '9780141439587',
          dimensions: '129 x 198 mm',
          weight: 330,
          publisher: 'Penguin Classics',
          publication_year: 1815,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Good Omens',
          author_id: authors[6].id,
          price: 17.99,
          description:
            'A comedic fantasy novel by Neil Gaiman and Terry Pratchett.',
          annotation:
            'The world is about to end, but the angel Aziraphale and demon Crowley, who’ve grown fond of Earth, team up to prevent the apocalypse. With a misplaced Antichrist and quirky characters, this humorous tale by Neil Gaiman and Terry Pratchett blends wit, satire, and cosmic adventure.',
          language: 'English',
          pages: 412,
          format: 'PAPERBACK',
          isbn: '9780060853983',
          dimensions: '135 x 203 mm',
          weight: 350,
          publisher: 'William Morrow',
          publication_year: 1990,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Song of Solomon',
          author_id: authors[7].id,
          price: 16.99,
          description: 'A novel about identity and heritage by Toni Morrison.',
          annotation:
            'Macon "Milkman" Dead III embarks on a journey to uncover his family’s history, from the urban North to the rural South. Through his quest, Toni Morrison weaves a rich tapestry of African-American folklore, identity, and the search for freedom in this lyrical and profound novel.',
          language: 'English',
          pages: 337,
          format: 'PAPERBACK',
          isbn: '9781400033423',
          dimensions: '132 x 203 mm',
          weight: 310,
          publisher: 'Vintage',
          publication_year: 1977,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Kafka on the Shore',
          author_id: authors[8].id,
          price: 16.99,
          description: 'A surreal novel by Haruki Murakami.',
          annotation:
            'Kafka Tamura, a 15-year-old runaway, and Nakata, an elderly man who talks to cats, find their lives intertwined in a metaphysical journey across Japan. Haruki Murakami’s dreamlike narrative blends mystery, folklore, and existential questions, creating a haunting exploration of fate and identity.',
          language: 'English',
          pages: 467,
          format: 'PAPERBACK',
          isbn: '9781400079278',
          dimensions: '132 x 203 mm',
          weight: 360,
          publisher: 'Vintage',
          publication_year: 2002,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Oryx and Crake',
          author_id: authors[9].id,
          price: 16.99,
          description: 'A dystopian novel by Margaret Atwood.',
          annotation:
            'In a post-apocalyptic world, Snowman survives among genetically engineered creatures, reflecting on his past with his friend Crake and the enigmatic Oryx. Margaret Atwood’s speculative novel explores genetic engineering, corporate greed, and humanity’s future in a chilling yet poignant narrative.',
          language: 'English',
          pages: 376,
          format: 'PAPERBACK',
          isbn: '9780385721677',
          dimensions: '132 x 203 mm',
          weight: 340,
          publisher: 'Anchor Books',
          publication_year: 2003,
        },
      }),
      prisma.books.create({
        data: {
          name: 'Neverwhere',
          author_id: authors[6].id,
          price: 16.99,
          description: 'A dark fantasy novel set in London Below.',
          annotation:
            'Richard Mayhew’s ordinary life changes when he helps a mysterious girl named Door, plunging him into London Below, a shadowy world beneath the city. Neil Gaiman’s urban fantasy follows Richard’s quest through a bizarre realm of magic, danger, and unlikely allies in a battle for survival.',
          language: 'English',
          pages: 370,
          format: 'PAPERBACK',
          isbn: '9780062459084',
          dimensions: '135 x 203 mm',
          weight: 330,
          publisher: 'William Morrow',
          publication_year: 1996,
        },
      }),
    ]);

    // Create BookCategories
    await Promise.all([
      prisma.bookCategories.create({
        data: { book_id: books[0].id, category_id: categories[1].id },
      }), // Harry Potter 1 - Fantasy
      prisma.bookCategories.create({
        data: { book_id: books[1].id, category_id: categories[1].id },
      }), // A Game of Thrones - Fantasy
      prisma.bookCategories.create({
        data: { book_id: books[2].id, category_id: categories[1].id },
      }), // The Hobbit - Fantasy
      prisma.bookCategories.create({
        data: { book_id: books[3].id, category_id: categories[2].id },
      }), // Murder on the Orient Express - Mystery
      prisma.bookCategories.create({
        data: { book_id: books[4].id, category_id: categories[3].id },
      }), // The Shining - Horror
      prisma.bookCategories.create({
        data: { book_id: books[5].id, category_id: categories[1].id },
      }), // Harry Potter 2 - Fantasy
      prisma.bookCategories.create({
        data: { book_id: books[6].id, category_id: categories[1].id },
      }), // A Clash of Kings - Fantasy
      prisma.bookCategories.create({
        data: { book_id: books[7].id, category_id: categories[1].id },
      }), // The Fellowship of the Ring - Fantasy
      prisma.bookCategories.create({
        data: { book_id: books[8].id, category_id: categories[2].id },
      }), // And Then There Were None - Mystery
      prisma.bookCategories.create({
        data: { book_id: books[9].id, category_id: categories[3].id },
      }), // It - Horror
      prisma.bookCategories.create({
        data: { book_id: books[10].id, category_id: categories[4].id },
      }), // Pride and Prejudice - Romance
      prisma.bookCategories.create({
        data: { book_id: books[11].id, category_id: categories[4].id },
      }), // Sense and Sensibility - Romance
      prisma.bookCategories.create({
        data: { book_id: books[12].id, category_id: categories[1].id },
      }), // Harry Potter 3 - Fantasy
      prisma.bookCategories.create({
        data: { book_id: books[13].id, category_id: categories[1].id },
      }), // The Silmarillion - Fantasy
      prisma.bookCategories.create({
        data: { book_id: books[14].id, category_id: categories[3].id },
      }), // Carrie - Horror
      prisma.bookCategories.create({
        data: { book_id: books[15].id, category_id: categories[1].id },
      }), // American Gods - Fantasy
      prisma.bookCategories.create({
        data: { book_id: books[16].id, category_id: categories[5].id },
      }), // Beloved - Literary Fiction
      prisma.bookCategories.create({
        data: { book_id: books[17].id, category_id: categories[5].id },
      }), // Norwegian Wood - Literary Fiction
      prisma.bookCategories.create({
        data: { book_id: books[18].id, category_id: categories[6].id },
      }), // The Handmaid’s Tale - Dystopian
      prisma.bookCategories.create({
        data: { book_id: books[19].id, category_id: categories[1].id },
      }), // Harry Potter 4 - Fantasy
      prisma.bookCategories.create({
        data: { book_id: books[20].id, category_id: categories[1].id },
      }), // A Storm of Swords - Fantasy
      prisma.bookCategories.create({
        data: { book_id: books[21].id, category_id: categories[1].id },
      }), // The Two Towers - Fantasy
      prisma.bookCategories.create({
        data: { book_id: books[22].id, category_id: categories[2].id },
      }), // Death on the Nile - Mystery
      prisma.bookCategories.create({
        data: { book_id: books[23].id, category_id: categories[3].id },
      }), // Salem’s Lot - Horror
      prisma.bookCategories.create({
        data: { book_id: books[24].id, category_id: categories[4].id },
      }), // Emma - Romance
      prisma.bookCategories.create({
        data: { book_id: books[25].id, category_id: categories[1].id },
      }), // Good Omens - Fantasy
      prisma.bookCategories.create({
        data: { book_id: books[26].id, category_id: categories[5].id },
      }), // Song of Solomon - Literary Fiction
      prisma.bookCategories.create({
        data: { book_id: books[27].id, category_id: categories[5].id },
      }), // Kafka on the Shore - Literary Fiction
      prisma.bookCategories.create({
        data: { book_id: books[28].id, category_id: categories[6].id },
      }), // Oryx and Crake - Dystopian
      prisma.bookCategories.create({
        data: { book_id: books[29].id, category_id: categories[1].id },
      }), // Neverwhere - Fantasy
    ]);

    // Create BookImages
    await Promise.all([
      // Original books (keeping existing image paths where specified)
      // Harry Potter and the Philosopher's Stone (3 images, using original paths)
      prisma.bookImages.create({
        data: {
          book_id: books[0].id,
          image_url: '/books/book_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[0].id,
          image_url: '/books/book_1_1.png',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[0].id,
          image_url: '/books/book_1_2.png',
          is_primary: false,
        },
      }),
      // A Game of Thrones (3 images, using original path for primary)
      prisma.bookImages.create({
        data: {
          book_id: books[1].id,
          image_url: '/books/game_of_thrones_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[1].id,
          image_url: '/books/game_of_thrones_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[1].id,
          image_url: '/books/game_of_thrones_3.jpg',
          is_primary: false,
        },
      }),
      // The Hobbit (3 images, using original path for primary)
      prisma.bookImages.create({
        data: {
          book_id: books[2].id,
          image_url: '/books/hobbit_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[2].id,
          image_url: '/books/hobbit_2.jpg',
          is_primary: false,
        },
      }),
      // Murder on the Orient Express (3 images, using original path for primary)
      prisma.bookImages.create({
        data: {
          book_id: books[3].id,
          image_url: '/books/orient_express_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[3].id,
          image_url: '/books/orient_express_2.webp',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[3].id,
          image_url: '/books/orient_express_3.webp',
          is_primary: false,
        },
      }),
      // The Shining (3 images, using original path for primary)
      prisma.bookImages.create({
        data: {
          book_id: books[4].id,
          image_url: '/books/shining_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[4].id,
          image_url: '/books/shining_2.png',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[4].id,
          image_url: '/books/shining_3.png',
          is_primary: false,
        },
      }),
      // Harry Potter and the Chamber of Secrets (3 images, using original path for primary)
      prisma.bookImages.create({
        data: {
          book_id: books[5].id,
          image_url: '/books/hp_chamber_secrets_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[5].id,
          image_url: '/books/hp_chamber_secrets_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[5].id,
          image_url: '/books/hp_chamber_secrets_3.jpg',
          is_primary: false,
        },
      }),
      // A Clash of Kings (3 images, using original path for primary)
      prisma.bookImages.create({
        data: {
          book_id: books[6].id,
          image_url: '/books/clash_of_kings_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[6].id,
          image_url: '/books/clash_of_kings_2.jpg',
          is_primary: false,
        },
      }),
      // The Fellowship of the Ring (3 images, using original path for primary)
      prisma.bookImages.create({
        data: {
          book_id: books[7].id,
          image_url: '/books/book_8.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[7].id,
          image_url: '/books/fellowship_ring_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[7].id,
          image_url: '/books/fellowship_ring_3.jpg',
          is_primary: false,
        },
      }),
      // And Then There Were None (3 images, using original path for primary)
      prisma.bookImages.create({
        data: {
          book_id: books[8].id,
          image_url: '/books/book_9.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[8].id,
          image_url: '/books/and_then_none_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[8].id,
          image_url: '/books/and_then_none_3.jpg',
          is_primary: false,
        },
      }),
      // It (3 images, using original path for primary)
      prisma.bookImages.create({
        data: {
          book_id: books[9].id,
          image_url: '/books/book_10.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[9].id,
          image_url: '/books/it_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[9].id,
          image_url: '/books/it_3.jpg',
          is_primary: false,
        },
      }),
      // Pride and Prejudice (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[10].id,
          image_url: '/books/pride_prejudice_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[10].id,
          image_url: '/books/pride_prejudice_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[10].id,
          image_url: '/books/pride_prejudice_3.jpg',
          is_primary: false,
        },
      }),
      // Sense and Sensibility (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[11].id,
          image_url: '/books/sense_sensibility_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[11].id,
          image_url: '/books/sense_sensibility_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[11].id,
          image_url: '/books/sense_sensibility_3.jpg',
          is_primary: false,
        },
      }),
      // Harry Potter and the Prisoner of Azkaban (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[12].id,
          image_url: '/books/hp_prisoner_azkaban_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[12].id,
          image_url: '/books/hp_prisoner_azkaban_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[12].id,
          image_url: '/books/hp_prisoner_azkaban_3.jpg',
          is_primary: false,
        },
      }),
      // The Silmarillion (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[13].id,
          image_url: '/books/silmarillion_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[13].id,
          image_url: '/books/silmarillion_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[13].id,
          image_url: '/books/silmarillion_3.jpg',
          is_primary: false,
        },
      }),
      // Carrie (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[14].id,
          image_url: '/books/carrie_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[14].id,
          image_url: '/books/carrie_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[14].id,
          image_url: '/books/carrie_3.jpg',
          is_primary: false,
        },
      }),
      // American Gods (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[15].id,
          image_url: '/books/american_gods_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[15].id,
          image_url: '/books/american_gods_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[15].id,
          image_url: '/books/american_gods_3.jpg',
          is_primary: false,
        },
      }),
      // Beloved (2 images)
      prisma.bookImages.create({
        data: {
          book_id: books[16].id,
          image_url: '/books/beloved_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[16].id,
          image_url: '/books/beloved_2.jpg',
          is_primary: false,
        },
      }),
      // Norwegian Wood (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[17].id,
          image_url: '/books/norwegian_wood_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[17].id,
          image_url: '/books/norwegian_wood_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[17].id,
          image_url: '/books/norwegian_wood_3.jpg',
          is_primary: false,
        },
      }),
      // The Handmaid’s Tale (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[18].id,
          image_url: '/books/handmaids_tale_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[18].id,
          image_url: '/books/handmaids_tale_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[18].id,
          image_url: '/books/handmaids_tale_3.jpg',
          is_primary: false,
        },
      }),
      // Harry Potter and the Goblet of Fire (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[19].id,
          image_url: '/books/hp_goblet_fire_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[19].id,
          image_url: '/books/hp_goblet_fire_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[19].id,
          image_url: '/books/hp_goblet_fire_3.jpg',
          is_primary: false,
        },
      }),
      // A Storm of Swords (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[20].id,
          image_url: '/books/storm_of_swords_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[20].id,
          image_url: '/books/storm_of_swords_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[20].id,
          image_url: '/books/storm_of_swords_3.jpg',
          is_primary: false,
        },
      }),
      // The Two Towers (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[21].id,
          image_url: '/books/two_towers_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[21].id,
          image_url: '/books/two_towers_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[21].id,
          image_url: '/books/two_towers_3.jpg',
          is_primary: false,
        },
      }),
      // Death on the Nile (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[22].id,
          image_url: '/books/death_nile_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[22].id,
          image_url: '/books/death_nile_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[22].id,
          image_url: '/books/death_nile_3.jpg',
          is_primary: false,
        },
      }),
      // Salem’s Lot (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[23].id,
          image_url: '/books/salems_lot_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[23].id,
          image_url: '/books/salems_lot_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[23].id,
          image_url: '/books/salems_lot_3.jpg',
          is_primary: false,
        },
      }),
      // Emma (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[24].id,
          image_url: '/books/emma_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[24].id,
          image_url: '/books/emma_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[24].id,
          image_url: '/books/emma_3.jpg',
          is_primary: false,
        },
      }),
      // Good Omens (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[25].id,
          image_url: '/books/good_omens_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[25].id,
          image_url: '/books/good_omens_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[25].id,
          image_url: '/books/good_omens_3.jpg',
          is_primary: false,
        },
      }),
      // Song of Solomon (2 images)
      prisma.bookImages.create({
        data: {
          book_id: books[26].id,
          image_url: '/books/song_of_solomon_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[26].id,
          image_url: '/books/song_of_solomon_2.jpg',
          is_primary: false,
        },
      }),
      // Kafka on the Shore (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[27].id,
          image_url: '/books/kafka_shore_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[27].id,
          image_url: '/books/kafka_shore_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[27].id,
          image_url: '/books/kafka_shore_3.jpg',
          is_primary: false,
        },
      }),
      // Oryx and Crake (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[28].id,
          image_url: '/books/oryx_crake_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[28].id,
          image_url: '/books/oryx_crake_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[28].id,
          image_url: '/books/oryx_crake_3.jpg',
          is_primary: false,
        },
      }),
      // Neverwhere (3 images)
      prisma.bookImages.create({
        data: {
          book_id: books[29].id,
          image_url: '/books/neverwhere_1.jpg',
          is_primary: true,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[29].id,
          image_url: '/books/neverwhere_2.jpg',
          is_primary: false,
        },
      }),
      prisma.bookImages.create({
        data: {
          book_id: books[29].id,
          image_url: '/books/neverwhere_3.jpg',
          is_primary: false,
        },
      }),
    ]);

    // Create Inventories
    await Promise.all(
      books.map((book, index) =>
        prisma.inventories.create({
          data: {
            book_id: book.id,
            quantity: 30 + index * 3, // 30 to 117 books in stock
          },
        })
      )
    );

    // Create Carts
    const carts = await Promise.all([
      prisma.carts.create({
        data: { user_id: users[0].id, date: new Date('2025-06-10') },
      }),
      prisma.carts.create({
        data: { user_id: users[2].id, date: new Date('2025-06-11') },
      }),
      prisma.carts.create({
        data: { user_id: users[3].id, date: new Date('2025-06-12') },
      }),
      prisma.carts.create({
        data: { user_id: users[4].id, date: new Date('2025-06-13') },
      }),
    ]);

    // Create CartItems
    await Promise.all([
      prisma.cartItems.create({
        data: { cart_id: carts[0].id, book_id: books[0].id, quantity: 2 },
      }), // Harry Potter 1
      prisma.cartItems.create({
        data: { cart_id: carts[0].id, book_id: books[3].id, quantity: 1 },
      }), // Murder on the Orient Express
      prisma.cartItems.create({
        data: { cart_id: carts[1].id, book_id: books[4].id, quantity: 1 },
      }), // The Shining
      prisma.cartItems.create({
        data: { cart_id: carts[1].id, book_id: books[10].id, quantity: 3 },
      }), // Pride and Prejudice
      prisma.cartItems.create({
        data: { cart_id: carts[2].id, book_id: books[7].id, quantity: 2 },
      }), // The Fellowship of the Ring
      prisma.cartItems.create({
        data: { cart_id: carts[2].id, book_id: books[12].id, quantity: 1 },
      }), // Harry Potter 3
      prisma.cartItems.create({
        data: { cart_id: carts[3].id, book_id: books[18].id, quantity: 2 },
      }), // The Handmaid’s Tale
      prisma.cartItems.create({
        data: { cart_id: carts[3].id, book_id: books[25].id, quantity: 1 },
      }), // Good Omens
    ]);

    // Create Reviews
    await Promise.all([
      prisma.reviews.create({
        data: {
          user_id: users[0].id,
          book_id: books[0].id,
          text: 'A magical adventure that captivated me from start to finish!',
          rating: 5,
          date: new Date('2025-05-01'),
        },
      }),
      prisma.reviews.create({
        data: {
          user_id: users[1].id,
          book_id: books[4].id,
          text: 'Terrifyingly good, kept me up all night!',
          rating: 4,
          date: new Date('2025-05-02'),
        },
      }),
      prisma.reviews.create({
        data: {
          user_id: users[2].id,
          book_id: books[3].id,
          text: 'A classic mystery, loved the twists and turns!',
          rating: 5,
          date: new Date('2025-05-03'),
        },
      }),
      prisma.reviews.create({
        data: {
          user_id: users[2].id,
          book_id: books[10].id,
          text: 'Timeless romance, beautifully written.',
          rating: 5,
          date: new Date('2025-05-04'),
        },
      }),
      prisma.reviews.create({
        data: {
          user_id: users[3].id,
          book_id: books[1].id,
          text: 'Epic storytelling, though it can be dense at times.',
          rating: 4,
          date: new Date('2025-05-05'),
        },
      }),
      prisma.reviews.create({
        data: {
          user_id: users[0].id,
          book_id: books[7].id,
          text: 'An epic start to a legendary trilogy, breathtaking!',
          rating: 5,
          date: new Date('2025-05-06'),
        },
      }),
      prisma.reviews.create({
        data: {
          user_id: users[3].id,
          book_id: books[14].id,
          text: 'Chilling and intense, a great debut by King!',
          rating: 4,
          date: new Date('2025-05-07'),
        },
      }),
      prisma.reviews.create({
        data: {
          user_id: users[4].id,
          book_id: books[18].id,
          text: 'A powerful and unsettling dystopian tale.',
          rating: 5,
          date: new Date('2025-05-08'),
        },
      }),
      prisma.reviews.create({
        data: {
          user_id: users[2].id,
          book_id: books[16].id,
          text: 'Deeply moving and beautifully crafted.',
          rating: 5,
          date: new Date('2025-05-09'),
        },
      }),
      prisma.reviews.create({
        data: {
          user_id: users[1].id,
          book_id: books[25].id,
          text: 'Hilarious and heartfelt, a unique fantasy.',
          rating: 4,
          date: new Date('2025-05-10'),
        },
      }),
    ]);

    // Create Orders
    const orders = await Promise.all([
      prisma.orders.create({
        data: {
          user_id: users[0].id,
          total_price: 19.99 * 2 + 12.99, // 2x Harry Potter 1 + Murder on the Orient Express
          shipping_address: '123 Main St, Kyiv, Ukraine',
          payment_method: 'Credit Card',
          status: 'PENDING',
          date: new Date('2025-06-01'),
        },
      }),
      prisma.orders.create({
        data: {
          user_id: users[2].id,
          total_price: 17.99 + 14.99 * 3, // The Shining + 3x Pride and Prejudice
          shipping_address: '456 Oak Ave, Lviv, Ukraine',
          payment_method: 'PayPal',
          status: 'SHIPPED',
          date: new Date('2025-06-02'),
        },
      }),
      prisma.orders.create({
        data: {
          user_id: users[3].id,
          total_price: 18.99 * 2, // 2x The Fellowship of the Ring
          shipping_address: '789 Pine Rd, Odesa, Ukraine',
          payment_method: 'Credit Card',
          status: 'DELIVERED',
          date: new Date('2025-06-03'),
        },
      }),
      prisma.orders.create({
        data: {
          user_id: users[4].id,
          total_price: 15.99 * 2 + 17.99, // 2x The Handmaid’s Tale + Good Omens
          shipping_address: '321 Elm St, Dnipro, Ukraine',
          payment_method: 'Credit Card',
          status: 'PENDING',
          date: new Date('2025-06-04'),
        },
      }),
      prisma.orders.create({
        data: {
          user_id: users[0].id,
          total_price: 16.99, // Beloved
          shipping_address: '123 Main St, Kyiv, Ukraine',
          payment_method: 'PayPal',
          status: 'CANCELED',
          date: new Date('2025-06-05'),
        },
      }),
    ]);

    // Create OrderItems
    await Promise.all([
      // Order 1
      prisma.orderItems.create({
        data: { order_id: orders[0].id, book_id: books[0].id, quantity: 2 },
      }),
      prisma.orderItems.create({
        data: { order_id: orders[0].id, book_id: books[3].id, quantity: 1 },
      }),
      // Order 2
      prisma.orderItems.create({
        data: { order_id: orders[1].id, book_id: books[4].id, quantity: 1 },
      }),
      prisma.orderItems.create({
        data: { order_id: orders[1].id, book_id: books[10].id, quantity: 3 },
      }),
      // Order 3
      prisma.orderItems.create({
        data: { order_id: orders[2].id, book_id: books[7].id, quantity: 2 },
      }),
      // Order 4
      prisma.orderItems.create({
        data: { order_id: orders[3].id, book_id: books[18].id, quantity: 2 },
      }),
      prisma.orderItems.create({
        data: { order_id: orders[3].id, book_id: books[25].id, quantity: 1 },
      }),
      // Order 5
      prisma.orderItems.create({
        data: { order_id: orders[4].id, book_id: books[16].id, quantity: 1 },
      }),
    ]);
  });
  console.log(
    'Database seeded with 30 books, multiple orders, and an average of 3 images per book successfully!'
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
