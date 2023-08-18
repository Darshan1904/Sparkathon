from flask import Flask, render_template,request,jsonify
import tensorflow as tf 
import numpy as np 
from sklearn.preprocessing import StandardScaler
import joblib
import json 

app = Flask(__name__)
model = tf.keras.models.load_model('./spark.h5')

# Load the saved TargetVarScalerFit object
TargetVarScalerFit = joblib.load('./target_var_scaler_fit.pkl')

# Now you can use TargetVarScalerFit to inverse_transform your scaled target variable

PredictorScalerFit = joblib.load('./predictor_scaler_fit.pkl')


# Assuming you have already defined the PredictorScaler
# PredictorScaler = StandardScaler()

# Fit the PredictorScaler on your training data
# PredictorScalerFit = PredictorScaler.fit(X)

# Example array for standardization


# Transform the example array using the fitted PredictorScaler
# values_standardized = PredictorScalerFit.transform(values)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api', methods=['GET', 'POST'])
def api():
    # if(request.method=='POST'):
    payload = request.data.decode('utf-8')  # Decoding the bytes payload to string
    arguments = json.loads(payload)  # Parse the JSON string into a dictionary
        
    print(arguments)  # This will print the dictionary containing the extracted values
        
        # Extract values from the dictionary
    quality = int(arguments.get("Quality", 0))
    price = int(arguments.get("Price", 0))
    distance = int(arguments.get("Distance", 0))
    orders = int(arguments.get("Orders", 0))
    sales = int(arguments.get("Sales", 0))
    benefit = int(arguments.get("Benefit", 0))
    
    # TargetVarScaler=StandardScaler()
    values = np.array([quality,price,distance,orders,sales,benefit])
    
    values_standardized = PredictorScalerFit.transform(values.reshape((1,6)))
    # print(values_standardized)
    # values.reshape((6,))
    predictions = model.predict(values_standardized)
    
    
    # predictions = model.predict(values)
    predictions = TargetVarScalerFit.inverse_transform(predictions)
    response_data = {'message': 'request received', 'predictions': predictions.tolist()}
        
        # Return the dictionary as JSON response
    return jsonify(response_data)
    

if __name__ == '__main__':
    app.run(debug=True)
