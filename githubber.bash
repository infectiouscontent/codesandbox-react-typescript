#!/bin/bash
echo "# codesandbox-react-typescript" >> README.md
git init
git add --all
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:infectiouscontent/codesandbox-react-typescript.git
git push -u origin main
