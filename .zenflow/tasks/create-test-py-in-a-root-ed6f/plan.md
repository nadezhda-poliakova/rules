# Quick change

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

This is a quick change workflow for small or straightforward tasks where all requirements are clear from the task description.

### Your Approach

1. Proceed directly with implementation
2. Make reasonable assumptions when details are unclear
3. Do not ask clarifying questions unless absolutely blocked
4. Focus on getting the task done efficiently

This workflow also works for experiments when the feature is bigger but you don't care about implementation details.

If blocked or uncertain on a critical decision, ask the user for direction.

---

## Workflow Steps

### [x] Step: Implementation
<!-- chat-id: ac209de0-a202-4bed-aa3e-1ba0bbaec928 -->

Implement the task directly based on the task description.

1. Make reasonable assumptions for any unclear details
2. Implement the required changes in the codebase
3. Add and run relevant tests and linters if applicable
4. Perform basic manual verification if applicable

Save a brief summary of what was done to `{@artifacts_path}/report.md` if significant changes were made.

### [x] Step: Create another one
<!-- chat-id: aac18cc2-b502-41aa-8adb-f5be7d67264d -->
<!-- agent: ZEN_CLI -->

### [x] Step: Create another one else
<!-- chat-id: 3df576f6-064c-4433-aedb-c33be38fb7c2 -->

### [x] Step: Create else
<!-- chat-id: e31792da-abd1-453a-ba92-8d490c4774f2 -->
