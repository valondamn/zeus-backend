Here’s the documentation in English for both backend and frontend. You can simply copy and use it in your projects:

---

### Backend Documentation (`order-management-backend/README.md`)

```markdown
# Order Management Backend

## Description
The backend for the Order Management System, built with Node.js, Express, and MySQL.

---

## Installation

### Step 1: Clone the repository
```bash
git clone <repository-url>
cd backend
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Configure the database
1. Ensure that MySQL is installed and running.
2. Create the database and table:
   ```sql
   CREATE DATABASE orders_db;
   USE orders_db;

   CREATE TABLE orders (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       quantity INT NOT NULL,
       price_per_unit DECIMAL(10, 2) NOT NULL
   );
   ```

3. Update the database connection details in `index.js`:
   ```javascript
   const db = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: 'your_password',
       database: 'orders_db',
   });
   ```

### Step 4: Start the server
```bash
npm start
```

The server will be available at `http://localhost:3000`.

---

## API Endpoints
- **GET /orders**: Retrieve all orders
- **POST /orders**: Add a new order (body: `{ name, quantity, price_per_unit }`)
- **DELETE /orders/:id**: Delete an order by ID

---

## Notes
- Make sure the MySQL database is running and accessible.
- If the default port `3000` is occupied, you can change it in `index.js`:
   ```javascript
   app.listen(3000, () => {
       console.log('Server is running on port 3000');
   });
   ```

---

## Technologies
- **Backend**: Node.js, Express
- **Database**: MySQL
```
