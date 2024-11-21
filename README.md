

### Backend Documentation (`order-management-backend/README.md`)

```markdown
# Order Management Backend

## Description
The backend for the Order Management System, built with Node.js, Express, and MySQL.

---

## Prerequisites

Before you start, ensure the following are installed:
1. **Node.js** (v14 or later)
2. **MySQL** (v8 or later)

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

---

## MySQL Setup

### Step 1: Start MySQL Server
1. If you're using MySQL locally:
   - Start the MySQL service:
     ```bash
     sudo service mysql start  # For Linux
     brew services start mysql # For macOS
     ```

2. If you're using MySQL in Docker:
   - Run the following command to start a MySQL container:
     ```bash
     docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=your_password -p 3306:3306 -d mysql:latest
     ```

### Step 2: Access MySQL
1. If MySQL is installed locally:
   ```bash
   mysql -u root -p
   ```
2. If using Docker:
   ```bash
   docker exec -it mysql-container mysql -u root -p
   ```

   Enter your password when prompted.

### Step 3: Create the Database and Table
Run the following SQL commands to create the database and table:
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

---

## Configuration

1. Open `index.js` and update the MySQL connection details:
   ```javascript
   const db = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: 'your_password',
       database: 'orders_db',
   });
   ```

2. If you're using Docker, ensure that the `host` is set to `localhost` and the MySQL container is running.

---

## Start the Backend

### Step 1: Start the Server
Run the following command to start the server:
```bash
npm start
```

The server will be available at `http://localhost:3000`.

---

## API Endpoints

### Available Endpoints
- `GET /orders` — Retrieve all orders
- `POST /orders` — Add a new order
- `DELETE /orders/:id` — Delete an order by ID

### Sample Payload for `POST /orders`
```json
{
    "name": "Sample Order",
    "quantity": 5,
    "price_per_unit": 10.99
}
```

---

## Notes

1. If the default port `3000` is occupied, you can change it in `index.js`:
   ```javascript
   app.listen(3000, () => {
       console.log('Server is running on port 3000');
   });
   ```

2. Ensure MySQL is running before starting the server.

---

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MySQL
