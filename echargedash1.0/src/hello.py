import requests
import pandas as pd
import panel as pn
import hvplot.pandas
from bokeh.palettes import Category20_16



def fetch_data_from_api(api_url):
    try:
        response = requests.get(api_url)
        response.raise_for_status()  # Raise an exception for bad status codes
        data = response.json()  # Convert JSON response to Python dictionary
        return data
    except requests.exceptions.RequestException as e:
        # print(f"Error fetching data: {e}")
        return None

def create_dataframe_from_json(json_data):
    if json_data is None:
        return None
    try:
        df = pd.DataFrame(json_data)  # Convert dictionary to DataFrame
        return df
    except Exception as e:
        # print(f"Error creating DataFrame: {e}")
        return None

# Example API URL
api_url = "http://localhost:3000/api/data"

# Fetch data from API
json_data = fetch_data_from_api(api_url)

# Create DataFrame from JSON data
df = create_dataframe_from_json(json_data)

# if df is not None:
#     # print("DataFrame created successfully.")
#     # print(df.head())  # Print first few rows of DataFrame
# else:
#     # print("Failed to create DataFrame.")






# Assuming df is your DataFrame
# Convert 'Doe' column to datetime if not already in datetime format
df['Doe'] = pd.to_datetime(df['Doe'])

# Sort the DataFrame by 'Doe' column if it's not sorted already
df = df.sort_values(by='Doe')

# Create a dropdown widget for vehicle number selection
vehicle_dropdown = pn.widgets.Select(name='Select VehicleNo', options=df['vehicleNo'].unique().tolist())

# Create a calendar widget for selecting date and time range
calendar = pn.widgets.DateRangeSlider(name='Select Date Range', start=df['Doe'].min(), end=df['Doe'].max())

# Define colors for each line
colors = Category20_16

# Create a master graph of all voltages
master_plot = df.hvplot.line(
    x='Doe', y=[f'cell_voltage_{str(i).zfill(2)}' for i in range(1, 17)], line_width=2, xlabel='Date and Time', ylabel='Cell Voltage', title='All Cell Voltages', legend='top_left', width=1200, height=600
)

# Create a layout for individual voltage graphs
voltage_plots = []
for i in range(1, 17):
    voltage_col = f'cell_voltage_{str(i).zfill(2)}'
    p = df.hvplot.line(
        x='Doe', y=voltage_col, line_width=2, color=colors[i-1], xlabel='Date and Time', ylabel='Cell Voltage', title=f'Voltage {i}', legend=False, width=400, height=400
    )
    voltage_plots.append(p)

# Create a layout for the voltage plots grid
grid_layout = pn.GridBox(
    *voltage_plots, ncols=3, width_policy='max', height_policy='max', css_classes=['scrollable-grid']
)

# Define a function to update plots based on dropdown and calendar selection
def update_plots(vehicleNo, date_range):
    selected_df = df[df['vehicleNo'] == vehicleNo]
    if date_range:
        start_date, end_date = date_range
        selected_df = selected_df[(selected_df['Doe'] >= start_date) & (selected_df['Doe'] <= end_date)]
    master_plot.data = selected_df.hvplot.line(
        x='Doe', y=[f'cell_voltage_{str(i).zfill(2)}' for i in range(1, 17)], line_width=2, xlabel='Date and Time', ylabel='Cell Voltage', title='All Cell Voltages', legend='top_left', width=1200, height=600
    ).data

# Link widgets to update function
vehicle_dropdown.link(update_plots, value='default')
calendar.link(update_plots, value=(df['Doe'].min(), df['Doe'].max()))

# Create a dashboard layout
dashboard = pn.Column(
    pn.Row(vehicle_dropdown, calendar),
    master_plot,
    grid_layout
)

# Serve the dashboard on a new webpage
dashboard.show()






