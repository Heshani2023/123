# Team Processes

This document contains information about the team standards and processes that were adopted for this project.

## Git

- Branches will be named `<name-of-dev>/<issue-#>/<oneline-description>`.

- As and when conflicts occur with the master branch, a 
git rebase will be executed to align the branch and maintain a clean history

## Code Reviews

- A PR shall not be merged until all devs approve(either via commenting on the PR for code work and commenting on the story for non-code work)
- Any suggestions on the PR must be resolved before the PR can be merged.
- Code will be reviewed as per the DRY (Don't Repeat Yourself) and SOLID principles.

## Checklist for Code Review

## The Pull Request Process:

Once the branch is ready to merge in the master, a PR should be created for that and on the mean time the task from **in Progress**  will be moved to **Reviewed** on the kanboard.
Then the **request for changes** will be initiated on the same PR by adding comments to the PR, and have discussion related to that. Once the is changes the done, it's again committied on the same branch and the PR is updated accordingly.
Once all the suggestions/reviews are done, than **Approved** status is given to that PR, and it's moved from to **Done** tasks on the board.
Below is the rough draft of what's happening actually in terms of github.

![PR Process](/public/img/pr_process.png)
(The figure has been collected from [here](https://www.swarmia.com/blog/a-complete-guide-to-code-reviews/))

## Code Guidlines
To maintain code review standards across developers, it's a good idea to have guidelines for what to focus on in code reviews. Here's what we recommend focusing on:

**Functionality:** Does the code behave as the PR author likely intended? Does the code behave as users would expect?
**Complexity:** Would another developer be able to easily understand and use the code?
**Tests:** Does the PR have correct and well-designed automated tests?
**Naming:** Are names for variables, functions, etc. descriptive?
**Comments:** Are the comments clear and useful?
**Documentation:** Did the author also update relevant documentation?
Developers shouldn't spend their time reviewing things that can be automatically checked. Like for the pdf files or .md files, there's no need for this check list as it is specifically for the Dev tasks.

## Technical Discussions

- As and when necessary, the team will get together on Discord and call/screen share to hold technical meetings and decide on how to solve the present issue. 

## User stories

- A format was agreed upon for user stories and this was made a template so that the team can easily created via the Issues tab on github. 

## Testing

- codesandbox.io wil be used to test code so that everyone can ensure their code runs uniformly w/o local issues.

## Deployment

- codesandbox.io can be used to 'deliver' code so that
- Devs can use the link to attach to the PR to prove working code and
- The marker can use a url to test the final product and see the code.

## Deadlines

- The team agreed on weekly deadlines to merge code so that bottlenecks due to certain work item scould be avoided.
- These deadlines were followed except in some minor cases due to issues resolving conflicts in Git. **The code deadlines were set to 19th March, 24th March, 28th March.**

## Problems Faced

- Since the technology stack was new for all team members, all members were involved in their own tasks most of the time and reviewing and integrating each other's work posed a challenge.
- **Resolving the conflicts between team members code combined with our rigorous standards around testing (A codesandbox link for each PR) meant that we could not merge in new functionalities that are mostly complete on the frontend and backend. We will need to try to resolve such git conflicts earlier on the next sprint.**
- Bottlenecks because of the approval process as all team members weren't available all the time.
- Lack of experience in Javascript and Typescript made debugging very difficult and since Typescript has a steep learning curve, that didn't help either.
- Some difficulty around using the free version of Code Sandbox as it doesn't allow private repos to be deployed and the free version has a CPU limitation as well.
- The free server of MongoDB Atlas has limited space which caused a bit problems for testing purposes.
- Lack of experience around Git for most team members caused problems as Git has its own learning curve.
