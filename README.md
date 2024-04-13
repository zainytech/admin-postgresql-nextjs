# PostgreSQL with Prisma
Made this beginner project to learn how to perform basic CRUD operation in a relational database using admin panel.

### 🔗The admin panel can be accessed on localhost:3000/admin

## 🚶‍♀️Working
In this project only admin can decide which content should be shown on homepage of this website.
The content can be newly created, updated, deleted, or chosen to show on homepage only from admin panel.

## 🧰Tech Stack
- Built this project in `NextJS`
- Used `PostgreSQL` as my relational database.
- Used `Prisma` to write my SQL Queries for connecting with database.
- Used `TypeScript` for more maintainable development.
- Used `Custom Middleware` for secure authentication for Admin Panel.

## Process
- Create a nextjs project with typescript and tailwind
- install tsnode using command npm i --save-dev ts-node and prisma using command npm install prisma --save-dev
- now initialize prisma with a database such as postgreSQL or SQLite using command npx prisma init --dataSource-provider postgresql
- Now create custom models in schema.prisma file according to your choice.
- Now migrate your data using command npx prisma migrate dev --name init
- Now create a seperate folder called db outside app folder having file named db.ts containing code from official doc of prisma - with subtopic nextjs.
- Then create the frontend for admin dashborad by makin seprate folder of admin in app folder.
- To define the actions we should make a sepearte folder _actions with file action.tsx because all the actions to connect with prisma models should be on server side not client side as frontend can be on client side due to interactivity of users its better to call actions from another "use server" file.
- Now we will create a separate form page which can be accessed from homepage of admin using create or update buttons.
- For createing new data from formdata into your database we need a validation check of form entriens that are in form of an object i.e formData, for doing this we will use zod.
- we will install zod using command `npm i zod`.
- Then we will define schema for formData in actions file to send data to databse after validation test right from there.
- I made validation test only for strings but if you want to add number in database then you need to coarce the string to a number cuz the data from form is coming in steing form even any number or charachter is beung added, to achieve this you can use this LOC as price: z.coerce.number().int().min(1).
- Now create your own choice of action functions in actions file and all set.
