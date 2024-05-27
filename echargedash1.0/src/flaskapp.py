from flask import Flask, render_template
import tkinter as tk

app = Flask(__name__)

@app.route('/')
def index():
    # Create the GUI program
    root = tk.Tk()
    root.title("Python React GUI")

    # Function to increment count when button is clicked
    def increment_count():
        button.config(text=str(int(button.cget("text")) + 1))

    # Create and place the header label
    header_label = tk.Label(root, text="Hello, welcome to Python Test", font=("Arial", 18))
    header_label.pack(pady=20)

    # Create and place the button
    button = tk.Button(root, text="0", command=increment_count)
    button.pack()

    root.mainloop()

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
