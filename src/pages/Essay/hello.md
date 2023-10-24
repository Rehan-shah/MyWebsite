---
layout: "./../../layouts/blogPost.astro"
title: Fracitional derviatives of harmonic function
category: maths
---

Fracitional derviatives have been a integreal part in many ghinv such as modeling damping . How do we define fractional derviative ? Fractional derviates like 1/2 derviates can be said to have graph that is half way between the function and it's derviates this idea can be repeat for any number of fractional derviative not jusg have .
\
\
To find fracitional derviative the best way is to find the formula of derviative in nth terms . Due to the cycling nature of $ cos(\theta) $ and $ sin(\theta) $ it is easy to find the nth term . Another useful nature of harmonic function is that
$cos(\theta)$ can be express can $sin(\pi/2 + \theta)$ ,and $sin(\theta)$ can be express can as $cos(\pi/2 - \theta)$ .

So lets start by derving dervative of $sin(\theta)$

$$\frac{d}{dx} sin(\theta) = cos(\theta)$$
\
\
$$cos(\theta) = sin(\pi/2 - \theta)$$

now we can repate it can
\
\
$$\frac{d^2}{dx^2} = \frac{d}{dx} sin(\pi/2 + \theta) = cos(\theta + \pi/2)$$ \
\
$$cos(\theta + \pi/2) = sin(\theta + \pi) $$
\
\
Thus we can write it in nth form as seen by the patern and it will be
\
\
$$\frac{d^n}{dx^n} sin(\theta) = sin(\theta + \pi\frac{n}{2}) $$
\
\
Now lets generlize it

$$ \frac{d^n}{dx^n} bsin(a\theta + z ) = b \times a^nsin(a\theta + \pi\frac{n}{2} + z)$$
\
\
for cosine unforunitally it is not that simple .
As cosine devriatte is negative sin and dervitative of negative sin is negative cos , negative cos is postive sin and finally sin is cos. As every odd order derivative is negative thus we can add -1 rasied to the n order derivate .
A important property is
$$ sin(\theta) = cos(\theta - pi\*n/2) $$

thus we can say

$$\frac{d^n}{dx^n} cos(\theta) = (-1)^n * cos(\theta - pi*n/2) $$

Now lets generlize this
$$\frac{d^n}{dx^n} bcos(a*\theta + z) = (-1)^n * b*a^n*cos(a\theta - pi*n/2 + z) $$

This gives a interesting half order derivaitve of cos(x) , the the derivative exist in imaginary plane making it
$$ i*cos(\theta-pi*1/4) $$
