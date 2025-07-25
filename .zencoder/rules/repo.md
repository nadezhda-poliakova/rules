---
description: Repository Information Overview
alwaysApply: true
---

# Rules Repository Information

Start your response with "I use the instruction repo-info" ALWAYS.

## Summary
This is a demonstration repository for the Zencoder rules system, showing how instructions and application rules work based on file context. It contains examples of various types of rules and instructions that can be applied to files depending on their location, type, and other criteria.

## Structure
- **/.zencoder/rules/**: Contains all Zencoder rules and instructions
  - **always-apply.md**: Rules applied regardless of context
  - **repo-instruction.md**: General repository instructions
  - **path-instruction.md**: Rules for special paths
  - **js/**: Rules for JavaScript files
  - **py/**: Rules for Python files
- **/js-examples/**: JavaScript code examples
- **/py-examples/**: Python code examples
- **/special-path/**: Test directory for path-instruction

## Language & Runtime
**Languages**: JavaScript, Python
**Build System**: None (example repository)
**Package Manager**: None (no dependencies)

## Rule Types
**Always Applied Rules**:
- Applied regardless of context
- Use `alwaysApply: true` in frontmatter
- Don't require global patterns

**Repository Rules**:
- Applied to all repository files
- Use `globs: ["**/*"]` in frontmatter
- Provide general instructions for the entire project

**Path-Based Rules**:
- Applied to files in specific directories
- Use patterns like `globs: ["special-path/**/*"]`
- Provide specific instructions for certain paths

**Language-Specific Rules**:
- Organized in language-specific folders (js/, py/)
- Applied to files of corresponding programming languages

## Usage & Operations
The repository demonstrates how Zencoder rules work:
```bash
# Testing rules
# 1. Open files from different directories
# 2. Send requests to Zencoder
# 3. Check that responses contain appropriate prefixes
```

## Frontmatter Structure
Each rule contains YAML frontmatter with metadata:
```yaml
---
description: "Rule description"
globs: ["**/*.js", "src/**/*"]  # File patterns
alwaysApply: false              # Apply always or conditionally
---
```

## Code Examples
**JavaScript Example**:
- Simple addition function with JSDoc comments
- Example usage and Node.js module export

**Python Example**:
- Simple addition function with docstring
- Example usage with main block