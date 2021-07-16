from flask import Flask, render_template, url_for, request, redirect
import pickle

k_means = pickle.load(open('model.pkl','rb'))

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST', 'GET'])
def predict():
    int_features = [float(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = k_means.cluster_centers_
    res0=0
    for j in range(0,3):
      if(k_means.cluster_centers_[0][j]>k_means.cluster_centers_[1][j]):
        res0+=1
      else:
        res0-=1
    if(k_means.cluster_centers_[0][3]>k_means.cluster_centers_[1][3]):
      res0-=1
    else:
      res0+=1
    csvf=["High","Low"]
    if(res0<0):
      csvf=["Low","High"]
    k_means.predict
    output = round(prediction[0], 2) 
    return render_template('index.html', prediction_text='Cognitive skill level is:{}'.format(output))


if __name__ == "__main__":
    app.run(debug=True)