# Project Management App 

### Installation

```bash
npm init
```
![1](https://github.com/user-attachments/assets/7556efef-df1c-4c92-ad6b-e11e2cfbf8a5)

```bash
npm install express
npm install nodemon
npm install mongoose
```
![2](https://github.com/user-attachments/assets/58e19bbd-386b-46a1-9eec-b826349cc658)

Creating database and Insert data into collections
![3](https://github.com/user-attachments/assets/e8e7d152-0dcf-4813-8535-04864d74efa7)


### GET methods
Get all projects
![4](https://github.com/user-attachments/assets/efb030c3-93ce-4850-b567-3e7bff170d0d)

Get all users
![4_2](https://github.com/user-attachments/assets/51d95abe-fa62-40dc-bae6-56c308a7a914)

Get all tasks
![4_3](https://github.com/user-attachments/assets/d1f8c35f-d3ba-4fc7-85c5-4873812f6032)

Create an endpoint to retrieve all tasks associated with a specific project ID.  
Endpoint: GET /project/{projectId}/tasks 
![5](https://github.com/user-attachments/assets/4c1937b2-a914-4db8-92fc-22c6c1ee04dc)

Create an endpoint to retrieve the manager of a given project ID. Return only the 
project name, manager name, and email address. 
Endpoint: GET /project/{projectId}/manager 
![6](https://github.com/user-attachments/assets/e7e5ba57-3101-4581-bed3-79291e52dcf1)

Create an endpoint to retrieve the tasks and the users they are assigned to for a 
specific project ID. The result should contain only the task name and user name. 
Endpoint: GET /project/{projectId}/tasks-users
![7](https://github.com/user-attachments/assets/4948266c-ada6-46d3-add4-e4005db37c13)

Ensure your API handles errors gracefully and returns appropriate HTTP status codes. 
![8](https://github.com/user-attachments/assets/52d255ee-f561-415b-9c8a-2c4023172d73)

Include validation for the request parameters where necessary.
![10](https://github.com/user-attachments/assets/8686db72-8849-4cc1-9eb6-20574d51cfa5)
