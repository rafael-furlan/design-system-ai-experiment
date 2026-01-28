# GitHub Setup Instructions

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `design-system-ai-experiment` (or your preferred name)
3. Description: "Design tokens system matching Figma variable structure"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/design-system-ai-experiment.git

# Or if using SSH:
# git remote add origin git@github.com:YOUR_USERNAME/design-system-ai-experiment.git

# Push your code
git branch -M main
git push -u origin main
```

## Step 3: Verify

```bash
# Check remote is configured
git remote -v

# Should show:
# origin  https://github.com/YOUR_USERNAME/design-system-ai-experiment.git (fetch)
# origin  https://github.com/YOUR_USERNAME/design-system-ai-experiment.git (push)
```

## Quick Command (if you already have the repository URL)

Replace `YOUR_REPO_URL` with your actual GitHub repository URL:

```bash
git remote add origin YOUR_REPO_URL
git branch -M main
git push -u origin main
```
