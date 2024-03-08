# import mysql.connector

# # Connect to MySQL database
# def connect_to_db():
#     return mysql.connector.connect(
#         host="localhost",
#         user="root",  # Your MySQL username
#         # password="",  # Your MySQL password
#         database="tododb"  # Name of the database
#     )

# # Create table for tasks
# def create_task_table(cursor):
#     cursor.execute("""
#         CREATE TABLE IF NOT EXISTS tasks (
#             id INT AUTO_INCREMENT PRIMARY KEY,
#             name VARCHAR(255) NOT NULL,
#             due_date DATE NOT NULL,
#             status ENUM('todo', 'inprogress', 'completed') NOT NULL
#         )
#     """)

# # Insert a task into the tasks table
# def insert_task(cursor, name, due_date, status):
#     cursor.execute("""
#         INSERT INTO tasks (name, due_date, status)
#         VALUES (%s, %s, %s)
#     """, (name, due_date, status))

# # Update a task in the tasks table
# def update_task(cursor, task_id, name, due_date, status):
#     cursor.execute("""
#         UPDATE tasks
#         SET name = %s, due_date = %s, status = %s
#         WHERE id = %s
#     """, (name, due_date, status, task_id))

# # if __name__ == "__main__":
# db_connection = connect_to_db()
# db_cursor = db_connection.cursor()
# create_task_table(db_cursor)

# # Inserting tasks
# insert_task(db_cursor, "Task 1", "2024-03-10", "todo")
# insert_task(db_cursor, "Task 2", "2024-03-10", "todo")
# insert_task(db_cursor, "Task 3", "2024-03-10", "todo")

# # Updating a task
# update_task(db_cursor, 1, "Updated Task 1", "2024-03-11", "inprogress")

# # Commit changes and close connection
# db_connection.commit()
# db_connection.close()
# import mysql.connector

# # Connect to MySQL database
# def connect_to_db():
#     return mysql.connector.connect(
#         host="localhost",
#         user="root",  # Your MySQL username
#         # password="",  # Your MySQL password
#         database="tododb"  # Name of the database
#     )

# # Create table for tasks
# def create_task_table(cursor):
#     cursor.execute("""
#         CREATE TABLE IF NOT EXISTS tasks (
#             id INT AUTO_INCREMENT PRIMARY KEY,
#             name VARCHAR(255) NOT NULL,
#             due_date DATE NOT NULL,
#             description TEXT,
#             status ENUM('todo', 'inprogress', 'completed') NOT NULL
#         )
#     """)

# # Insert a task into the tasks table
# def insert_task(cursor, name, due_date, description, status):
#     cursor.execute("""
#         INSERT INTO tasks (name, due_date, description, status)
#         VALUES (%s, %s, %s, %s)
#     """, (name, due_date, description, status))

# # Update a task in the tasks table
# def update_task(cursor, task_id, name, due_date, description, status):
#     cursor.execute("""
#         UPDATE tasks
#         SET name = %s, due_date = %s, description = %s, status = %s
#         WHERE id = %s
#     """, (name, due_date, description, status, task_id))

# if __name__ == "__main__":
#     db_connection = connect_to_db()
#     db_cursor = db_connection.cursor()
#     create_task_table(db_cursor)

#     # Inserting tasks
#     insert_task(db_cursor, "Task 1", "2024-03-10", "Description for Task 1", "todo")
#     insert_task(db_cursor, "Task 2", "2024-03-10", "Description for Task 2", "todo")
#     insert_task(db_cursor, "Task 3", "2024-03-10", "Description for Task 3", "todo")

#     # Updating a task
#     update_task(db_cursor, 1, "Updated Task 1", "2024-03-11", "Updated description for Task 1", "inprogress")

#     # Commit changes and close connection
#     db_connection.commit()
#     db_connection.close()
import http.server
import json
import mysql.connector
from urllib.parse import urlparse, parse_qs

# Connect to MySQL database
def connect_to_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",  # Your MySQL username
        # password="",  # Your MySQL password
        database="tododb"  # Name of the database
    )

# Create table for tasks
def create_task_table(cursor):
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS tasks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            due_date DATE NOT NULL,
            description TEXT,
            status ENUM('todo', 'inprogress', 'completed') NOT NULL
        )
    """)

# Insert a task into the tasks table
def insert_task(cursor, name, due_date, description, status):
    cursor.execute("""
        INSERT INTO tasks (name, due_date, description, status)
        VALUES (%s, %s, %s, %s)
    """, (name, due_date, description, status))

# Update a task in the tasks table
def update_task(cursor, task_id, name, due_date, description, status):
    cursor.execute("""
        UPDATE tasks
        SET name = %s, due_date = %s, description = %s, status = %s
        WHERE id = %s
    """, (name, due_date, description, status, task_id))

class TodoRequestHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_url = urlparse(self.path)
        path = parsed_url.path
        query_params = parse_qs(parsed_url.query)

        if path == '/get_tasks':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()

            db_connection = connect_to_db()
            db_cursor = db_connection.cursor()

            db_cursor.execute("SELECT * FROM tasks")
            tasks = db_cursor.fetchall()

            db_connection.close()

            self.wfile.write(json.dumps(tasks).encode())

        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'404 Not Found')

if __name__ == "__main__":
    db_connection = connect_to_db()
    db_cursor = db_connection.cursor()
    create_task_table(db_cursor)

    # Inserting tasks
    insert_task(db_cursor, "Task 1", "2024-03-10", "Description for Task 1", "todo")
    insert_task(db_cursor, "Task 2", "2024-03-10", "Description for Task 2", "todo")
    insert_task(db_cursor, "Task 3", "2024-03-10", "Description for Task 3", "todo")

    # Updating a task
    update_task(db_cursor, 1, "Updated Task 1", "2024-03-11", "Updated description for Task 1", "inprogress")

    # Commit changes and close connection
    db_connection.commit()
    db_connection.close()

    server_address = ('', 8000)
    httpd = http.server.HTTPServer(server_address, TodoRequestHandler)
    print('Server running at localhost:8000...')
    httpd.serve_forever()