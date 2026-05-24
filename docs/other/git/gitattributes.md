# .gitattributes

```
* text eol=lf
*.exe binary
*.dll binary
```

- `*`: This is a wildcard that matches all files in your repository.
- **`text`**: This attribute tells Git that the file should be treated as text.
- **`eol=lf`**: This setting enforces the use of LF (Line Feed) as the end-of-line character for all text files. It ensures consistency in line endings across different operating systems (e.g., Unix/Linux use LF, while Windows uses CRLF). With this setting, all text files will have LF line endings in the repository, even if different operating systems use different line endings locally.

- **`.exe`**: This pattern matches all files with the `.exe` extension, typically executable files in Windows.
- **`binary`**: This attribute tells Git that these files are binary files. Binary files are not text and should not be subject to line-ending normalization or other transformations that might occur with text files. Git will handle them as is, without attempting to interpret their contents.