# Rules

This is a demonstration repository for the Zencoder rules system, showing how instructions and application rules work based on file context.

## Description

This repository contains examples of various types of rules and instructions that can be applied to files depending on their location, type, and other criteria.

## Project Structure

```
/
├── .zencoder/rules/          # Zencoder rules directory
│   ├── always-apply.md       # Rules applied always
│   ├── repo-instruction.md   # General repository instructions  
│   ├── path-instruction.md   # Rules for special paths
│   ├── without-frontmatter.md # Example of basic structure
│   ├── empty-instruction.md  # Example of empty instruction
│   ├── js/                  # Rules for JavaScript files
│   └── py/                  # Rules for Python files
├── js-examples/             # JavaScript code examples
│   └── addition.js
├── py-examples/             # Python code examples
│   └── addition.py
└── special-path/            # Test directory for path-instruction
    └── test.txt
```

## Rule Types

### 1. Always Applied Rules (`always-apply.md`)
- Applied regardless of context
- `alwaysApply: true`
- Don't require global patterns

### 2. Repository Rules (`repo-instruction.md`)
- Applied to all repository files
- `globs: ["**/*"]`
- General instructions for the entire project

### 3. Path-Based Rules (`path-instruction.md`)
- Applied to files in specific directories
- `globs: ["special-path/**/*"]`
- Specific instructions for certain paths

### 4. Language-Specific Rules
- Rules in `js/` and `py/` folders
- Applied to files of corresponding programming languages

## Frontmatter Structure

Each rule contains YAML frontmatter with metadata:

```yaml
---
description: "Rule description"
globs: ["**/*.js", "src/**/*"]  # File patterns
alwaysApply: false              # Apply always or conditionally
---
```

## Usage Examples

The repository contains code examples in different languages:

- **JavaScript**: `js-examples/addition.js` - addition function with JSDoc
- **Python**: `py-examples/addition.py` - addition function with docstring

Each example demonstrates proper documentation and code structure according to corresponding rules.

## How It Works

1. Zencoder scans the `.zencoder/rules/` directory
2. Applies rules with `alwaysApply: true` to all requests
3. Matches current file against global patterns of other rules
4. Applies corresponding instructions to the work context

## Testing Rules

To verify rule functionality:

1. Open files from different directories
2. Send requests to Zencoder
3. Check that responses contain appropriate prefixes:
   - "I use the instruction always-apply"
   - "I use the instruction repo-instruction" 
   - "I use the instruction path-instruction"
   - etc.

## Adding New Rules

To add a new rule:

1. Create a `.md` file in `.zencoder/rules/`
2. Add frontmatter with description and global patterns
3. Describe instructions for the AI assistant
4. Test on corresponding files