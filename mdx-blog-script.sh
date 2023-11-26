sudo yum update -y
sudo yum install -y docker
sudo service docker start

sudo docker run -d -p 80:3000 kbachand/blog:latest
