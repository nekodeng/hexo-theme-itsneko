#/bin/bash
#author is huanhao
#by http://301technology.cn/
#https://hexoscript.github.io/
DIR=./themes
function deploy()
{
hexo clean
	echo "Successful execution of hexo clean"
hexo g
	echo "Successful execution of hexo g"
hexo d
	echo -e "\033[32mUpload successfully performed!\033[0m"
	echo -e "\033[36mBut you had better check your github\033[0m"
}
if [[ -d $DIR ]]; then
	deploy
else
	echo -e "\033[31mPlease run in the root directory\033[0m"
fi