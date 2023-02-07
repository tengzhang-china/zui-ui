cd "../"
git pull
git branch
git tag

echo "删除重复的tag：$1"
sleep 5
git tag -d $1
git push origin :refs/tags/$1

echo "创建tag版本号：$1"
git tag $1
git push origin $1
sleep 5