import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Create Users
  const users = await Promise.all([
    prisma.users.create({
      data: {
        email: "test1@gmail.com",
        name: "Vlad Smith",
        password_hash: "12345678",
        role: "USER",
      },
    }),
    prisma.users.create({
      data: {
        email: "admin@gmail.com",
        name: "Admin Jane",
        password_hash: "12345678",
        role: "ADMIN",
      },
    }),
    prisma.users.create({
      data: {
        email: "test2@gmail.com",
        name: "Alice Johnson",
        password_hash: "12345678",
        role: "USER",
      },
    }),
  ]);

  // Create Authors
  const authors = await Promise.all([
    prisma.authors.create({
      data: {
        name: "J.K. Rowling",
        description: "British author, best known for the Harry Potter series.",
      },
    }),
    prisma.authors.create({
      data: {
        name: "George R.R. Martin",
        description: "American novelist, known for A Song of Ice and Fire.",
      },
    }),
    prisma.authors.create({
      data: {
        name: "J.R.R. Tolkien",
        description: "Author of The Lord of the Rings.",
      },
    }),
    prisma.authors.create({
      data: {
        name: "Agatha Christie",
        description: "Queen of mystery novels.",
      },
    }),
    prisma.authors.create({
      data: {
        name: "Stephen King",
        description: "Master of horror and suspense.",
      },
    }),
  ]);

  // Create Categories
  const categories = await Promise.all([
    prisma.categories.create({
      data: { name: "Fiction", description: "Fictional literature" },
    }),
    prisma.categories.create({
      data: {
        name: "Fantasy",
        description: "Fantasy genre books",
        parent_id: null,
      },
    }),
    prisma.categories.create({
      data: {
        name: "Mystery",
        description: "Mystery and crime novels",
        parent_id: null,
      },
    }),
    prisma.categories.create({
      data: {
        name: "Horror",
        description: "Horror genre books",
        parent_id: null,
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
  ]);

  // Create Books (10 books)
  const books = await Promise.all([
    prisma.books.create({
      data: {
        name: "Harry Potter and the Philosopher's Stone",
        author_id: authors[0].id,
        price: 19.99,
        description: "The first book in the Harry Potter series.",
        publisher: "Bloomsbury",
        publication_year: 1997,
      },
    }),
    prisma.books.create({
      data: {
        name: "A Game of Thrones",
        author_id: authors[1].id,
        price: 24.99,
        description: "The first book in A Song of Ice and Fire series.",
        publisher: "Bantam Books",
        publication_year: 1996,
      },
    }),
    prisma.books.create({
      data: {
        name: "The Hobbit",
        author_id: authors[2].id,
        price: 15.99,
        description: "A fantasy adventure by J.R.R. Tolkien.",
        publisher: "Houghton Mifflin",
        publication_year: 1937,
      },
    }),
    prisma.books.create({
      data: {
        name: "Murder on the Orient Express",
        author_id: authors[3].id,
        price: 12.99,
        description: "A classic Hercule Poirot mystery.",
        publisher: "Collins Crime Club",
        publication_year: 1934,
      },
    }),
    prisma.books.create({
      data: {
        name: "The Shining",
        author_id: authors[4].id,
        price: 17.99,
        description: "A horror novel about a haunted hotel.",
        publisher: "Doubleday",
        publication_year: 1977,
      },
    }),
    prisma.books.create({
      data: {
        name: "Harry Potter and the Chamber of Secrets",
        author_id: authors[0].id,
        price: 20.99,
        description: "The second book in the Harry Potter series.",
        publisher: "Bloomsbury",
        publication_year: 1998,
      },
    }),
    prisma.books.create({
      data: {
        name: "A Clash of Kings",
        author_id: authors[1].id,
        price: 25.99,
        description: "The second book in A Song of Ice and Fire series.",
        publisher: "Bantam Books",
        publication_year: 1998,
      },
    }),
    prisma.books.create({
      data: {
        name: "The Lord of the Rings: The Fellowship of the Ring",
        author_id: authors[2].id,
        price: 18.99,
        description: "The first part of The Lord of the Rings trilogy.",
        publisher: "Houghton Mifflin",
        publication_year: 1954,
      },
    }),
    prisma.books.create({
      data: {
        name: "And Then There Were None",
        author_id: authors[3].id,
        price: 13.99,
        description: "A gripping mystery about ten strangers on an island.",
        publisher: "Collins Crime Club",
        publication_year: 1939,
      },
    }),
    prisma.books.create({
      data: {
        name: "It",
        author_id: authors[4].id,
        price: 22.99,
        description: "A horror novel about a shape-shifting entity.",
        publisher: "Viking Press",
        publication_year: 1986,
      },
    }),
  ]);

  // Create BookCategories
  await Promise.all([
    prisma.bookCategories.create({
      data: { book_id: books[0].id, category_id: categories[1].id },
    }),
    prisma.bookCategories.create({
      data: { book_id: books[1].id, category_id: categories[1].id },
    }),
    prisma.bookCategories.create({
      data: { book_id: books[2].id, category_id: categories[1].id },
    }),
    prisma.bookCategories.create({
      data: { book_id: books[3].id, category_id: categories[2].id },
    }),
    prisma.bookCategories.create({
      data: { book_id: books[4].id, category_id: categories[3].id },
    }),
    prisma.bookCategories.create({
      data: { book_id: books[5].id, category_id: categories[1].id },
    }),
    prisma.bookCategories.create({
      data: { book_id: books[6].id, category_id: categories[1].id },
    }),
    prisma.bookCategories.create({
      data: { book_id: books[7].id, category_id: categories[1].id },
    }),
    prisma.bookCategories.create({
      data: { book_id: books[8].id, category_id: categories[2].id },
    }),
    prisma.bookCategories.create({
      data: { book_id: books[9].id, category_id: categories[3].id },
    }),
  ]);

  // Create BookImages (local paths in /public/books)
  await Promise.all([
    prisma.bookImages.create({
      data: {
        book_id: books[0].id,
        image_url: "/books/book_1.jpg",
        is_primary: true,
      },
    }),
    prisma.bookImages.create({
      data: {
        book_id: books[1].id,
        image_url: "/books/book_2.jpg",
        is_primary: true,
      },
    }),
    prisma.bookImages.create({
      data: {
        book_id: books[2].id,
        image_url: "/books/book_3.jpg",
        is_primary: true,
      },
    }),
    prisma.bookImages.create({
      data: {
        book_id: books[3].id,
        image_url: "/books/book_4.jpg",
        is_primary: true,
      },
    }),
    prisma.bookImages.create({
      data: {
        book_id: books[4].id,
        image_url: "/books/book_5.jpg",
        is_primary: true,
      },
    }),
    prisma.bookImages.create({
      data: {
        book_id: books[5].id,
        image_url: "/books/book_6.jpg",
        is_primary: true,
      },
    }),
    prisma.bookImages.create({
      data: {
        book_id: books[6].id,
        image_url: "/books/book_7.jpg",
        is_primary: true,
      },
    }),
    prisma.bookImages.create({
      data: {
        book_id: books[7].id,
        image_url: "/books/book_8.jpg",
        is_primary: true,
      },
    }),
    prisma.bookImages.create({
      data: {
        book_id: books[8].id,
        image_url: "/books/book_9.jpg",
        is_primary: true,
      },
    }),
    prisma.bookImages.create({
      data: {
        book_id: books[9].id,
        image_url: "/books/book_10.jpg",
        is_primary: true,
      },
    }),
  ]);

  // Create Inventories
  await Promise.all(
    books.map((book, index) =>
      prisma.inventories.create({
        data: {
          book_id: book.id,
          quantity: 50 + index * 10,
        },
      })
    )
  );

  // Create Carts
  const carts = await Promise.all([
    prisma.carts.create({ data: { user_id: users[0].id, date: new Date() } }),
    prisma.carts.create({ data: { user_id: users[2].id, date: new Date() } }),
  ]);

  // Create CartItems
  await Promise.all([
    prisma.cartItems.create({
      data: { cart_id: carts[0].id, book_id: books[0].id, quantity: 2 },
    }),
    prisma.cartItems.create({
      data: { cart_id: carts[0].id, book_id: books[3].id, quantity: 1 },
    }),
    prisma.cartItems.create({
      data: { cart_id: carts[1].id, book_id: books[4].id, quantity: 1 },
    }),
  ]);

  // Create Reviews
  await Promise.all([
    prisma.reviews.create({
      data: {
        user_id: users[0].id,
        book_id: books[0].id,
        text: "Magical adventure!",
        rating: 5,
        date: new Date(),
      },
    }),
    prisma.reviews.create({
      data: {
        user_id: users[2].id,
        book_id: books[4].id,
        text: "Terrifyingly good!",
        rating: 4,
        date: new Date(),
      },
    }),
    prisma.reviews.create({
      data: {
        user_id: users[0].id,
        book_id: books[3].id,
        text: "Classic mystery!",
        rating: 5,
        date: new Date(),
      },
    }),
  ]);

  // Create Orders
  const orders = await Promise.all([
    prisma.orders.create({
      data: {
        user_id: users[0].id,
        total_price: 19.99 * 2 + 12.99,
        shipping_address: "123 Main St, Kyiv",
        payment_method: "Credit Card",
        status: "PENDING",
        date: new Date(),
      },
    }),
  ]);

  // Create OrderItems
  await Promise.all([
    prisma.orderItems.create({
      data: { order_id: orders[0].id, book_id: books[0].id, quantity: 2 },
    }),
    prisma.orderItems.create({
      data: { order_id: orders[0].id, book_id: books[3].id, quantity: 1 },
    }),
  ]);

  console.log("Database seeded with 10 books and local images successfully!");
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
