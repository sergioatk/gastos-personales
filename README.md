# gastos-personales

# 💰Personal Budget (gastos personales in spanish)

Welcome to an API for logging your income and expenses, this way you'll be able to track down your budgeting.

## How to install this project.
a) Download the project. 
b) Using a terminal, go to the project's folder and execute 'npm install'.
c) After all dependencies are installed correctly, run 'npm run dev'
d) Using you're favourite SQL Engine (I use PostgreSQL in my project) follow the guiding on path database/database.sql. 
e) Create a DB called 'expensetracking' and a table called 'budget'. DB user ishould be 'postgres' and DB password should be 'Nicecoding'.

## 💻 Initiate web client

You can use this API REST fully with the included web client, just point your browser to the base url.

## 🔗 How the API works.

(Providing you are running this on server localhost, port 3000)

These are the endpoints where you can request data from this API REST:

All routes initiate with 'base url/movements/...'

### Get all movements (both income and expenses)

e.g. http://localhost:3000/movements/

Here you'll get an array filled with all the movements logged in the DB, regardless if income / expense.

### Get movement by ID

e.g. http://localhost:3000/movements/id/3

Url structure is /movements/id/(actual id number)

Here you'll get details for movement with id 3 logged in the DB, or an error message if there is not one.

### Get movements by type (income or expense)

e.g. http://localhost:3000/movements/type/expense

Here you'll get an array filled with all movements with type expense.

e.g. http://localhost:3000/movements/type/income

Here you'll get an array filled with all movements with type income.

### Post a new movement

e.g. http://localhost:3000/movements/

Make a post request to the base url, the body must be JSON following the next structure: 

e.g. http://localhost:3000/movements/

e.g. October 12th 2020, gym membership, expense, $80

{
  "date": "2020-10-12",
  "type": "expense",
  "description": "gym memebership",
  "amount": "80"
}

### Edit a movement

Note that changing the type of movement is not possible. Once the movement is created as income or expense, it will remain this way until deleted.

Make a put request to base url/(actual id number), the body must be JSON following the next structure: 

e.g. http://localhost:3000/movements/203

Car payment was 200 but because a typo, the movement was created with ampount $2000.

{
  "date": "2021-02-27",
  "description": "car payment",
  "amount": "200"
}

### Deleting a movement

Make a delete request to base url/(actual id number) to delete the record.


