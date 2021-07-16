#!/usr/bin/env python
# coding: utf-8
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
import pickle

df = pd.read_csv("dataset\data_faculty.csv")
df = df[df.endcode.notnull()]
df.columns

df = df.drop(['participant', 'tipi:1', 'tipi:2', 'tipi:3', 'tipi:4', 'tipi:5',
       'tipi:6', 'tipi:7', 'tipi:8', 'tipi:9', 'tipi:10', 'tipi:11', 'tipi:12',
       'tipi:13', 'tipi:14', 'tipi:15', 'tipi:16', 'tipi:17', 'tipi:18',
       'tipi:19', 'tipi:20', 'tipi:21', 'tipi:22', 'tipi:23', 'tipi:24',
       'tipi:25', 'tipi:26', 'tipi:27', 'tipi:28', 'tipi:29', 'tipi:30',
       'tipi:31', 'tipi:32', 'tipi:33', 'tipi:34', 'tipi:35', 'tipi:36',
       'tipi:37', 'tipi:38', 'tipi:39', 'tipi:40', 'tipi:41', 'tipi:42',
       'tipi:43', 'tipi:44', 'tipi:45', 'tipi:46', 'tipi:47', 'tipi:48',
       'tipi:49', 'tipi:50',  'job:1', 'job:2', 'job:3', 'age:1', 'gender:1',
              'endcode', 'ques10:1', 'ques10:2', 'ques10:3', 'ques10:4', 'ques10:5', 'ques10:6', 'ques10:7',
               'ques10:8', 'ques10:9', 'ques10:10', 'K_exp:1', 'nback2:1', 'TIME_start', 'TIME_end',
       'TIME_total'], axis = 1)
df = df[df['resall'].notnull()]
df = df[df['nonverbal_score:1'].notnull()]


#created to variable one for big five(evident) and other for cognition evident 
df_bigfive = df.filter(['openness:1', 'extraversion:1', 'agreeableness:1',
       'conscientiousness:1', 'emotionally_stable:1'], axis=1)
df_bigfive
df = df.drop(['openness:1', 'extraversion:1', 'agreeableness:1',
       'conscientiousness:1', 'emotionally_stable:1'], axis = 1)


#creating required parameter data for n back test from "resall"
df['commission'] = df['resall'] / 10000
df['resall'] = df['resall'].apply(lambda x: (x/100)%100)
df = df.astype({'resall': 'int32'})

df = df.astype({'commission': 'int32'})
df_cogn = df.filter(['nonverbal_score:1', 'RTSimon', 'resall', 'omission'], axis=1)


#correlation values between the three cognitive ability parameter
df_cogn.corr()
df_corr = df.corr()
high_correlation = df_corr.abs()
high_corr_unstack = high_correlation.unstack()
high_corr_sorted = high_corr_unstack.sort_values(ascending=False)


#correlation values between the five personality parameter
high_corr_sorted[8:]
df_bigfive.corr()

df


#linear standardisation
X = StandardScaler().fit_transform(df)


#random weight assigned
for rowv in X:
  rowv[1]=2.0*rowv[1]
  rowv[0]=0.5*rowv[0]


#applying k_mean clustering for 2 target class classes
k_means = KMeans(n_clusters=2, random_state=0).fit(X)
pickle.dump(k_means, open('model.pkl','wb'))
model = pickle.load(open('model.pkl','rb'))

df['Cluster'] = k_means.labels_.tolist()
df

k_means.cluster_centers_


# identifying good and bad cluster
res0=0;
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

# get_ipython().run_line_magic('matplotlib', 'inline')
# import matplotlib.pyplot as plt
# from mpl_toolkits.mplot3d import Axes3D
# import seaborn as sns
# import numpy as np

# result = pd.concat([df, df_bigfive], axis=1)

# # finding mean big five score for each cluster
# big1=[0.0,0.0,0.0,0.0,0.0]
# big0=[0.0,0.0,0.0,0.0,0.0]
# num0=0.0
# num1=0.0
# for row in result.itertuples():
#   if(row[5]==1.0):
#     for i in range(5):
#       big1[i]+=row[i+6]
#       num1=num1+1
#   else:
#     for i in range(5):
#       big0[i]+=row[i+6]
#       num0=num0+1
# for i in range(5):
#   big0[i]=big0[i]/num0
#   big1[i]=big1[i]/num1



# # creating "csvresult" that holds candidates result after clustering
# csvresult = pd.concat([df_bigfive,df], axis=1)
# resstr=[]
# for i in range (0, k_means.labels_.size):
#   resstr.append(csvf[k_means.labels_[i]])
# csvresult["Cluster"]=resstr


# #storing it
# #filecsv=csvresult.to_csv('/content/drive/My Drive/psytool data and analysis/final_csv_overall.csv', index=False, header=True)

# prol=['openness:1', 'extraversion:1', 'agreeableness:1',
#        'conscientiousness:1', 'emotionally_stable:1']
# print(csvf[0])
# print(csvf[1])
# for i in range(5):
#   print(prol[i]," ",big0[i])
# for i in range(5):
#   print(prol[i]," ",big1[i])
  


# # In[ ]:


# #ploting the result for simon task
# x = np.array(df['nonverbal_score:1'])
# y = np.array(df['RTSimon'])
# z = np.array(df['resall'])


#colour = np.array(df['Cluster'])



# fig = plt.figure(figsize = (8, 5))
# ax = plt.axes(projection ="3d")
# ax.scatter3D(x, y, z, color = "Blue")
# plt.show()


#plt.figure(figsize = (3,3))
#sns_plot = sns.pairplot(df, hue='Cluster', height=2.5)

#sns_plot.savefig('pairplot.jpg')





