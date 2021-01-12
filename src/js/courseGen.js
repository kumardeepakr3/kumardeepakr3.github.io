var coursesList = `Programming Languages Part A	Coursera	Dec 2020	Long		
Programming Languages Part B	Coursera	Dec 2020	Long		
C++ 17: Beyond the basics	Pluralsight	Nov 2020	Long		
Accessibility for web design	Linkedin Learning	Oct 2020			
Async programming in c#	Linkedin Learning	Oct 2020			
C++ Pointers	Linkedin Learning	Oct 2020			
Parallel and Concurrent programming with c++ part 1	Linkedin Learning	Oct 2020	Long		
Parallel and Concurrent programming with c++ part 2	Linkedin Learning	Oct 2020	Long		
npm and Node package manager	Linkedin Learning	Sep 2020			
Honest conversation with boss	Linkedin Learning	Sep 2020			
ASP.NET Core Internationalization Deep Dive	Pluralsight	Aug 2020	Long		
Building resilience	Linkedin Learning	Aug 2020			
Increase visibility to advance career	Linkedin Learning	Aug 2020			
Stanford's short course on breast feeding	Coursera	Jul 2020			
Stories of infection	Coursera	June 2020	Long		
C# Delegates, Events and Lambdas	Linkedin Learning	Jun 2020			
Negotiating compensation package	Linkedin Learning	Jun 2020			
Photoshop: Adding style to a studio portrait	Linkedin Learning	Jun 2020			
Introduction to personal branding	Coursera	May 2020			
Azure admin essential training	Linkedin Learning	Apr 2020			
So you think you can tango	Coursera	Mar 2020			
Fashion as Design	Coursera	Mar 2020	Long		
UML Mini Course	Lagunita: Stanford Online	Mar 2020			
OLAP Mini Course	Lagunita: Stanford Online	Mar 2020			
Relational Design Theory	Lagunita: Stanford Online	Feb 2020		https://lagunita.stanford.edu/courses/DB/RD/SelfPaced/course/	
Getting started with Git	Pluralsight	Feb 2020			
Git: The big picture	Pluralsight	Feb 2020			
ASP.NET MVC5 Fundamentals	Pluralsight	Jan 2020			
Learning portrait photography	Linkedin Learning	Jan 2020			
Lightroom for faces	Linkedin Learning	Jan 2020			
Lightroom: get professional results	Linkedin Learning	Jan 2020			
SQL Mini Course	Lagunita: Stanford Online	Nov 2019		https://lagunita.stanford.edu/courses/DB/SQL/SelfPaced/course/	
ASP.NET Core 3.0: The MVC Request Life Cycle	Pluralsight	Oct 2019		https://www.pluralsight.com/courses/aspnet-core-3-mvc-request-life-cycle	
Fibonacci Numbers and the Golden Ratio	Coursera	Oct 2019		https://www.coursera.org/learn/fibonacci?	
Relational Algebra	Lagunita: Stanford Online	Sep 2019		https://lagunita.stanford.edu/courses/DB/RA/SelfPaced/course/	
Introduction to Reproduction	Coursera	Jul 2019		https://www.coursera.org/learn/reproductive-health?	
How Git Works	Pluralsight	Jul 2019		https://www.pluralsight.com/courses/how-git-works	
Mastering Git	Pluralsight	Jul 2019		https://www.pluralsight.com/courses/mastering-git	
Successful Career Development	Coursera	Mar 2019		https://www.coursera.org/learn/career-advancement?	
Learning Ecmascript 6	Linkedin Learning	Feb 2019		https://www.linkedin.com/learning/learning-ecmascript-6	
Learning Webpack 1	Linkedin Learning	Feb 2019		https://www.linkedin.com/learning/learning-webpack-1	
Webpack for React Applications	Linkedin Learning	Feb 2019		https://www.linkedin.com/learning/webpack-for-react-applications	
Learning Redux	Linkedin Learning	Jan 2019		https://www.linkedin.com/learning/learning-redux	
C# Object Oriented Programming Tips and Tricks	Linkedin Learning	Dec 2018		https://www.linkedin.com/learning/c-sharp-object-oriented-programming-tips-and-tricks	
Sit Less, Get Active	Coursera	Dec 2018		https://www.coursera.org/learn/get-active?	
Introduction to Mathematical Thinking	Coursera	Dec 2018		https://www.coursera.org/learn/mathematical-thinking	
Human Trafficking Awareness for the General Public	Lagunita: Stanford Online	Dec 2018		https://lagunita.stanford.edu/courses/course-v1:HumanitiesSciences+HumTrfkgAwrns+SelfPaced/course/	
Learning How to Learn: Powerful mental tools to help you master tough subjects	Coursera	Oct 2018		https://www.coursera.org/learn/learning-how-to-learn	
Threading in C#	Linkedin Learning	Jun 2018		https://www.linkedin.com/learning/threading-in-c-sharp	
Combinatorics and Probability	Coursera	Dec 2017		https://www.coursera.org/learn/combinatorics?	
Mathematical Thinking in Computer Science	Coursera	Dec 2017		https://www.coursera.org/learn/what-is-a-proof?	
Build a Modern Computer from First Principles: From Nand to Tetris (Project-Centered Course)	Coursera	Nov 2017		https://www.coursera.org/learn/build-a-computer	
An Intuitive Introduction to Probability	Coursera	Nov 2017		https://www.coursera.org/learn/introductiontoprobability	
XML Data	Lagunita: Stanford Online	Oct 2017		https://lagunita.stanford.edu/courses/DB/XML/SelfPaced/course/	
JSON Data	Lagunita: Stanford Online	Oct 2017		https://lagunita.stanford.edu/courses/DB/JSON/SelfPaced/course/	
Work Smarter, Not Harder: Time Management for Personal & Professional Productivity	Coursera	Sep 2017		https://www.coursera.org/learn/work-smarter-not-harder	
Stanford Introduction to Food and Health	Coursera	Sep 2017		https://www.coursera.org/learn/food-and-health`;

var courseListSplit = coursesList.split("\n");
var t = "";    
courseListSplit.forEach( x => {
    var spl = x.split("\t");
    t += "\n" + "<li>" + spl[0] + "   " + "<i>(" + spl[1] + " " + spl[2] + ")</i>" + "</li>";
});
console.log(t);