from flask import Flask, render_template,request
import tensorflow as tf 
import numpy as np 
from sklearn.preprocessing import StandardScaler
import joblib


# Load the saved PredictorScalerFit object


# Now you can use PredictorScalerFit to transform new data


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
    print('request received')
    # TargetVarScaler=StandardScaler()
    values = np.array([9,4596,31,4398,642,11])
    
    values_standardized = PredictorScalerFit.transform(values.reshape((1,6)))
    # print(values_standardized)
    # values.reshape((6,))
    predictions = model.predict(values_standardized)
    
    
    # predictions = model.predict(values)
    predictions = TargetVarScalerFit.inverse_transform(predictions)
    print(predictions)
    return {'message': 1}

if __name__ == '__main__':
    app.run(debug=True)
