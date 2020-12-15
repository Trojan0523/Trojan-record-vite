rm - rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin https://gitee.com/Trojan0523/record_preview.git &&
# git remote add origin https://github.com/Trojan0523/TRecord_Preview.git
git push -f -u origin master &&

