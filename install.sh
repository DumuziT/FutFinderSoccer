sudo apt update
sudo apt-get update
sudo apt-get install openssl -y
sudo apt update
sudo apt-get update
openssl genrsa -out key.pem 2048
openssl req -new -x509 -sha256 -key key.pem -out certificate.pem -days 365

