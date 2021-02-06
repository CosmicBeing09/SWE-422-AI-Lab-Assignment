# Text Suggestion System
Naive Bayes is a probabilistic machine learning algorithm that can be used in a wide variety of classification tasks. 

The name `naive` is used because it assumes the features that go into the model is independent of each other. That is changing the value of one feature, does not directly influence or change the value of any of the other features used in the algorithm.

In this problem we used underlying conditional probabilistic model of Bayesian theorem with tri-gram in order to build a text suggesting system. 


## Mathematical Notation 

If we are given a word then we can count the probability of the next word using the conditional probabilistic model.

For one given word or uni-gram: 

>P(word) = no of occurrence of the word  / total no of word


For two given word or bi-gram: 

>P(Next | Prev1, Prev2)  = P(Prev1 | Next ) *P(Prev2 | Next ) * P(Next)


For two given word or tri-gram: 

>P(Next | Prev1, Prev2, Prev3) \\ = P(Prev1 | Next ) *P(Prev2 | Next ) *P(Prev3 | Next )* P(Next)
