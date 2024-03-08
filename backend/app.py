
from asyncio import DatagramProtocol
import dataclasses
import http.server
import json
from flask import app, appcontext_popped, jsonify, request
from flask_cors import cross_origin
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
    @app.route('/fetch',methods=['GET'])
    @cross_origin(origins=[u"*"])
    def fetch_data():
        try:
            start = int(request.args.get('start', 0))  
            limit = int(request.args.get('no_of_products', 10))  
            cols=[x for x in ['id','title', 'description', 'status','start_date','start_time','end_time','end_date']]
            res=[dict(zip(cols,row)) for row in DatagramProtocol]
            if dataclasses:
                return jsonify({'data':res}),200
            else:
                return jsonify({"error":"error"}),201
        except Exception as e:
            print(f"An error occurred: {e}")
        return jsonify({'error': 'An internal server error occurred'}), 500


    @appcontext_popped.route('/insert', methods=['POST'])
    @cross_origin(origins=[u"*"])
    def insert_data():
        try:
            data = request.json
            if data:
                crm_db.insert_data("todos", ['id','title', 'description', 'status','start_date','start_time','end_time','end_date'], [data])
                return jsonify({'message': 'Data inserted successfully'}),200
            else:
                return jsonify({'error': 'No data provided'})
        except Exception as e:
        # Log the exception for debugging purposes
            print(f"An error occurred: {e}")
        # Return an error response
        return jsonify({'error': 'An internal server error occurred'}), 500



    @app.route('/delete/<int:id>', methods=['DELETE'])
    @cross_origin(origins=[u"*"])
    def delete_data(id):
        crm_db.delete_data("todos", f"id = {id}")
        return jsonify({'message': f'Data with ID {id} deleted successfully'})

    @app.route('/todos/total', methods=['GET'])
    @cross_origin(origins=[u"*"])
    def getTotalNoofTasks():
        return crm_db.getTotalNoofTasks()

    update_task(db_cursor, 1, "Updated Task 1", "2024-03-11", "Updated description for Task 1", "inprogress")

    db_connection.commit()
    db_connection.close()

    server_address = ('', 8000)
    httpd = http.server.HTTPServer(server_address, TodoRequestHandler)
    print('Server running at localhost:8000...')
    httpd.serve_forever()