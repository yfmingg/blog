#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

# ���ɾ�̬�ļ�
npm run docs:build

# �������ɵ��ļ���
cd docs/.vuepress/dist

# ����Ƿ������Զ�������
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# ��������� https://<USERNAME>.github.io
git push -f https://github.com/yfmingg/yfmingg.github.io.git master

# ��������� https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -