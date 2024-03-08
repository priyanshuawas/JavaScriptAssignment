import mysql.connector

class Database:
    def __init__(self):
        self.conn = mysql.connector.connect(
            host="localhost",
            user="root", # Change to your MySQL username
            # password="",# Change to your MySQL password
            database="todo_list" # Change to your database name
        )
        self.cursor = self.conn.cursor()
    def add_task(self, name, due_date, completed):
        sql = "INSERT INTO tasks (name, dueDate, completed) VALUES (%s, %s, %s)"
        val = (name, due_date, completed)
        self.cursor.execute(sql, val)
        self.conn.commit()
        return self.cursor.lastrowid
    def delete_task(self, task_id):
        sql = "DELETE FROM tasks WHERE id = %s"
        val = (task_id,)
        self.cursor.execute(sql, val)
        self.conn.commit()
        return self.cursor.rowcount
    def update_task(self, task_id, completed):
        sql = "UPDATE tasks SET completed = %s WHERE id = %s"
        val = (completed, task_id)
        self.cursor.execute(sql, val)
        self.conn.commit()
        return self.cursor.rowcount
    def clear_completed_tasks(self):
        sql = "DELETE FROM tasks WHERE completed = 1"
        self.cursor.execute(sql)
        self.conn.commit()
        return self.cursor.rowcount
    def get_all_tasks(self):
        sql = "SELECT * FROM tasks"
        self.cursor.execute(sql)
        return self.cursor.fetchall()
    def close_connection(self):
        self.cursor.close()
        self.conn.close()
