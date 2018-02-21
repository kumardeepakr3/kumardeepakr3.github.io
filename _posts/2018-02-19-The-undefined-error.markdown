---
layout: post
title:  "Javascript undefined Error"
date:   2018-02-19 12:30:37 +0530
categories: jekyll update liquid
---

Lately in one of the experience that I had was working on was throwing lot of errors on client side and the users were getting impacted. In a code base of ~5000 lines of javascript and heavy use of knockout js librarry, it was very difficult to debug the issue. The client logs only had one thing - ``` undefined doesn't have Id attribute ```.

The data received from the 3rd party providers was in JSON format and was received in parts over different polling requests. We aggregated the results on our end to finally render the experience.

```
aggregatedObj[field] = aggregatedObj[field].concat(previousObj[field]);
```

Before doing this operation, there was no check added for previousObj[field]. Hence when previousObj didn't have the ```field```, it resulted in undefined. This resulted in undefined getting added to the aggregatedObj. Adding just one check fixed almost most of the issues.