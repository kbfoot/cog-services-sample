# cog-services-sample

This sample demonstrates how to use Microsoft Cognitive Services in a NodeJS web app. You can find more documentation on the Vision APIs below.

Vision

From faces to feelings, allow your apps to understand images and video


o	Computer Vision https://www.microsoft.com/cognitive-services/en-us/computer-vision-api

o	Face https://www.microsoft.com/cognitive-services/en-us/face-api

o	Emotion https://www.microsoft.com/cognitive-services/en-us/emotion-api

o	Video https://www.microsoft.com/cognitive-services/en-us/video-api



Computer Vision API

It’s important to note here that it’s not client side running code, but light wrappers around the REST calls to make integration easy.  

A photo app would use this as a way to tag user photos and make it easier for users to search through their collections. 

Works really well on both indoor or outdoor images; it can recognize common household objects, and it can describe outdoor scenes. 

However, we did not train on aerial images (say from drones), or on many close ups (so pictures where we zoomed in extremely on the subject won't do well).

We also do really well recognizing celebrities (as long as most of the face is visible, and they were facing the camera). 



Face API

Some potential uses for this technology include facial login, photo tagging, and home monitoring. 
Or attribute detection to know age, gender, facial hair, etc.



Emotion API

Build an app that responds to moods. Using facial expressions, this cloud-based API can detect happiness, neutrality, sadness, contempt, anger, disgust, fear, and surprise. 

The AI understands these emotions based on universal facial expressions, and it functions cross-culturally, so your app will work around the world. 

Some use cases would be an advertising company wants to test user response to an ad, a tv studio wants to track responses to a pilot. 

