# Deployment Notes

## GitHub Pages Deployment Issue

When pushing, you may encounter an error about the workflow scope for the Personal Access Token (PAT).

### Error:
```
! [remote rejected] master -> master (refusing to allow a Personal Access Token to create or update workflow `.github/workflows/deploy.yml` without `workflow` scope)
```

### Solution 1: Update Your Personal Access Token (Recommended)

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Find your token or create a new one
3. Make sure it has the `workflow` scope checked
4. Update your git credentials with the new token

### Solution 2: Push Without Workflow File First

If you need to push immediately without updating the PAT:

1. Temporarily remove the workflow file from git:
   ```bash
   git rm --cached .github/workflows/deploy.yml
   git commit -m "Temporarily remove workflow file"
   git push
   ```

2. After pushing, you can:
   - Add the workflow file back via GitHub web UI
   - Or update your PAT and then push the workflow file separately

### Solution 3: Use GitHub CLI or SSH

Instead of using a PAT over HTTPS, you can:
- Use GitHub CLI (`gh auth login`)
- Use SSH keys (set up SSH key in GitHub settings)

### After Setting Up Workflow

Once the workflow file is in the repository:

1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The workflow will automatically build and deploy on every push to master

The workflow will:
- Build the React app using Vite
- Deploy the `dist/` folder to GitHub Pages
- Work automatically on every push
