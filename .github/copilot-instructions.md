# Repository Guidelines

## Overview

This repository is a beginner-friendly JavaScript learning journal. Lesson files are grouped by numbered topic directories (`01_basics`, `02_basics`, and `03_basics`), while the root scripts provide small standalone examples.

## Code Style

- Keep examples simple, readable, and focused on the lesson topic.
- Preserve the existing numbered-file organization and naming style.
- Prefer `const` by default and `let` when reassignment is required; avoid introducing new `var` unless the lesson is specifically demonstrating it.
- Follow the surrounding file's formatting and quote style. Avoid unrelated reformatting.
- Add concise comments only when they clarify a teaching point.

## Validation

- Run an individual lesson with `node path/to/file.js`.
- For changes spanning multiple examples, run each affected file individually because lesson files are standalone scripts.
- Treat console output as part of the learning example and keep it intentional.

## Change Scope

- Make focused edits tied to the lesson or request.
- Do not add dependencies or build tooling unless the task explicitly requires them.
- Update `README.md` when adding a new learning area or changing how the repository is used.
