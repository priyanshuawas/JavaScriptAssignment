# import mysql.connector

# class Database:
#     def __init__(self):
#         self.conn = mysql.connector.connect(
#             host="localhost",
#             user="root", # Change to your MySQL username
#             # password="",# Change to your MySQL password
#             database="todo_list" # Change to your database name
#         )
#         self.cursor = self.conn.cursor()
#     def add_task(self, name, due_date, completed):
#         sql = "INSERT INTO tasks (name, dueDate, completed) VALUES (%s, %s, %s)"
#         val = (name, due_date, completed)
#         self.cursor.execute(sql, val)
#         self.conn.commit()
#         return self.cursor.lastrowid
#     def delete_task(self, task_id):
#         sql = "DELETE FROM tasks WHERE id = %s"
#         val = (task_id,)
#         self.cursor.execute(sql, val)
#         self.conn.commit()
#         return self.cursor.rowcount
#     def update_task(self, task_id, completed):
#         sql = "UPDATE tasks SET completed = %s WHERE id = %s"
#         val = (completed, task_id)
#         self.cursor.execute(sql, val)
#         self.conn.commit()
#         return self.cursor.rowcount
#     def clear_completed_tasks(self):
#         sql = "DELETE FROM tasks WHERE completed = 1"
#         self.cursor.execute(sql)
#         self.conn.commit()
#         return self.cursor.rowcount
#     def get_all_tasks(self):
#         sql = "SELECT * FROM tasks"
#         self.cursor.execute(sql)
#         return self.cursor.fetchall()
#     def close_connection(self):
#         self.cursor.close()
#         self.conn.close()
import mysql.connector

# Connect to MySQL database
def connect_to_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",  # Your MySQL username  # Your MySQL password
        database="tododb"  # Name of the database
    )

# Create table for tasks
def create_task_table(cursor):
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS tasks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            due_date DATE NOT NULL,
            status ENUM('todo', 'inprogress', 'completed') NOT NULL
        )
    """)

# Insert a task into the tasks table
def insert_task(cursor, name, due_date, status):
    cursor.execute("""
        INSERT INTO tasks (name, due_date, status)
        VALUES (%s, %s, %s)
    """, (name, due_date, status))

# if __name__ == "__main__":
db_connection = connect_to_db()
db_cursor = db_connection.cursor()
create_task_table(db_cursor)
insert_task(db_cursor, "Task 1", "2024-03-10", "todo")
# Commit changes and close connection
db_connection.commit()
db_connection.close()