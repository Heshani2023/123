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
- However, these deadlines turned out to be too optimistic since there were several problems getting a working skeleton with a connected workflow. The code deadlines were tentatively set to 25th Feb, 5th March, 7th March and 10th March.

## Problems Faced

- Bottlenecks because of the approval process as all team members weren't available all the time.
- Due to the lack of a code skeleton at the beginning of the project, concrete work couldn't be started by all members of the team concurrently.
- Lack of experience in Javascript and Typescript made debugging very difficult and since Typescript has a steep learning curve, that didn't help either.
- Some difficulty around using the free version of Code Sandbox as it doesn't allow private repos to be deployed and the free version has a CPU limitation as well.
- The free server of MongoDB Atlas has limited space which caused a bit problems for testing purposes.
- Lack of experience around Git for most team members caused problems as Git has its own learning curve.
- Since the technology stack was new for all team members, all members were involved in their own tasks most of the time and reviewing and integrating each other's work posed a challenge.
