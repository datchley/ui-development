# Peer Review Guide
A code review comment:
> Once you are done trying to 'optimize' this routine,
 and have realized what a terrible mistake that was,
 please increment the following counter as a warning
 to the next guy:
 
> total_hours_wasted_here = 42

## Why do Peer Review at all?
Done properly, peer reviews can ensure project integrity, help educate developers and bring your development team closer together. Peer reviews provide a way to exchange tribal knowledge between developers. They also provide a way to learn from the alternative perspectives and experiences around you.

Sure, you can document expectations and policy around code, but in reality&#8482; those documents rarely get read; and even if they are read and understood you need a way to enforce those guidelines.

## Who should do the peer review?
Technically, any other team member should be able to give some perspective on your commits, however, the people that are the most effective are the developers that are building similar features or have experience building similar features and developers of the systems that you interact with.

Be careful not to discount the perspective of less experienced and junior developers. Sometimes the lack of experience or ignorance of a concept allows them to ask the best questions and challenge the norm if empowered.

## Commenting on Commits and Communication
Things to remember:

* You may be reviewing code but there is another human who was responsible for that code. Yes, humans have feelings and you should care about them. 
* There are probably things they did well in the pull request that you could call out, which provides positive reinforcement.

The tone is very important in peer reviews. Being positive, constructive and vulnerable are key attributes to connect with someone’s work. Even when you find bugs in the code or missing functionality, keeping a constructive tone in your comments encourages team members to improve instead of provoking a defensive response.

There are times when making a joke of how we feel about something may be the key to break the pressure of a deadline and inject good energy. Note that you should take a lot of care on when to do it and whether the author of the pull request has a sense of humor that connect with yours.

## Is Your Code Ready for Peer Review?
Peer reviewing starts by reading code that someone has written. If the code is easy to read, then we can go to the next step (testing it). 

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand.

> **--Martin Fowler**

So, before you move your ticket to being *review* ready, consider the following checklist:

- [x] The code is clear and meets our coding standards.
- [x] I have commented my code enough and those comments are well written.
- [x] The commit messages match with the changes in code.
- [x] Finally, I create a pull request and add testing instructions at the top for someone else to peer review it.

The main point of the above list is that you want your code to be tested and merged quickly. Therefore, the easier you make it for the peer reviewer, the better chance you have to get it into the main branch and resolving the related ticket.

## Peer Reviewing Checklist
So, you're going to peer review some commits.  How do you go about doing that? If the commits are huge, do you review 1000+ lines of code?  I doubt it; and if you tried it would be a very ineffective review and a waste of time. Here's a reasonable checklist to follow when you're peer reviewing someone's commit.

- [x] Does the code follow our Coding Standards and Style Guidelines?
- [x] Is the code well documented?
- [x] Are there testing instructions on the ticket?
- [x] Does the code rely on our existing APIs and libraries?
- [x] Are all comments in the commit resolved or discussed (*other people might be commenting on the commit as well*)?
- [x] Does this request need any follow up tickets? Are they created?
- [x] If there is a unit testing environment, do all tests pass?
- [x] Are the requirements of the ticket met in your local environment or in a testing environment? How would you know it works?
- [x] Are there database updates? Are there tickets/tasks for them and have they been reviewed?
- [x] Are there any changes in existing features or components? Do they revert as expected?
- [x] Look back at the requirements — are they met in an efficient manner? Would you have architected the changes differently?

## The Details...
When you (*the developer*) are ready for a Peer Review, be sure and do the following:

- [x] Mark the ticket as 'Resolved', with an appropriate resolution in Jira.
- [x] Comment on the resolution to the ticket and fully describe the solution and issues at hand so
  reviewers understand
- [x] In the comment, put a link to the commit in Beanstalk, this is where the Reviewer will go to
  review the code and comment on the commit and/or mark it as 'Approved'.
- [x] Be sure and 're-assign' the ticket to you (*when it moves between columns to Code Review, it gets reassigned 
  to the default QA user*)

You'll link to the commit detail screen like the one below:

![](/dist/assets/images/beanstalk-commit-link.png)

As a reviewer, you'll want to use the above link to review the changes and implementation using the checklists from above.  If you find something, leave a comment directly on the commit page by clicking on the relevant line and adding your comment.

![](/dist/assets/images/beanstalk-commit-comment.png)

The developer will get notified via email and the conversation around those comments can take place on the commit directly (*not in Jira*).  Once the comments and discussions have been satisfied, the reviewer should mark the commit as 'Approved' by clicking the button of the same name at the bottom of the commit detail page.
