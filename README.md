# A Super Stupid Pairing Excercise

## Goals

The goal of this app is to explore a developer's communication style and problem solving style at a very basic level. Exploring the limits of a dev's knowledge is not the goal--don't overthink it, but rather focus on communication.

## Means

We're going to perform a pretty trivial task to ensure we can make it in well under the wire and to keep from getting bogged down in too many details. This course of action is inspired by a Joel Spolsky post on interviewing engineers (http://joelonsoftware.com/articles/GuerrillaInterviewing3.html), although not all of his suggestions are followed dogmatically.

### Requirements

Given a textarea, we need to simulate the posting of the contents of the text area on changes. The expectation is that we will attempt avoid overwhelming our pretend server with every keyup by filtering out for certain characters and events which actually trigger our fake post as well as limiting posts to no more than one per second. The fake post method will be supplied, and will simply log out the message intended for the fake server.

Taking a TDD approach is encouraged, but do not feel pressured to hit 100% coverage. We can make certain assumptions about reliability of javaScript and any used libraries, especially in regards to DOM interaction.

If the requirements don't make sense, please speak up and we can discuss why and what to do about it.

### Supplied Tools

Feel free to use these tools, bring in others, or not use tools as you see fit.

+  zepto
+  loDash
+  form-serialize
+  bacon
+  mocha
+  chai