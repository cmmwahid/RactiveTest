Ractive Progress Bars
=====================


The following requirements were met:
====================================

1. Behaviours 
2. Multiple bars
3. One set of controls that can control each bar on the fly
4. Can't go under 0
5. Can go over 100, but limit the bar itself and change its colour
6. Display usage amount, centred
7. Write tests for your code (hint: TDD strongly preferred)
8. Implement a responsive solution: testing it on mobile, tablet, etc. Getting it working nicely.
9. Animate the bar change, make sure it works well when you tap buttons quickly.
10. Publish your code online somewhere: GitHub or something like plnkr.co, jsfiddle.net


Access information: 
===================

1. You can access the solution from the Github repository at: https://github.com/cmmwahid/RactiveTest
2. You can also access the solution from here: http://www.cmmwahid.org/ractivetest
3. You can access the TDD test suites from here: http://www.cmmwahid.org/ractivetest/jasmine/specrunner.html
4. You can download the zipped package from the following location: http://www.cmmwahid.org/RactiveTest.zip

Note: Please note the SpecRunner utilizes "LoadFixtures" function from Jasmine-Jquery utility which requires a server (such as wamp or rake etc) to be called from.

Other information: 
==================

1. Progress bars are dynamically generated from the ProgressBars Dropdown Box... 
add more entries to the dropdown box to generate more Progress bars. or remove an entry to remove the progressbar from the view.

Future Improvement:
===================

1. One of the future improvements is in our mind is to add add and remove controls to the control panel to dynamically add or remove dropdown list items so that the progress bars can be generated on the fly.

Bugzilla:
=========

1. Two of the specs in the specrunners are failing when all of them are run collectively. However there are not logic error since the are Ok when run individually.
